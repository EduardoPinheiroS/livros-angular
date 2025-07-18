import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro de Angular',
      resumo: 'Um livro completo sobre o framework Angular.',
      autores: ['João Silva', 'Maria Santos']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'JavaScript para Iniciantes',
      resumo: 'Guia prático para os primeiros passos em JavaScript.',
      autores: ['Carlos Souza']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Introdução ao TypeScript',
      resumo: 'Aprenda os fundamentos do TypeScript.',
      autores: ['Ana Costa', 'Pedro Oliveira']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index > -1) {
      this.livros.splice(index, 1);
    }
  }
}