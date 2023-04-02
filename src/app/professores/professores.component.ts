import { Component } from '@angular/core';
import { Professor } from '../models/Professor';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  public titulo = 'Professores';
  public professorSelecionado: Professor | undefined;

  public professores = [
    { id: 1, nome: 'Lucas', disciplina: 'Matemática' },
    { id: 2, nome: 'Jonas', disciplina: 'Física' },
    { id: 3, nome: 'Marcos', disciplina: 'Português' },
    { id: 4, nome: 'André', disciplina: 'Artes' },
    { id: 5, nome: 'Vitor', disciplina: 'Ciências' },
    { id: 6, nome: 'Laís', disciplina: 'Espanhol' },
    { id: 7, nome: 'Laura', disciplina: 'Filosofia' },
  ];
  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }
  voltar() {
    this.professorSelecionado = undefined;
  }
}
