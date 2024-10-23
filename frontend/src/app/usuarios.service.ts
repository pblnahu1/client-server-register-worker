import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = "http://localhost/crud-angular/backend/api/";

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.URL}obtener_usuarios.php`);
  }

  altaUsuarios(usuario: any) {
    return this.http.post(`${this.URL}alta_usuario.php`, JSON.stringify(usuario));
  }

  bajaUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}baja_usuario.php?idUsuario=${idUsuario}`);
  }

  seleccionarUsuario(idUsuario: number) {
    return this.http.get(`${this.URL}seleccionar_usuario.php?idUsuario=${idUsuario}`);
  }

  editarUsuario(usuario:any) {
    return this.http.post(`${this.URL}editar_usuario.php`, JSON.stringify(usuario));
  }

  
}
