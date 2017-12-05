import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item to bucket';
  goalText: any = 'My life first goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    if (this.goalText !== '') {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    }
  }

  removeItem(i) {
    this.goals.splice(i);
    this.itemCount = this.goals.length;
  }




}
