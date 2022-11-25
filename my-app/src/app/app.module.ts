import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlacesComponent } from './places/places.component';
import { SightsComponent } from './sights/sights.component';
import { TransporationComponent } from './transporation/transporation.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    ContactUsComponent,
    HomePageComponent,
    PlacesComponent,
    SightsComponent,
    TransporationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
