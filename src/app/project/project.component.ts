import { Component, OnInit } from '@angular/core';

export declare function projectBGAnimationController(): any;
export declare function cardAnimationController(): any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    projectBGAnimationController();
    cardAnimationController();
  }

}
