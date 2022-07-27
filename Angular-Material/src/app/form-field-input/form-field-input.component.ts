import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss']
})
export class FormFieldInputComponent implements OnInit {
  public value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
