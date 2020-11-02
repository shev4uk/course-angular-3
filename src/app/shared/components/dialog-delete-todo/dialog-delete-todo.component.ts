import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-delete-todo',
  templateUrl: './dialog-delete-todo.component.html',
  styleUrls: ['./dialog-delete-todo.component.scss']
})
export class DialogDeleteTodoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteTodoComponent>,
  ) { }

  ngOnInit() {
  }

  deleteIten() {
    this.dialogRef.close({event: 'ok'});
  }

}
