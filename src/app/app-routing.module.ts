import { RecentWorkComponent } from './modules/recent-work/pages/recent-work/recent-work.page';
import { Project3Component } from './modules/project3/pages/project3/project3.page';
import { Project2Component } from './modules/project2/pages/project2/project2.page';
import { Project1Component } from './modules/project1/pages/project1/project1.page';
import { HomeComponent } from './modules/home/pages/home/home.page';
import { ContactComponent } from './modules/contact/pages/contact/contact.page';
import { AboutMeComponent } from './modules/about-me/pages/about-me/about-me.page';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recent-work', component: RecentWorkComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  AboutMeComponent,
  ContactComponent,
  RecentWorkComponent,
  Project1Component,
  Project2Component,
  Project3Component

];
