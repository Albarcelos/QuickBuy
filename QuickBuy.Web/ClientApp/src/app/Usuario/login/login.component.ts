import { Component } from "@angular/core"
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {

  public usuario;
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "alexandreluisbarcelos@gmail.com"
        && this.usuario.senha == "123456") {
      this.usuarioAutenticado = true;
    }

    //alert(this.usuario.email + ' - ' + this.usuario.senha);
  }

}
