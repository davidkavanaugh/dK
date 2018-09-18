import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Project1Component } from './shared/components/project1/project1.component';
import { Project2Component } from './shared/components/project2/project2.component';
import { Project3Component } from './shared/components/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
