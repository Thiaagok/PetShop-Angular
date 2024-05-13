import { Component } from '@angular/core';
import { stockService } from '../services/stock.service';
import { Comida } from '../interfaces/productos.interfaces';

@Component({
  selector: 'app-main-page-stock',
  templateUrl: 'main-page-stock.component.html'
})

export class MainPageComponent {

  constructor(private stockService: stockService) { }

  get listaProductosComida(): Comida[]{
    return [...this.stockService.productosComida]
  }

  onNuevoProductoComida(comida:Comida):void{
    this.stockService.agregarProductoComida(comida)
  }

  onCambiarValorStock(event: {id:string, valor:number}):void{
    this.stockService.cambiarStockById(event.id,event.valor)
  }

}
