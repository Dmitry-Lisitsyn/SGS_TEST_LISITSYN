import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currencies-table',
  templateUrl: './currencies-table.component.html',
  styleUrls: ['./currencies-table.component.css']
})
export class CurrenciesTableComponent implements OnInit {
  public currencies: Currency[] = [];
  math = Math;

  options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
  } as const;

  date = new Date().toLocaleString("ru", this.options);

  constructor(private currencyService: CurrencyService) {
   
  }
  ngOnInit(): void {
    this.currencyService.getAllCurrencies()
      .subscribe(response => {
        this.currencies = response;
      });
  }
}

