import { Component } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona.model';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  persona : Persona;
  
  constructor(private personaService: PersonaService,
    public alertController: AlertController, 
    private alertControl    : AlertController,
    private router          : Router)
   {}
   async contra(){
    const alerta = await this.alertControl.create({
      header  : "Se envio un correo para recuperar la contraseña",
      buttons : [
        {
          text: "Entendido",
          role: "cancel"
        
        }]
  });
  await alerta.present();
   }
   async login(usuario :HTMLInputElement, clave:HTMLInputElement)
   {
     const user = usuario.value;
     const cla = clave.value;
     this.persona = this.personaService.getPersona(user);
     

    if(this.persona) {
     
      if(this.persona.usuario == user , this.persona.clave == cla){
          const nom = this.persona.nombre;
          this.router.navigate(['/home1',{nombre:nom}])
          

        
     }
     if(this.persona.usuario == user , this.persona.clave != cla){
      const alerta = await this.alertControl.create({
        header  : "Contraseña invalida",
        buttons : [
          {
            text: "Entendido",
            role: "cancel"
          
          }]
    });
    await alerta.present();
     }
     
    }
    else{
      const alerta = await this.alertControl.create({
        header  : "Usuario no identificado",
        buttons : [
          {
            text: "Entendido",
            role: "cancel"
          
          }]
    });
    await alerta.present();
  
  }

}
}
