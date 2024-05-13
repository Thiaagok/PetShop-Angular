import { NgModule } from '@angular/core';
import { manejoComponente } from './components/manejo/manejo.component';
import { listaComponente } from './components/listado/listado.component';
import { MainPageComponent } from './pages/main-page-stock.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  declarations: [
    manejoComponente,
    listaComponente,
    MainPageComponent
  ],
  providers: [],
})
export class stockModule { }
