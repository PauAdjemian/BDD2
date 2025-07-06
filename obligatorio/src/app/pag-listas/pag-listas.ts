import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmarVoto } from "../confirmar-voto/confirmar-voto";
import { Datetime } from "../datetime/datetime";
import { VotoAnulado } from "../voto-anulado/voto-anulado";
import { VotoBlanco } from "../voto-blanco/voto-blanco";
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-pag-listas',
  imports: [FormsModule, CommonModule, ConfirmarVoto, Datetime, VotoAnulado, VotoBlanco],
  templateUrl: './pag-listas.html',
  styleUrl: './pag-listas.css',
  standalone: true
})
export class PagListas {

  searchText: string = '';
  listas: any[] = [];
  listasFiltradas: any[] = [];

  listaSeleccionadaId: number = 0;
  Popup: any;

  abrirConfirmacion(lista: any) {
    this.listaSeleccionadaId = lista.id || lista.ID;
    this.Popup.idListaSeleccionada = this.listaSeleccionadaId;
    this.Popup.open();
  }

  async ngOnInit() {
    console.log("lstg", sessionStorage.getItem('tipoEleccion'));
    
    try {
      const tipo = sessionStorage.getItem('tipoEleccion');
      const fecha = new Date().toISOString().slice(0, 10);

      if (!tipo) throw new Error('No se encontró el tipo de elección en localStorage');

      const res = await fetch('http://localhost:3000/listas/listasEleccion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tipo_elección: tipo, fecha_elección: fecha })
      });

      if (!res.ok) throw new Error('Error al obtener listas');

      const data = await res.json();
      console.log("data", data);

      const listasMap = new Map();

      for (const row of data) {
        console.log('Procesando fila:', row.ID, row.numero_lista, row.partido, row.nombre, row.apellido);
        const id = row.ID;
        if (!listasMap.has(id)) {
          listasMap.set(id, {
            id: id,
            numero: row.numero_lista,
            partido: row.partido,
            imagen: row.imagen,
            candidatos: []
          });
        }

        listasMap.get(id).candidatos.push({
          nombre: `${row.nombre} ${row.apellido}`,
          cargo: row.cargo
        });
      }

      this.listas = Array.from(listasMap.values());
      this.listasFiltradas = [...this.listas];

    } catch (error: any) {
      console.error(error);
      alert(error.message || 'Error al cargar listas de elección');
    }
  }

  filtrarCandidatos() {
  const texto = this.searchText.toLowerCase();

  this.listasFiltradas = this.listas.filter(lista =>
    lista.partido.toLowerCase().includes(texto) ||
    lista.numero.toString().includes(texto) ||
    lista.candidatos.some((c: { nombre: string; cargo: string }) =>
      c.nombre.toLowerCase().includes(texto) ||
      c.cargo.toLowerCase().includes(texto)
    )
  );
  }

}
