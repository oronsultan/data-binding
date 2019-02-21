import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver2', content: 'Just a tes1t!'}];
  countryElement = [{type: 'countries', countryName:'Israel', capitalCity:'Jerusalem'},
                    {type: 'countries', countryName:'USA', capitalCity:'Washington DC',population: 150433767}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onCountryAdded(countryData: {countryName: string, capitalCity: string, population: number}){
    this.countryElement.push({
      type: 'countries',
      countryName: countryData.countryName,
      capitalCity: countryData.capitalCity,
      population: countryData.population
    });
  }
}