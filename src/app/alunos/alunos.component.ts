import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  titulo = 'Alunos';

  public alunos = [
    { nome: 'Lucas' },
    { nome:'João'},
    { nome:'Marcos'},
    { nome:'André'},
    { nome:'Vitor'},
    { nome:'Laís'},
    { nome:'Laura'},
  ];
}
