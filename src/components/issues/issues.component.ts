import { Component, OnInit } from '@angular/core';
import { Issue } from '../../types/issue';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issue: Issue;
  issues: Issue[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIssues();
    this.data.currentIssues.subscribe(issues => this.issues = issues);
    this.data.currentIssue.subscribe(issue => this.issue = issue);
  }

  setIssue(issue) {
    this.data.setIssue(issue);
  }

}
