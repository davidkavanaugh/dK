import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { AboutMeComponent } from './pages/about-me/about-me.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [AboutMeComponent]
})
export class AboutMeModule { }
