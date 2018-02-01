import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class MyjsonService {


  readonly ROOT_URL = `https://my-json-server.typicode.com/imjayabal/fake-json`;

  readonly LOCAL_URL = `./assets/data/db.json`;

  readonly LONG_URL = `https://jsonplaceholder.typicode.com`;

  constructor(private https: HttpClient) {}

  getData() {
    return this.https.get(this.ROOT_URL + `/posts`);
  }
  postData(myPost) {
    return this.https.post(this.ROOT_URL  + `/posts`, JSON.stringify(myPost));
  }
  udpateData(data) {
    return this.https.patch(this.ROOT_URL + `/posts` + '/' + data.id, JSON.stringify({ isRed: true }));
    // return this.https.put(this.ROOT_URL + `/posts` + '/' + data.id, JSON.stringify(data));
    // for entier data in request payload (console> network) use "put" for particular changes use "patch"
  }
  deleteData(data) {
    return this.https.delete(this.ROOT_URL + `/posts` + '/' + data.id);
  }


  getLocalData() {
    return this.https.get(this.LOCAL_URL);
  }

  getLongData() {
    return this.https.get(this.LONG_URL + `/posts`);
  }



}
