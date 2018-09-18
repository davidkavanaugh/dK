import { HeaderComponent } from './../../shared/components/header/header.component';
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
