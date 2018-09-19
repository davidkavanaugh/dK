import { Project3Component } from './shared/components/projects/project3/project3.component';
import { Project2Component } from './shared/components/projects/project2/project2.component';
import { Project1Component } from './shared/components/projects/project1/project1.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderLogoComponent } from './shared/components/header/header-logo/header-logo.component';
import { HeaderNavigationComponent } from './shared/components/header/header-navigation/header-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    HeaderLogoComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
