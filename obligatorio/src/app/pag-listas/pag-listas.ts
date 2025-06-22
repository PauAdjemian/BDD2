import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmarVoto } from "../confirmar-voto/confirmar-voto";
import { Datetime } from "../datetime/datetime";

@Component({
  selector: 'app-pag-listas',
  imports: [FormsModule, CommonModule, ConfirmarVoto, Datetime],
  templateUrl: './pag-listas.html',
  styleUrl: './pag-listas.css'
})
export class PagListas {

  searchText: string = '';

listas = [
  {
    numero: 123,
    partido: 'Frente Amplio',
    imagen: 'assets/frente-amplio.png',
    candidatos: [
      { nombre: 'Lucía Torres', cargo: 'Presidente' },
      { nombre: 'Mario Díaz', cargo: 'Vicepresidente' }
    ]
  },
  {
    numero: 456,
    partido: 'Partido Nacional',
    imagen: 'assets/partido-nacional.png',
    candidatos: [
      { nombre: 'Carlos Gómez', cargo: 'Presidente' }
    ]
  },
  {
    numero: 789,
    partido: 'Partido Colorado',
    imagen: 'https://okdiario.com/img/2017/10/19/las-3-ranas-mascota-que-se-han-puesto-se-han-convertido-en-tendencia-4.jpg',
    candidatos: [
      { nombre: 'Ana Pérez', cargo: 'Presidenta' },
      { nombre: 'Luis Ramos', cargo: 'Senador' }
    ]
  }
];

listasFiltradas = [...this.listas];

filtrarCandidatos() {
  const texto = this.searchText.toLowerCase();

  this.listasFiltradas = this.listas.filter(lista =>
    lista.partido.toLowerCase().includes(texto) ||
    lista.numero.toString().includes(texto) ||
    lista.candidatos.some(c =>
      c.nombre.toLowerCase().includes(texto) ||
      c.cargo.toLowerCase().includes(texto)
    )
  );
}


}
