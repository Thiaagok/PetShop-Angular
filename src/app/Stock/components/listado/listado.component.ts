import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Comida } from '../../interfaces/productos.interfaces';

@Component({
  selector: 'app-listado-productos',
  templateUrl: 'listado.component.html',
  styleUrl: 'listado.component.scss'
})

export class listaComponente{

  @Input()
  listaComidas: Comida[] = []


  @Output()
  CambiarStockPorId: EventEmitter<{id: string, valor: number}> = new EventEmitter()

  EnviarStockyId(id:string,valor:number):void{
    this.CambiarStockPorId.emit({id,valor})
  }
  constructor() { }
}

