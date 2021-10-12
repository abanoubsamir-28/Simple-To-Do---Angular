import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
