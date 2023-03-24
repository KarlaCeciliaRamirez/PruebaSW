import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { info, PersonajeInterfaz } from 'src/app/personajes/personaje-interfaz';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit {

  /*personajes!:PersonajeInterfaz[];/* = {
    id: 1,
    name: 'Rick',
    species: 'humano',
    gender: '',
    image: '',
    status: 'vivo',
    origin: {
      name: '',
      url: ''
    }
  };*/
  @Input() a:any;
  especie:PersonajeInterfaz[]=[]/*= {
    id: 0,
    name: '',
    species: '',
    gender: '',
    image: '',
    status: '',
    origin: {
      name:'',
      url:''
    }
  };*/
  
  constructor(private http: HttpClient) {
    this.llenarpersonajes(8); }

  ngOnInit() {
    

  }

  llenarpersonajes(id:number){
    this.http.get<info>('https://rickandmortyapi.com/api/character/').subscribe(res=>{this.metodo2(res)});

  }
  algo(personaje:PersonajeInterfaz){
    console.log(personaje)

  }

  metodo2(personajes:info){
    this.especie=personajes.results;
    console.log(this.especie);
    /*personajes.results.forEach(p => {
      console.log(p.origin.name,'\n',p)
    });*/
      //console.log(personajes.results)
  }

}

