import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubjectService } from '../subject.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public realUser:Persona;

  constructor(private emisor:SubjectService) {  }

  ngOnInit() {
    
    this.emisor.mySubject$.subscribe((value:Persona) => {
      this.realUser = value;
    });
  }

  public enviaVals(id:number):void{
    this.emisor.getUsuarios(id);
  }
}
