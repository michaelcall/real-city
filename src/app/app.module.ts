import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game-control/game-control.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';
import { WinnerComponent } from './components/winner/winner.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    WinnerComponent,
    CitySearchComponent,
    CityDetailsComponent,
    AdvertiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
