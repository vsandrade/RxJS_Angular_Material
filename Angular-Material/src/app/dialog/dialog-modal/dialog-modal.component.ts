import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.matDialogRef.close('Returned Bazinga');
  }

}
