import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credencias } from 'src/app/models/credencias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds : Credencias = {
    email: '',
    senha: ''
  }

  constructor(private toast: ToastrService){ }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  logar() {
    this.toast.error('Usuário e/ou senha inválidos!', 'Login');
    this.creds.senha = '';
  }

  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid){
      return true;
    } else {
      return false;
    }
  }

}
