import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Issue } from '../types/issue';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  issue = new Issue;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentIssue.subscribe(issue => this.issue = issue);
  }

}
