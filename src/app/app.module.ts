import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyPipe } from './my.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide : LOCALE_ID,
      useValue: 'pt-BR'
    },
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
