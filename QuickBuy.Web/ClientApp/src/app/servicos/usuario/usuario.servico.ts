import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../modelo/usuario';

@Injectable({
  providedIn: "root"
})

export class UsuarioSevico{

  private BaseURL: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.BaseURL = baseUrl;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {

    const header = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //this.baseURL = raiz do site que pode ser por exemplo.: http://www.quickbuy.com/
    return this.http.post<Usuario>(this.BaseURL + "api/usuario", body, { headers });
  }

}