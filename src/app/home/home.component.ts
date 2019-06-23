import { Component, OnInit } from '@angular/core';
import {Project, Projects} from '../project';
import {TitlePlayer} from '../title-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[];
  titlePlayer: TitlePlayer = new TitlePlayer();
  constructor() { }

  imagePathAsBackground(img: string) {
    return `url(assets/img/pj/${img}.png)`;
  }

  ngOnInit() {
    this.titlePlayer.run();
    this.projects = Projects;
  }

}
