import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { LiteComponent } from './components/lite/lite.component';
import { FoldedVideoComponent } from './components/folded-video/folded-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyledTextDirective } from './styled-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    LiteComponent,
    FoldedVideoComponent,
    StyledTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
