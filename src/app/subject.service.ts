import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from './Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { interval, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';


@Injectable()
export class SubjectService {
  
  public realUsers:Persona;
  public mySubject = new BehaviorSubject(this.realUsers);
  public myName:string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'why-are-you-running'
    })
  };
  
  constructor(private http: HttpClient) { }

  public getUsuarios():void{
    this.http.get<Persona>('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe(data=>{
      
      //COM A ARRAY DE PERSONES SENSE LLIBRERIES

      const second = interval(2000);
      this.realUsers = data;
      
      const example = second.pipe(merge(this.realUsers));
      this.mySubject.next(example);
    
    });
    
    


    /*this.http.get<Persona>('https://jsonplaceholder.typicode.com/todos/2')
    .subscribe(data=>{
      
      //COM A ARRAY DE PERSONES SENSE LLIBRERIES
      this.realUsers = data;
      this.mySubject.next(this.realUsers);
    
    });*/

    /*this.http.get<Persona[]>('https://jsonplaceholder.typicode.com/todos')
    .subscribe(data=>{
      
      //COM A ARRAY DE PERSONES SENSE LLIBRERIES
      this.realUsers = data;
      this.mySubject.next(this.realUsers);
    
    });*/   
   

  }

}