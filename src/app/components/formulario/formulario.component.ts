import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionado = new EventEmitter<any>;

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'fr';
  categorias: any[] = [
    { value: 'business', nombre: 'Business' },
    { value: 'entertainment', nombre: 'Entertainment' },
    { value: 'general', nombre: 'General' },
    { value: 'technology', nombre: 'Technology' },
    { value: 'sports', nombre: 'Sports' },
    { value: 'health', nombre: 'Health' }

  ];

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'br', nombre: 'Brazil' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino Unido' },

  ];


  buscarNoticia() {

    const parametros = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionado.emit(parametros);

  }

}
