import { FooterComponent } from './../../shared/components/footer/footer.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.page';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
