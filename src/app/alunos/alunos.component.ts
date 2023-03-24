import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  public titulo = 'Alunos';

  public alunos = [
    { nome: 'Lucas', sobrenome: '', telefone: '', },
    { nome: 'João', sobrenome: '', telefone: '', },
    { nome: 'Marcos', sobrenome: '', telefone: '', },
    { nome: 'André', sobrenome: '', telefone: '', },
    { nome: 'Vitor', sobrenome: '', telefone: '', },
    { nome: 'Laís', sobrenome: '', telefone: '', },
    { nome: 'Laura', sobrenome: '', telefone: '', },
  ];
}
