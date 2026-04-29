import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
 })
export class Tab1Page {

  constructor() {}
  
  countries = [
  {
    name: 'Japón',
    capital: 'Tokio',
    flag: 'https://flagcdn.com/w320/jp.png',
    favorite: false
  },
  {
    name: 'Italia',
    capital: 'Roma',
    flag: 'https://flagcdn.com/w320/it.png',
    favorite: true
  },
  {
    name: 'Canadá',
    capital: 'Ottawa',
    flag: 'https://flagcdn.com/w320/ca.png',
    favorite: false
  },
{
    name: 'Canadá',
    capital: 'Ottawa',
    flag: 'https://flagcdn.com/w320/ca.png',
    favorite: false
  }

  
];
}

