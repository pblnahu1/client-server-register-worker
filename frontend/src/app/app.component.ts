// Comportamiento de la aplicación

import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  styleUrl: './app.component.css',
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class AppComponent implements OnInit {
[x: string]: any;
  title = 'crud-angular';
  usuarios: any[] = [];
  usuario: Usuario = {
    idUsuario: null,
    nombre: '',
    telefono: '',
    email: '',
    puesto: '',
    estado: 'ONLINE',
    fecha_registro: null,
    fecha_actualizacion: null
  }

  totalEmpleados:number=0;
  empleadosOnline:number=0;
  porcentajeOnline:number=0;

  constructor(private usuariosServicio: UsuariosService) { }
  
  ngOnInit(): void {
    this.obtenerUsuarios();
    this.porcentajeEmpleado();
  }

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

  porcentajeEmpleado(){
    this.usuariosServicio.porcentajeEmpleado().subscribe(
      (result: any) => {
        this.totalEmpleados=result.totalEmpleados;
        this.empleadosOnline=result.empleadosOnline;

        if(this.totalEmpleados > 0){
          this.porcentajeOnline = (this.empleadosOnline / this.totalEmpleados) * 100;
        }else{
          this.porcentajeOnline = 0;
        }
      },
      error => {
        console.error("Error al obtener el porcentaje de empleados online: ", error);
      }
    )
  }

  errorMessage: string | null = null;
  /*validationPhone: string | null = null;
  validationEmail: string | null = null;*/

  altaUsuario() {
    this.validarCampos(this.usuario.nombre, this.usuario.email, this.usuario.telefono, this.usuario.puesto, this.usuario.estado)

    this.usuariosServicio.altaUsuarios(this.usuario).subscribe(
      (datos:any) => { 
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
          this.resetUsuario();
        }
      }
    );
  }

  bajaUsuario(idUsuario: number) {
    const confirmar = window.confirm(`¿Estás seguro de eliminar este Empleado/a?`);
    if(confirmar){
      this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
        (datos:any) => {
          if (datos['resultado'] == 'OK') {
            alert(datos['mensaje']);
            this.obtenerUsuarios();
          }
        },
        (err)=>{
          console.error("Error al eliminar...", err);
        }
      );
    }
  }

  editarUsuario() {
    this.validarCampos(this.usuario.nombre, this.usuario.email, this.usuario.telefono, this.usuario.puesto, this.usuario.estado)

    this.usuariosServicio.editarUsuario(this.usuario).subscribe(
      (datos:any) => {
        if (datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
          this.resetUsuario();
        }
      },
      (err)=>{
        console.error('Error al actualizar el usuario: ', err);
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

  private resetUsuario(){
    this.usuario = {
      idUsuario: null,
      nombre: '',
      telefono: '',
      email: '',
      puesto: '',
      estado: 'ONLINE',
      fecha_registro: null,
      fecha_actualizacion: null
    }
  }

  private validarCampos(nombre: string | null,email: string | null,telefono: string | null,puesto: string | null,estado: string | null){
    if(!nombre || !email || !telefono || !puesto || !estado){
      // alert('No podés dejar campos vacíos. Todos los campos son obligatorios');
      this.errorMessage="No podés dejar campos vacíos. Todos los campos son obligatorios.";
      return; // detengo la ejecución si hay campos vacios
    }

    this.errorMessage=null;
  }

  /*private validarEmail(email:string) {
    if(email)
  }*/
}
