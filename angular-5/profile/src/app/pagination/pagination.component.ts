import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/filter';

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

  readonly FAKE_URL = `https://my-json-server.typicode.com/imjayabal/fake-json`;

  constructor(private https: HttpClient) {}


    ngOnInit() {
      this.employees = this.https.get(this.FAKE_URL + `/posts`);
    }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }



}
