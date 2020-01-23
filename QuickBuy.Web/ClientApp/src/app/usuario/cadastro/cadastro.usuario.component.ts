import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../modelo/usuario'
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cadastro-usuario',
  templateUrl: './cadastro.usuario.component.html',
  styleUrls: ['./cadastro.usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario;
  public returnUrl: string;
  public mensagem: string;
  public ativar_spinner: boolean;
  public usuarioCadastrado: boolean;

  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    this.ativar_spinner = true;
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          this.usuarioCadastrado = true;
          this.mensagem = "";
          // Essa linha será executada no caso de retorno sem erros
          //console.log(data);
          this.usuarioServico.usuario = usuario_json;

          //if (this.returnUrl == null) {
          //  this.router.navigate(['/']);
          //} else {
          //  this.router.navigate([this.returnUrl]);
          //}

        },
        err => {
          // Caso ocorra algum erro
          console.log(err.error);
          this.mensagem = err.error;
          this.ativar_spinner = false;
        });
  }
}
