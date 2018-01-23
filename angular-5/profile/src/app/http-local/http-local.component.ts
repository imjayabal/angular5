import { MyjsonService } from './../services/myjson.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-local',
  templateUrl: './http-local.component.html',
  styleUrls: ['./http-local.component.scss']
})
export class HttpLocalComponent implements OnInit {

  posts: any;

  constructor( private service: MyjsonService) { }

  getLocal() {
    this.posts = this.service.getLocalData();
  }

  ngOnInit() {
  }

}
