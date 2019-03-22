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

  public realUsers:Persona;
  constructor(private subject:SubjectService) { }

  ngOnInit() {
    this.subject.getUsuarios();
    this.subject.mySubject.subscribe((value) => {
      this.realUsers = value;
    });
  }

}