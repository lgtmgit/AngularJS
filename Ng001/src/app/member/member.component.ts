import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {MemberService} from './member.service';

interface TestMember {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members: TestMember[];
 // constructor(private http: Http) { }
  constructor(private  memberService: MemberService) {}

  ngOnInit() {
   /* this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=6`)
      .map(res => res.json())
      .subscribe(data => {
        if (data) {
          this.members = data;
        }
      });*/
    this.memberService.getMembers()
      .subscribe(data => {
        if (data) {
          this.members = data;
        }
      });
  }

}
