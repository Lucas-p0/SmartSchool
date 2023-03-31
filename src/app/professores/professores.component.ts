import { Component } from '@angular/core';


@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  public titulo = 'Professores';
  public professorSelecionado: string | undefined;

  public professores = [
    { id: 1, nome: 'Lucas', disciplina: 'Matemática' },
    { id: 2, nome: 'Jonas', disciplina: 'Física' },
    { id: 3, nome: 'Marcos', disciplina: 'Português' },
    { id: 4, nome: 'André', disciplina: 'Artes' },
    { id: 5, nome: 'Vitor', disciplina: 'Ciências' },
    { id: 6, nome: 'Laís', disciplina: 'Espanhol' },
    { id: 7, nome: 'Laura', disciplina: 'Filosofia' },
  ];
  professorSelect(professor: any) {
    this.professorSelecionado = professor.nome;
  }
  voltar() {
    this.professorSelecionado = '';
  }
}
