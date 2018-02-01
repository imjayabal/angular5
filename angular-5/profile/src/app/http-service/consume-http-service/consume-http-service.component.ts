import { MyjsonService } from './../../services/myjson.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consume-http-service',
  templateUrl: './consume-http-service.component.html',
  styleUrls: ['./consume-http-service.component.scss']
})
export class ConsumeHttpServiceComponent implements OnInit {

  getMyData: any;

  // Get data
  constructor(private service: MyjsonService) {
  }

  ngOnInit() {
    this.service.getData()
    .subscribe(
      response => {
        this.getMyData = response;
      },
      error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  // create post data
  postData(myVariable: HTMLInputElement) {
    const myPost = { name: myVariable.value };
    myVariable.value = '';

    this.service.postData(myPost)
    .subscribe(
      response => {
        this.getMyData.splice(0, 0, myPost); // "splice" for insert data begining
        // this.getMyData.push(myPost); // "push" for insert data last
      },
      (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error.json());
        } else {
          alert ('An unexpected error occurred.');
        console.log(error);
        }
      });
  }

  // update data
  udpateData(data) {
    this.service.udpateData(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        alert ('An unexpected error occurred.');
        console.log(error);
      });
  }

  // delete data
  deleteData(data) {
    this.service.deleteData(data)
    .subscribe(
      response => {
        const index = this.getMyData.indexOf(data);
        this.getMyData.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('This post already deleted');
        } else {
          alert ('An unexpected error occurred.');
          console.log(error);
        }
      });
  }





}
