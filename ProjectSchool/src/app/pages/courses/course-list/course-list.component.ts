import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.scss' ]
})
export class CourseListComponent implements OnInit {
  public courseList: Course[] = [];
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder)
  public categoryValue = Object.values(Category)
  public form!: FormGroup;

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: ['']
    })
  }

  ngOnInit(): void {
    this.getCourses()
    this.validation()
  }

  public doSearch(): void {

  }

  public getCourses(): void {
    this.courseService.get().subscribe((response: Course[]) => {
      this.courseList = response;
    })
  }

}
