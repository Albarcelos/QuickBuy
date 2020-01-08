import { Component } from "@angular/core"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {

  entrar() {
    alert('Entrar no sistema');
  }

  on_keypress() {
    alert('foi digitado no camo de email');
  }
}
