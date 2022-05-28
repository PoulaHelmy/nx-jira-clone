import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lib1Module } from '@jira-clone/lib1';
import { Lib2Module } from '@jira-clone/lib2';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
