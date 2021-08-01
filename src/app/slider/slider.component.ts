import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig],
})
export class SliderComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 15000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}
}
