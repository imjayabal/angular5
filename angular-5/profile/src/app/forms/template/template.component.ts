import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
