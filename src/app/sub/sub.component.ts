import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public realUser:Persona;
  constructor(private emisor:SubjectService) { }

  ngOnInit() {
    this.emisor.mySubject$.subscribe((value:Persona) => {
      this.realUser = value;
    });
  }

  public enviaVals(id:number):void{
    this.emisor.getUsuarios(id);
  }
}