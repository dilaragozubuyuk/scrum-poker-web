import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/shared/service/utils.service';

@Component({
  selector: 'app-story-point',
  templateUrl: './story-point.component.html',
  styleUrls: ['./story-point.component.sass']
})
export class StoryPointComponent implements OnInit {

  points: number[];
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.points = this.utilsService.getFibonacciList(12);
  }

}
