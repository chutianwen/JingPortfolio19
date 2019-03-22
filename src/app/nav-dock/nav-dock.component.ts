import { Component, OnInit } from '@angular/core';

declare function dockAnimationController(): any;

@Component({
  selector: 'app-nav-dock',
  templateUrl: './nav-dock.component.html',
  styleUrls: ['./nav-dock.component.css']
})
export class NavDockComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    dockAnimationController();
  }

}
