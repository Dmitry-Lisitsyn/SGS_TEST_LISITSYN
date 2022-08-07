import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Currency } from '../models/currency.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  apiBaseUrl = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiBaseUrl = baseUrl;
  }

  getAllCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiBaseUrl + 'currencies');
  }

  getCurrencyByid(id: string): Observable<Currency> {
    return this.http.get<Currency>(this.apiBaseUrl + 'currencies/' + id);
  }
}
