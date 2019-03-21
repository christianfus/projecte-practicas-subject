import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  @Input() name: string;
  public realUsers:Array<Persona>;
  public myName:string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'why-are-you-running'
    })
  };

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.getUsuarios()
  }

  getUsuarios():void{
    this.http.get<Persona[]>('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{//(data:Persona) => {
      
      //COM A ARRAY DE PERSONES SENSE LLIBRERIES
      this.realUsers = data;
      console.log();
    
    });
  }
}
