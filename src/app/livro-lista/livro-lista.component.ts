import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Certifique-se que esta linha está aqui
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule], // <-- Certifique-se que esta linha está aqui
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public livros: Array<Livro> = [];
  public editoras: Array<Editora> = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService
  ) { }

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
    this.editoras = this.servEditora.getEditoras();
  }

  getNomeEditora(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }

  excluir(codigo: number): void {
    this.servLivros.excluir(codigo);
    // Atualiza a lista após a exclusão
    this.livros = this.servLivros.obterLivros();
  }
}