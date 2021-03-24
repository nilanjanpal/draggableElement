import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {

  images: string[];

  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService.imageAddEvent.subscribe(
      (images) => { this.images = [...images]}
    );
  }

  

  

}
