/*数据模型定义文件*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import {HttpModule} from '@angular/http';
import { MemberComponent } from './member/member.component';
import {MemberService} from './member/member.service';


@NgModule({
  declarations: [
    MemberComponent, MyComponentComponent, AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
