import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  dateDisplay(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully',
      'August', 'September', 'October', 'November', 'December'];
    const d = date.getDate();
    const day = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const h = date.getHours();
    let hr: string = h.toString();
    if (h < 10) {
      hr = '0' + hr;
    }
    let m = date.getMinutes();
    let min: string = m.toString();
    if (m < 10) {
      min = '0' + min;
    }
    const s = date.getSeconds();
    let sec = s.toString();
    if (s < 10) {
      sec = '0' + sec;
    }

    document.getElementById('system_time').innerHTML =
      `${days[day].substr(0, 3)} ${months[month].substr(0, 3)} ${day.toString()} ${hr}:${min}:${sec}`;
    document.getElementById('system_date_line').innerHTML =
      `${days[day].substr(0, 3)} ${months[month].substr(0, 3)} ${day.toString()} ${year}`;
  }

  ngOnInit() {
    this.dateDisplay();
  }

}
