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

  getLocalData() {
    return this.https.get(this.LOCAL_URL);
  }

  getLongData() {
    return this.https.get(this.LONG_URL + `/posts`);
  }



}
