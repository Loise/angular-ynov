import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortByDatePipe } from './pipes/sortByDate.pipe'
import { FilterByNamePipe } from './pipes/filterByName.pipe';
import { FormsModule } from '@angular/forms';
import { ToBoldPipe } from './pipes/toBold.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    FilterByNamePipe,
    ToBoldPipe,
    ProductsListComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR' // 'de-DE' for Germany, 'fr-FR' for France ...
  },
  ],
  bootstrap: [AppComponent],
  exports: [
    SortByDatePipe,
    FilterByNamePipe,
    ToBoldPipe
  ]
})
export class AppModule { }

