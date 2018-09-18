import { ContactComponent } from './modules/contact/pages/contact/contact.page';
import { RecentWorkComponent } from './modules/recent-work/pages/recent-work/recent-work.page';
import { AboutMeComponent } from './modules/about-me/pages/about-me/about-me.page';
import { HomeComponent } from './modules/home/pages/home/home.page';
import { Project3Component } from './shared/components/projects/project3/project3.component';
import { Project2Component } from './shared/components/projects/project2/project2.component';
import { Project1Component } from './shared/components/projects/project1/project1.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    HomeComponent,
    AboutMeComponent,
    RecentWorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
