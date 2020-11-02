import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDeleteTodoComponent } from 'src/app/shared/components/dialog-delete-todo/dialog-delete-todo.component';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteTodoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  // https://stackoverflow.com/questions/51815455/how-to-pass-data-from-angular-material-dialog-to-parent-component

}
