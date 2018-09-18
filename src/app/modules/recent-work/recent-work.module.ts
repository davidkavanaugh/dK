import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentWorkComponent } from './pages/recent-work/recent-work.page';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [RecentWorkComponent]
})
export class RecentWorkModule { }
