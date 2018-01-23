import { Component, OnInit } from '@angular/core';
import 'rxjs/operator/filter';
import { MyjsonService } from '../services/myjson.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  employees: any;
  key: string = 'id';
  reverse: boolean = false;
  p: number = 1;
  searchFilter: any;



  constructor(private service: MyjsonService) {}


    ngOnInit() {
      this.employees = this.service.getData();
    }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }



}
