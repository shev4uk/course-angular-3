import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeleteTodoComponent } from 'src/app/shared/components/dialog-delete-todo/dialog-delete-todo.component';
import { Priority, Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.scss']
})
export class TodoSingleComponent implements OnInit {

  id: number;
  todo: Todo;
  day: number;
  readonly priority = Priority;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoSingle(this.id).subscribe((todo) => {
      this.todo = todo;
      this.day = +((+new Date(todo.endDate) - +new Date()) / 1000 / 60 / 60).toFixed(1);
    });
  }

  deleteTodo() {
    const dialogRef = this.dialog.open(DialogDeleteTodoComponent);

    dialogRef.afterClosed().subscribe(action => {
      if (action.event === 'delete') {
        this.todoService.deleteTodo(this.todo.id).subscribe(() => {
            this.router.navigate(['/todo']);
          }
        );
      }
    });
  }

}
