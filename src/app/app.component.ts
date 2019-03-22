import { Component } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private emisor:SubjectService){}

ngOnInit() {
    this.emisor.getUsuarios(5);
}

}
