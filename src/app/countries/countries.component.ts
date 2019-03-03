import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countriesList: {type: string, countryName: string, capitalCity: string, population: number};
  @Output() countryCreated = new EventEmitter<{countryName: string, capitalCity: string, population: number}>();
  constructor() { }

  ngOnInit() {
  }

}
