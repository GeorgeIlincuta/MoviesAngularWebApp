import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  preeviousRate = 0;
  maxRatingArr: any[] = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number){
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {
    if (this.preeviousRate !== 0) {
      this.selectedRate = this.preeviousRate;
    } else {
      this.selectedRate = 0;
    }
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.preeviousRate = this.selectedRate;
  }

}
