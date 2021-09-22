import { Injectable } from '@angular/core';
//import { setgroups } from 'process';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

    private personas: Persona[] = [
      {
        usuario: 'serg.bustosp',
        nombre : 'Sergio',
        clave : '1234'
      },
      {
        usuario: 'juan.perez',
        nombre : 'Juan',
        clave : '4321'
      },
      {
        usuario: 'este.martineza',
        nombre : 'Esteban',
        clave : '1234'
      }
    ]

  constructor() { }
  
  getPersonas()
  {
    return this.personas
  }

 getPersona(usuario : string)
  {
   return this.personas.find(x => {return x.usuario == usuario})
}

}
