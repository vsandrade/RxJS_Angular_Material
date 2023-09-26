import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courseList: Course[] = [];
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  public categoryValue = Object.values(Category);
  public form!: FormGroup;
  public sub!: Subscription;

  totalCount: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    });
  }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
    this.form.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value ?? '',
          this.f.search.value ?? ''
        );
      }
    });
    this.getCourses(1, 5, '', '');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  public doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

  public getCourses(
    currentPage: number,
    pageSize: number,
    category: string,
    search: string
  ): void {
    this.sub = this.courseService
      .get(currentPage, pageSize, category, search)
      .subscribe((response: HttpResponse<any>) => {
        this.courseList = response.body as Course[];
        let totalCount = response.headers.get('X-Total-Count');
        this.totalCount = totalCount ? Number(totalCount) : 0;
      });
  }

  public handlePageEvent(e: PageEvent): void {
    this.currentPage = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}
