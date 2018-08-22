/*typeScript脚本文件*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  // 绑定普通文本
 /*template: '<h1>hello {{name}}</h1>',*/
  // 绑定对象属性
  /*template: '<h2>大家好，我是{{name}}</h2>\n' +
    '    <p>我来自<strong>{{address.province}}</strong>省,\n' +
    '      <strong>{{address.city}}</strong>市\n' +
    '    </p><br><p>{{address | json}}</p>'*/
  // json管道
    /*<p>{{address | json}}</p>*/
  // template: '<app-my-component></app-my-component>'
})
export class AppComponent {
 /* title = 'Ng001';*/
 /* name = 'angular';
  address = {
    province: '云南',
    city: '昆明'
  };*/
 skills: string[];
 showSkills: boolean;

 // 构造函数
 constructor() {
   this.showSkills = true;
   this.skills = ['AngularJS 1.x', 'AngularJS 2.x', 'AngularJS 4.x'];
 }
 // 自定义函数
  toggleSkills() {
   this.showSkills = !this.showSkills;
  }
  addSkill(skill: string) {
    const skillStr = skill.trim();
    if (this.skills.indexOf(skillStr) === -1) {
     this.skills.push(skillStr);
    }
  }
}
