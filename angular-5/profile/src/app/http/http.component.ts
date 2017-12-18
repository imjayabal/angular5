import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  readonly ROOT_URL = `https://my-json-server.typicode.com/imjayabal/fake-json`;

  posts: any;

  constructor( private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + `/posts`);
  }

  ngOnInit() {
  }

}
