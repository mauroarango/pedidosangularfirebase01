import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../compartido/ordenes.service';

@Component({
  selector: 'app-lista-ordenes',
  templateUrl: './lista-ordenes.component.html',
  styleUrls: ['./lista-ordenes.component.css']
})
export class ListaOrdenesComponent implements OnInit {

  constructor(private ordenesService: OrdenesService) { }

  ngOnInit() {
    this.getProductOrders();
  }
  productOrders;

  getProductOrders = () =>
    this.ordenesService
      .getProductOrders()
      .subscribe(res => (this.productOrders = res));

  deleteOrder = data => this.ordenesService.deleteProductOrder(data);

  markCompleted = data => this.ordenesService.updateProductOrder(data);
}