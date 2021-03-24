import { Component } from '@angular/core';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-resizable-draggable';
  images: string[] =[];

  constructor(private utilService: UtilService) {}

  onChange(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        const url = event.target.result as string;
        this.images.push(url);
        this.utilService.imageAddEvent.next([...this.images]);
      }
    }
  }

}
