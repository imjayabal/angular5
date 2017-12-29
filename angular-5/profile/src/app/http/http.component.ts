import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  readonly ROOT_URL = `https://jsonplaceholder.typicode.com`;

  posts: any;
  p: number = 1;

  constructor( private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + `/posts`);
  }

  ngOnInit() {
  }

}
