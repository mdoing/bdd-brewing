import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  beers: any[];

  constructor() { }

  ngOnInit() {
    this.beers = [
      {
        name: 'Monkey Man Saison',
        abv: '5.1',
        keywords: 'Fruity, Spicy',
        description: 'This beer is a beer that tastes like a beer. It even is beery. If you want a beer, then this beer is beer',
        imgSrc: ''
      },
      {
        name: 'Sasquatch IPA',
        abv: '6.2',
        keywords: 'Bitter, Hoppy',
        description: 'This beer is a beer that tastes like a beer. It even is beery. If you want a beer, then this beer is beer',
        imgSrc: ''
      },
      {
        name: 'Wookie Pale Ale',
        abv: '4.9',
        keywords: 'Pale, Yellowy',
        description: 'This beer is a beer that tastes like a beer. It even is beery. If you want a beer, then this beer is beer',
        imgSrc: ''
      },
      {
        name: 'Squatch and the Giant Peach',
        abv: '5.0',
        keywords: 'Cobblery, Peachy',
        description: 'This beer is a beer that tastes like a beer. It even is beery. If you want a beer, then this beer is beer',
        imgSrc: ''
      }
    ];
  }

}
