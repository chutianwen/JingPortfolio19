import { Component, OnInit } from '@angular/core';

export declare function typeWriterAnimationController(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    typeWriterAnimationController()
  }

  homeTypeWriterAnimation(){
    typeWriterAnimationController();
  }
}
