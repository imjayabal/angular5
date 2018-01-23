import { MyjsonService } from './../services/myjson.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  posts: any;
  p: number = 1;

  constructor( private service: MyjsonService) { }

  getPosts() {
    this.posts = this.service.getLongData();
  }

  ngOnInit() {
  }

}
