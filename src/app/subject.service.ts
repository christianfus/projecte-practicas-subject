import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SubjectService {
  
  public realUsers:Array<Persona> = [];
  public mySubject = new BehaviorSubject(this.realUsers);
  public myName:string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'why-are-you-running'
    })
  };
  
  constructor(private http: HttpClient) { }

  getUsuarios():void{
    this.http.get<Persona[]>('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{//(data:Persona) => {
      
      //COM A ARRAY DE PERSONES SENSE LLIBRERIES
      this.realUsers = data;
      this.mySubject.next(this.realUsers);
    
    });

  }

}