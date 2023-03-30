import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  
  public alunoSelecionado: string | undefined;

  public alunos = [
    { id: 1, nome: 'Lucas', sobrenome: 'Pinheiro', telefone: '10', },
    { id: 2, nome: 'Jonas', sobrenome: 'Santos', telefone: '20', },
    { id: 3, nome: 'Marcos', sobrenome: 'João', telefone: '30', },
    { id: 4, nome: 'André', sobrenome: 'Amorim', telefone: '40', },
    { id: 5, nome: 'Vitor', sobrenome: 'Fernandes', telefone: '50', },
    { id: 6, nome: 'Laís', sobrenome: 'Lotério', telefone: '60', },
    { id: 7, nome: 'Laura', sobrenome: 'Cardoso', telefone: '70', },
  ];
  alunoSelect(aluno: any) {
    this.alunoSelecionado = aluno.nome;
  }
  voltar() {
    this.alunoSelecionado = '';
  }

  constructor() { }
  ngOnInit() { }
}
