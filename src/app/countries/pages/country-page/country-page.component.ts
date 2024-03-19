import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.searchCountryByCode(id) )
      )
      .subscribe( country => {
        if (!country) {
          return this.router.navigateByUrl('/')
        }

        console.log('Country Found');
        return;
      });
  }
}
