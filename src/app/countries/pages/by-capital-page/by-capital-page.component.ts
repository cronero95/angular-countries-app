import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})

export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(
    private countryService: CountriesService
  ){}

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
