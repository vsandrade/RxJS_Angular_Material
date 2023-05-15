import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})
export class ToolbarTitleComponent implements OnInit {
  @Input() title: string = "";
  @Input() icon: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
