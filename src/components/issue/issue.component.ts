import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Issue } from '../../types/issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue = new Issue();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentIssue.subscribe(issue => this.issue = issue);
  }

  flushIssue() {
    this.data.flushIssue();
  }

  checkIssue() {
    return this.issue;
  }

}
