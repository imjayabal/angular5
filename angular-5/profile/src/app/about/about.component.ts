import { Component, OnInit } from '@angular/core';

// get value from ur id
import { ActivatedRoute } from '@angular/router';

// for redirect to another page
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private rout: ActivatedRoute) {
    // get value from ur id
    this.rout.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

  // for redirect to another page
  sendMeHome() {
    this.router.navigate(['']);
  }

}
