import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UUsuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formData!: FormGroup;

  constructor(

  private formBuild: FormBuilder,
  private usuarioService: UsuarioService

  ){ }
  ngOnInit(): void {
    //iniciandO
    this.initForm();
  }
  private initForm(): void {
    this.formData = this.formBuild.group({
      email: '',
      nome: '',
      telefone: ''
    })
  }

  onSalvando(): void{
    const {email, nome, telefone} = this.formData.value;

    //Campo obrigatorio
    if(!email || !nome ||!telefone){
      Swal.fire(
        'Campos Obrigatorios',
        'Favor informar o seu email, nome e telefone',
        'warning' 
      );
      return;
    }

    //regra para telefone
    if(telefone.length < 9){
      Swal.fire(
        'Campos obrigatorio',
        'Favor preencha seu numero de telefone com os 9 digitos obrigatorios',
        'warning'
      );
      return;
    }

    const usuario: UUsuario = {
      email,
      nome,
      telefone
    };

    //Mensagem de se o usuaio conseguir se cadastrar ou nao
    this.usuarioService.create(usuario).subscribe(
      (rest) => {
        const msg = rest.body?.mensagem;
        Swal.fire('Cadastro', msg, 'success');
      },
      (err) => {
        Swal.fire('Cadastro negado', err.error.mensagem, 'warning');
      }

    );

  }
  onClean(): void {
    //restaurando formulario
    this.formData.reset();
  }
}