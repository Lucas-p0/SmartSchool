import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  titulo = 'Professores';

  public professores = [
    { nome: 'Lucas' },
    { nome: 'João' },
    { nome: 'Marcos' },
    { nome: 'André' },
    { nome: 'Vitor' },
    { nome: 'Laís' },
    { nome: 'Laura' },
  ];
}
