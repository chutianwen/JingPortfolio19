import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  updateMapMarker() {
    let element = document.getElementById("elem");
    // var desiredPosition = 500;
    let YOffset = window.pageYOffset;
    let counter = document.getElementById("count");
    // counter.innerHTML = 'pageyOffset: ' + window.pageYOffset;
    console.debug(YOffset);
    if (YOffset < 200) {
      element.style.cssText += "transform:translate(-400px, -26px); "; //Sunnyvale top: 47%;left: 23%;
    } else if (YOffset > 200 && YOffset < 500) {
      element.style.cssText += "transform:translate(275px, -43px);"; //Maryland
    } else if (YOffset > 500 && YOffset < 1173) {
      element.style.cssText += "transform:translate(175px, -123px);"; //Michigan
    } else if (YOffset > 1200) {
      element.style.cssText += "transform:translate(-265px, 75px);"; //Arizona
    }
  }

  constructor() { }

  ngOnInit() {
    window.onscroll = this.updateMapMarker;
    console.log("scrolled");
  }
}
