import { Injectable } from '@angular/core';
import { Comida } from '../interfaces/productos.interfaces';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})

export class stockService {

  productosComida: Comida[] = [
    {
       marca: 'Dog Chow',
       categoria: 'adulto',
       precio: 20000,
       stock: 3,
       id: uuid()
    },
    {
      marca: 'Dog Chow',
      categoria: 'adulto',
      precio: 20000,
      stock: 3,
      id: uuid()
    },
    {
    marca: 'Dog Chow',
    categoria: 'adulto',
    precio: 20000,
    stock: 3,
    id: uuid()
    }
  ]

  agregarProductoComida(comida:Comida):void{
    this.productosComida.push(comida);
  }
  cambiarStockById(id:string,valor:number){
    for(let comida of this.productosComida){
      if(comida.id === id){
        if(valor === 1){
          comida.stock += 1
        }
        if(valor === 2 && comida.stock > 0){
          comida.stock += -1
        }
      }
    }
  }
  constructor() { }
}
