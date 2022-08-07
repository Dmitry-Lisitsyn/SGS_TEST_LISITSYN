import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CommonModule } from '@angular/common';
import { CurrenciesTableComponent } from './currencies-table/currencies-table.component';
import { InformationInputsComponent } from './information-inputs/information-inputs.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CurrenciesTableComponent,
    InformationInputsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'currencies_table', pathMatch: 'full' },
      { path: 'currencies_table', component: CurrenciesTableComponent },
      { path: 'currencies_table/:id', component: InformationInputsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
