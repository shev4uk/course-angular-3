import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDeleteTodoComponent } from 'src/app/shared/components/dialog-delete-todo/dialog-delete-todo.component';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService
  
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteTodoComponent);

    dialogRef.afterClosed().subscribe(action => {
      console.log(action);
      if (action.event === 'delete') {
        this.todoService.deleteTodo(this.todo.id).subscribe(
          (res) => {
            console.log(res);
            this.deleteTodo.emit(this.todo.id);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  // https://stackoverflow.com/questions/51815455/how-to-pass-data-from-angular-material-dialog-to-parent-component

}
