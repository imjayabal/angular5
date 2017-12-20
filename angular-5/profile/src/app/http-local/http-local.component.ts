import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-local',
  templateUrl: './http-local.component.html',
  styleUrls: ['./http-local.component.scss']
})
export class HttpLocalComponent implements OnInit {

  posts: any;

  readonly ROOT_URL = `./assets/data/db.json`;

  constructor( private https: HttpClient) { }

  getLocal() {
    this.posts = this.https.get(this.ROOT_URL);
  }

  ngOnInit() {
  }

}
