import { HomeComponent } from './modules/home/pages/home/home.page';
import { ContactComponent } from './modules/contact/pages/contact/contact.page';
import { RecentWorkComponent } from './modules/recent-work/pages/recent-work/recent-work.page';
import { AboutMeComponent } from './modules/about-me/pages/about-me/about-me.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'recent-work', component: RecentWorkComponent },
  { path: 'contact', component: ContactComponent },
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
  ContactComponent
];
