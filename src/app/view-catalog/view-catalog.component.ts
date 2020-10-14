import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.scss']
})
export class ViewCatalogComponent implements OnInit {

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
  }

  changeView(view) {
    this.data.viewCatalog.next(view);
  }

}
