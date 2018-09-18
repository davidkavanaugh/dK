import { RecentWorkComponent } from './modules/recent-work/pages/recent-work/recent-work.page';
import { ContactComponent } from './modules/contact/pages/contact/contact.page';
import { HomeComponent } from './modules/home/pages/home/home.page';
import { AboutMeComponent } from './modules/about-me/pages/about-me/about-me.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modules/home/pages/home', component: HomeComponent },
  { path: 'modules/about-me/pages/about-me', component: AboutMeComponent },
  { path: 'modules/recent-work/pages/recent-work', component: RecentWorkComponent },
  { path: 'modules/contact/pages/contact', component: ContactComponent },
  { path: '**', redirectTo: 'modules/home/pages/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
