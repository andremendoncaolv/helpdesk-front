import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credencias } from 'src/app/models/credencias';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private toast: ToastrService,
    private service: AuthService){ }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.toast.info('logado');
    });    
    this.toast.error('Usuário e/ou senha inválidos!', 'Login');
    this.creds.senha = '';
    // this.toast.info(this.service.testeconexao());
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;    
  }

}
