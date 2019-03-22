import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './main/footer/footer.component';
import { SubjectService } from './subject.service';
import { SubComponent } from './sub/sub.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, MainComponent, FooterComponent, SubComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ SubjectService ]
})
export class AppModule {  }
