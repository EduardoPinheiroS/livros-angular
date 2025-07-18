import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Certifique-se que esta linha está aqui
import { FormsModule } from '@angular/forms'; // <-- Certifique-se que esta linha está aqui
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service'; // Troque o '=>' por 'from'
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Certifique-se que esta linha está aqui
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro;
  public editoras: Array<Editora> = [];
  public autoresForm: string = '';

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {
    // Inicializa o objeto livro com valores padrão
    this.livro = new Livro(0, 0, '', '', []);
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    // Garante que a primeira editora seja selecionada por padrão, se houver
    if (this.editoras.length > 0) {
      this.livro.codEditora = this.editoras[0].codEditora;
    }
  }

  incluir(): void {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/'); // Navega de volta para a lista de livros
  }
}