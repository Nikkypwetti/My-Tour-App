import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeadingComponent } from './heading/heading.component';
import { SessionComponent } from './session/session.component';
import { TourismSiteComponent } from './tourism-site/tourism-site.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { AboutUsHeroComponent } from './about-us-hero/about-us-hero.component';
import { ContactUsHeroComponent } from './contact-us-hero/contact-us-hero.component';
import { LagosComponent } from './lagos/lagos.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    HeadingComponent,
    SessionComponent,
    TourismSiteComponent,
    RecommendedComponent,
    AboutUsHeroComponent,
    ContactUsHeroComponent,
    LagosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
