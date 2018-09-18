import { Project2Component } from './shared/components/projects/project2/project2.component';
import { HomeComponent } from './modules/home/pages/home/home.page';
import { ContactComponent } from './modules/contact/pages/contact/contact.page';
import { RecentWorkComponent } from './modules/recent-work/pages/recent-work/recent-work.page';
import { AboutMeComponent } from './modules/about-me/pages/about-me/about-me.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Project1Component } from './shared/components/projects/project1/project1.component';
import { Project3Component } from './shared/components/projects/project3/project3.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'recent-work', component: RecentWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recent-work/project1', component: Project1Component },
  { path: 'recent-work/project2', component: Project2Component },
  { path: 'recent-work/project3', component: Project3Component },

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
  RecentWorkComponent,
  ContactComponent,
  Project1Component,
  Project2Component,
  Project3Component
];
