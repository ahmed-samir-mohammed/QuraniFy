import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ReciterListComponent } from './Components/reciter-list/reciter-list.component';
import { ReciterCardComponent } from './Components/reciter-card/reciter-card.component';
import { SuraListComponent } from './Components/sura-list/sura-list.component';
import { SuraCardComponent } from './Components/sura-card/sura-card.component';
import { PlayerComponent } from './Components/player/player.component';
import { FormsModule } from '@angular/forms';
import { AudioContextModule } from 'angular-audio-context';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReciterListComponent,
    ReciterCardComponent,
    SuraListComponent,
    SuraCardComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AudioContextModule.forRoot('balanced')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
