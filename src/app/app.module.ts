import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {SortByDatePipe} from './pipes/product.pipe'
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR' // 'de-DE' for Germany, 'fr-FR' for France ...
  },
  ],
  bootstrap: [AppComponent],
  exports: [
    SortByDatePipe
  ]
})
export class AppModule { }

