import { Component, OnInit, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'chien-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  // providers: [
  //   {provide: MD_DIALOG_DATA, useValue: {} },
  //   {provide: MdDialogRef, useValue: {} }
  // ]
})
export class ErrorComponent implements OnInit {

  _injectedValue: any

  constructor(
    public thisDialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if(this.data) {
      this._injectedValue = this.data;
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.thisDialogRef.close();
  }
}