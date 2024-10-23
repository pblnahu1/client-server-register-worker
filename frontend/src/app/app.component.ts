// Comportamiento de la aplicación

import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

interface Usuario {
  idUsuario: number | null;
  nombre: string | null;
  telefono: string | null;
  email: string | null;
  puesto: string | null;
  estado: string | null;
  fecha_registro: Date | null;
  fecha_actualizacion: Date | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
[x: string]: any;
  title = 'crud-angular';
  usuarios: any[] = [];
  usuario: Usuario = {
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null,
    puesto: null,
    estado: null,
    fecha_registro: null,
    fecha_actualizacion: null
  }

  constructor(private usuariosServicio: UsuariosService) { }
  
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  // vaciarInputs() {
  //   this.usuario = {
  //     idUsuario: null,
  //     nombre: '',
  //     telefono: '',
  //     email: '',
  //     puesto: '',
  //     estado: '',
  //     fecha_registro: null,
  //     fecha_actualizacion: null
  //   }
  // }

  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios().subscribe(
      (result: any) => {
        if (Array.isArray(result)) {
          this.usuarios = result;
        } else {
          console.error("La respuesta no es un array: ", result);
        }
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  altaUsuario() {
    this.usuariosServicio.altaUsuarios(this.usuario).subscribe(
      (datos:any) => { 
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
          // this.vaciarInputs();
        }
      }
    );
  }

  bajaUsuario(idUsuario: number) {
    this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
      (datos:any) => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario() {
    this.usuariosServicio.editarUsuario(this.usuario).subscribe(
      (datos:any) => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  seleccionarUsuario(idUsuario: number) {
    this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
      (result: any) => {
        if (Array.isArray(result)) {
          this.usuario = result[0];
        } else {
          this.usuario = result;
        }
      }
    );
  }

  hayRegistros() {
    return this.usuarios && this.usuarios.length > 0;
  }
}
