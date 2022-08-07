import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Currency } from '../models/currency.model';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-information-inputs',
  templateUrl: './information-inputs.component.html',
  styleUrls: ['./information-inputs.component.css']
})
export class InformationInputsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private currencyService: CurrencyService) { }

  currency: Currency | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        var _this = this;
        if (id) {
          this.currencyService.getCurrencyByid(id)
            .subscribe(
              (response: Currency) => {
                this.currency = response,
                  console.log(response)
              }
            );  
        }
      }
    );
  }

}
