import { Component, OnInit } from '@angular/core';
import {OrdenesService } from "../compartido/ordenes.service";

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(

    private ordenesService:OrdenesService) { }

    ngOnInit() {}

    products = [
      "Solomito",
      "Punta de Anca",
      "Chata",
      "Churrasco",
      "Costilla",
      "Pollo",
      "Chuleta",
      "Chicharron",
      "B.Beef",
      "Picada",
      "Cordero",
      "Ternera"

    ];
  
    productOrder = [];
  
    addProduct = product => this.productOrder.push(product);
  
    removeProduct = product => {
      let index = this.productOrder.indexOf(product);
      if (index > -1) this.productOrder.splice(index, 1);
    };
  
    onSubmit() {
      this.ordenesService.form.value.productOrder = this.productOrder;
      let data = this.ordenesService.form.value;
  
      this.ordenesService.createProductOrder(data).then(res => {
        /*do something here....maybe clear the form or give a success message*/
      });
    }
  }
  