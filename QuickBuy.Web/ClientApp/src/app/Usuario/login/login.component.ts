import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioSevico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private usuarioServico: UsuarioSevico) {
    
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {

    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data => {

        },
        erro => {

        }
      );

    //sessionStorage.setItem("usuario-autenticado", "1");
  }

}
