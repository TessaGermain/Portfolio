import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { AboutMeComponent } from './pages/home/components/about-me/about-me.component';
import { ButtonComponent } from './components/button/button.component';
import { CompetenceComponent } from './pages/home/components/competence/competence.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    MenuComponent,
    SeparatorComponent,
    AboutMeComponent,
    ButtonComponent,
    CompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
