import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consume-http-service',
  templateUrl: './consume-http-service.component.html',
  styleUrls: ['./consume-http-service.component.scss']
})
export class ConsumeHttpServiceComponent {

  getData: any;

  readonly url = `https://my-json-server.typicode.com/imjayabal/fake-json/posts`;

  // Get data
  constructor(private https: HttpClient) {
    https.get(this.url)
    .subscribe(response => {
      this.getData = response;
    });
  }

  // post data
  postData(myVariable: HTMLInputElement) {
    const myPost = { name: myVariable.value };
    myVariable.value = '';

    this.https.post(this.url, JSON.stringify(myPost))
    .subscribe(response => {
      this.getData.splice(0, 0, myPost); // "splice" for insert data begining
      // this.getData.push(myPost); // "push" for insert data last
    });
  }

  // update data
  udpateData(data) {
    // this.https.put(this.url + '/' + data.id, JSON.stringify(data)) // for entier data in request payload (console> network)
    this.https.put(this.url + '/' + data.id, JSON.stringify({ isRed: true })) // for single change in request payload
    .subscribe(response => {
      console.log(response);
    });
  }

  // delete data
  deleteData(data) {
    this.https.delete(this.url + '/' + data.id)
    .subscribe(response => {
      const index = this.getData.indexOf(data);
      this.getData.splice(index, 1);
    });
  }

}
