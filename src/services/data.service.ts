import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { dateReplaceTZ, sortByDate, fromLastWeek } from '../helpers/helpers';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private issuesSource = new BehaviorSubject([]);
  currentIssues = this.issuesSource.asObservable();
  private issueSource = new BehaviorSubject(null);
  currentIssue = this.issueSource.asObservable();

  constructor() { }

  getIssues() {
    const apiData = ajax('https://api.github.com/repos/facebook/react/issues');
    apiData.subscribe(res => this.issuesSource.next(dateReplaceTZ(sortByDate(fromLastWeek(res.response)))));
  }

  setIssue(res) {
    this.issueSource.next(res);
  }

  flushIssue() {
    this.issueSource.next(null);
  }

}
