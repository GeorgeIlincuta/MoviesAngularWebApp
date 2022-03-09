import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(25-3-1998),
      price: 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg'
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg'
    }];

    this.moviesFutureReleases = [];
  }

  moviesInTheaters: any;
  moviesFutureReleases: any;

}
