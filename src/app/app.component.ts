import {Component, OnInit} from '@angular/core';

declare function cursorAnimationController(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JingPortfolio19';

  ngOnInit() {
    cursorAnimationController();
  }

}
