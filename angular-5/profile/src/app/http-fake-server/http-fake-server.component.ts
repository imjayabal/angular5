import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-fake-server',
  templateUrl: './http-fake-server.component.html',
  styleUrls: ['./http-fake-server.component.scss']
})
export class HttpFakeServerComponent implements OnInit {

  name: string = '';
  age: number;
  id: number;
  employeeCode: number;
  dataFound: boolean;
  btnText:string = 'Get Data';

   // post data
  //  postName: string = '';
  //  postAge: number;
  //  postEmpId: number;

  readonly FAKE_URL = `https://my-json-server.typicode.com/imjayabal/fake-json`;

  constructor( private https: HttpClient ) { }

  keyUp(event: any) {
      this.name = event.target.value;
      this.dataFound = false;
  }

  getData() {
    this.https.get( this.FAKE_URL + `/posts/?name=${this.name}`).subscribe(
      (data: any[]) => {
        if (data.length) {
          this.age = data[0].age;
          this.id = data[0].id;
          this.employeeCode = data[0].employeeCode;
          this.dataFound = true;
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  keyDown(event) {
    if (event.keyCode === 13) {
      this.getData();
    }
  }



  // keyPostName(event: any) {
  //   this.postName = event.target.value;
  // }
  // keyPostAge(event: any) {
  //   this.postAge = event.target.value;
  // }
  // keyPostEmpId(event: any) {
  //   this.postEmpId = event.target.value;
  // }

  // postData() {
  //   this.https.post( this.FAKE_URL + `/posts/`, {
  //     name: this.postName,
  //     age: this.postAge,
  //     employeeCode: this.postEmpId
  //   })
  //   .subscribe(
  //     (data: any) => {
  //       console.log(data);
  //     }
  //   );
  // }

  ngOnInit() {
  }

}
