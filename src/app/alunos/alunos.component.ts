// Importa as dependências necessárias do Angular
import { Component } from '@angular/core';
import { Aluno } from '../models/Aluno';

// Define as propriedades do componente
@Component({
  selector: 'app-alunos', // Define o seletor do componente
  templateUrl: './alunos.component.html', // Define o arquivo HTML do componente
  styleUrls: ['./alunos.component.css'] // Define o(s) arquivo(s) de estilo do componente
})

// Define a classe do componente
export class AlunosComponent {

  public titulo = 'Alunos'; // Define o título do componente

  public alunoSelecionado: Aluno | undefined; // Define uma variável para armazenar o nome do aluno selecionado

  public textSimpless: string | undefined; // Define uma variável

  // Define uma lista de alunos
  public alunos = [
    { id: 1, nome: 'Lucas', sobrenome: 'Pinheiro', telefone: 10, },
    { id: 2, nome: 'Jonas', sobrenome: 'Santos', telefone: 20, },
    { id: 3, nome: 'Marcos', sobrenome: 'João', telefone: 30, },
    { id: 4, nome: 'André', sobrenome: 'Amorim', telefone: 40, },
    { id: 5, nome: 'Vitor', sobrenome: 'Fernandes', telefone: 50, },
    { id: 6, nome: 'Laís', sobrenome: 'Lotério', telefone: 60, },
    { id: 7, nome: 'Laura', sobrenome: 'Cardoso', telefone: 70, },
  ];

  // Define uma função que é chamada quando um aluno é selecionado
  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  // Define uma função que é chamada quando o botão "Voltar" é clicado
  voltar() {
    this.alunoSelecionado = undefined;
  }

}