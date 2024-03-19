import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {

        this.countryService.searchCountryByCode(id)
          .subscribe( countries => {
            console.log(countries);
          });

      })
  }
}
