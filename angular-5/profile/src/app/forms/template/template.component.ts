import { MyjsonService } from './../../services/myjson.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  myDropdownData: any;

  myPatient= [
    { id: 1, name: 'New Patient'},
    { id: 2, name: 'Existing Patient'}
  ];



  constructor( private service: MyjsonService) { }

  ngOnInit() {
    this.myDropdownData = this.service.getData();
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }




}
