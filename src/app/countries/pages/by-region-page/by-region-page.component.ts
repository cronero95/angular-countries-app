import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(
    private countryService: CountriesService
  ){}

  searchByRegion(term: string): void {
    this.isLoading = true;

    this.countryService.searchRegion(term)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
