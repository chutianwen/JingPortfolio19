import { Component, OnInit } from '@angular/core';
import {Project} from '../project';

export declare function typeWriterAnimationController(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Fund Analyzer',
      url: '/fund-analyzer',
      img: "FA",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    },
    {
      name: "WebCRD",
      url: "CRD",
      img: "CRD",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    },
    {
      name: "Service Platform",
      url: "BService",
      img: "BService",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    },
    {
      name: "Website",
      url: "BSite",
      img: "BSite",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    },
    {
      name: "OFAC",
      url: "ofac",
      img: "OFAC",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    },
    {
      name: "FinPro Gateway",
      url: "FinPro",
      img: "FinPro",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    },
    {
      name: "Broker Check",
      url: "BrokerCheck",
      img: "BrokerCheck",
      slogan: "",
      desc: "Fund Analyzer is a great tool",
      tag: "Web",
      company: "FINRA"
    }];

  constructor() { }

  imagePathAsBackground(img: string) {
    return `url(assets/img/pj/${img}.png)`;
  }

  ngOnInit() {
    typeWriterAnimationController();
  }

}
