import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  Nombre : string
  
  constructor(private menu: MenuController,private act: ActivatedRoute)
   {
     this.Nombre = this.act.snapshot.paramMap.get('nombre')
    }

  ngOnInit() {
     console.log(this.Nombre)
    }   
     openmenu(){
      this.menu.toggle();
    }
  }


