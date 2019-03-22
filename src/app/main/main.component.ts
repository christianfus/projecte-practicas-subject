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

  @Input() name: string;
  public realUsers:Persona;

  constructor(private subject:SubjectService) {  }

  ngOnInit() {
    this.subject.getUsuarios();
    this.subject.mySubject.subscribe((value) => {
      this.realUsers = value;
    });
  }
}
