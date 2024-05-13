import { Component, EventEmitter, Output} from '@angular/core';
import { Comida } from '../../interfaces/productos.interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-manejo-stock',
  templateUrl: 'manejo.component.html'
})

export class manejoComponente{
  comida:Comida = {
    marca: '',
    categoria: '',
    precio: 0,
    stock: 0,
    id: uuid()
  }

  @Output()
  nuevoPersonaje: EventEmitter<Comida>= new EventEmitter()

  onNuevoPersonaje(){
    if(this.comida.marca === ' '
    || this.comida.categoria === ' '
    || isNaN(this.comida.precio)
    || this.comida.precio <= 0
    || isNaN(this.comida.stock)
    || this.comida.stock <= 0 ){
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }

    
    this.nuevoPersonaje.emit(this.comida)

    this.comida = {marca: '',categoria: '', precio: 0, stock: 0, id: uuid()}
  }


  constructor() { }
}
