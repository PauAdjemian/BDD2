import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultados',
  imports: [CommonModule, FormsModule],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css'
})

export class Resultados {
  tipoFiltro = 'Nacional';
  valorFiltro = '';
  resultados: any[] = [];

  constructor() {}

  obtenerClaves(obj: any): string[] {
    return Object.keys(obj);
  }

  get placeholderFiltro(): string {
    switch (this.tipoFiltro) {
      case 'Circuito':
        return 'Ingrese el número de circuito';
      case 'Nacional por circuito':
        return 'Ingrese el circuito';
      case 'Nacional por departamento':
        return 'Ingrese el departamento';
      default:
        return 'Ingrese valor de filtro';
    }
  }

  obtenerResultados() {
    switch (this.tipoFiltro) {
      case 'Nacional': this.resultadosNacionales(); break;
      case 'Nacional por circuito': this.resultadosNacionalesCircuito(); break;
      case 'Nacional por departamento': this.resultadosNacionalesPorDepartamento(); break;
      case 'Nacional por Partido': this.resultadosNacionalesPorPartido(); break;
    }
    console.log(this.resultados)
  }

  private async resultadosNacionales(){
    const parametros = {
      fecha_elección: new Date().toISOString().split('T')[0], 
    };
    console.log('Parámetros enviados:', parametros);
    try {
      const response = await fetch('http://localhost:3000/resultados/resultadoNacional', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      });
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (response.ok) {
        console.log('Resultados nacionales obtenidos:', data);
        this.resultados = data;
      } else {
        alert('Error al obtener resultados nacionales');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
    }
  }

  private async resultadosNacionalesCircuito(){
    const parametros = {
      fecha_elección: new Date().toISOString().split('T')[0], 
      Id_circuito: this.valorFiltro
    };
    console.log('Parámetros enviados:', parametros);
    try {
      const response = await fetch('http://localhost:3000/resultados/resultadoNacionalPorCircuito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      });
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (response.ok) {
        console.log('Resultados nacionales obtenidos:', data);
        this.resultados = data;
      } else {
        alert('Error al obtener resultados nacionales');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
    }
  }

  private async resultadosNacionalesPorDepartamento(){
    const parametros = {
      fecha_elección: new Date().toISOString().split('T')[0], 
      departamento: this.valorFiltro
    };
    console.log('Parámetros enviados:', parametros);
    try {
      const response = await fetch('http://localhost:3000/resultados/resultadoNacionalPorDepartamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      });
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (response.ok) {
        console.log('Resultados nacionales obtenidos:', data);
        this.resultados = data;
      } else {
        alert('Error al obtener resultados nacionales');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
    }
  }

  private async resultadosNacionalesPorPartido(){
    const parametros = {
      fecha_elección: new Date().toISOString().split('T')[0], 
    };
    console.log('Parámetros enviados:', parametros);
    try {
      const response = await fetch('http://localhost:3000/resultados/resultadoNacionalPorPartido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      });
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (response.ok) {
        console.log('Resultados nacionales por partido obtenidos:', data);
        this.resultados = data;
      } else {
        alert('Error al obtener resultados nacionales por partido');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
    }
  }
}