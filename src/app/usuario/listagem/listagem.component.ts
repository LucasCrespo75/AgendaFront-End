import { Component, OnInit } from '@angular/core';
import { UUsuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  usuarios: UUsuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obterLista();
  }

  obterLista(){
    this.usuarioService.findAll().subscribe(
      (resp) => {
        const listagem = resp.body;
        if(listagem){
          this.usuarios = listagem;
        }
      }
    );
  }

  onDeletetar(usuario: UUsuario) :void{
    this.usuarioService.delete(usuario).subscribe(
      (rest) => {

        const msg = rest.body?.mensagem;
        Swal.fire('Exclusao', msg, 'success');

        this.obterLista();
      },
      (err)=> {
        console.error("ERRO NA EXLUCUSAO" +err.error)
        Swal.fire('Exclusao negada', err.error.mensagem, 'warning');
      }
    );
  }

  onEditar(usuario: UUsuario): void{

  }



}
