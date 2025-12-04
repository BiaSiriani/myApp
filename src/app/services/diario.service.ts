import { Injectable } from '@angular/core';

export interface Recurso {
  id: number;
  nome: string;
  quantidade: string;
  descricao: string;
}

export interface Local {
  id: number;
  nome: string;
  tipo: string;
  coordenadas: string;
  descricao: string;
}

export interface Perigo {
  id: number;
  nome: string;
  nivel: 'baixo' | 'medio' | 'alto' | 'critico';
  tipo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  private recursos: Recurso[] = [];
  private locais: Local[] = [];
  private perigos: Perigo[] = [];

  constructor() {
    this.carregarDados();
  }

  // RECURSOS
  getRecursos(): Recurso[] {
    return this.recursos;
  }

  adicionarRecurso(recurso: Omit<Recurso, 'id'>): void {
    const novoRecurso: Recurso = {
      ...recurso,
      id: Date.now()
    };
    this.recursos.push(novoRecurso);
    this.salvarDados();
  }

  removerRecurso(id: number): void {
    this.recursos = this.recursos.filter(r => r.id !== id);
    this.salvarDados();
  }

  // LOCAIS
  getLocais(): Local[] {
    return this.locais;
  }

  adicionarLocal(local: Omit<Local, 'id'>): void {
    const novoLocal: Local = {
      ...local,
      id: Date.now()
    };
    this.locais.push(novoLocal);
    this.salvarDados();
  }

  removerLocal(id: number): void {
    this.locais = this.locais.filter(l => l.id !== id);
    this.salvarDados();
  }

  // PERIGOS
  getPerigos(): Perigo[] {
    return this.perigos;
  }

  adicionarPerigo(perigo: Omit<Perigo, 'id'>): void {
    const novoPerigo: Perigo = {
      ...perigo,
      id: Date.now()
    };
    this.perigos.push(novoPerigo);
    this.salvarDados();
  }

  removerPerigo(id: number): void {
    this.perigos = this.perigos.filter(p => p.id !== id);
    this.salvarDados();
  }

  // ARMAZENAMENTO
  private salvarDados(): void {
    localStorage.setItem('diario_recursos', JSON.stringify(this.recursos));
    localStorage.setItem('diario_locais', JSON.stringify(this.locais));
    localStorage.setItem('diario_perigos', JSON.stringify(this.perigos));
  }

  private carregarDados(): void {
    const recursosStorage = localStorage.getItem('diario_recursos');
    const locaisStorage = localStorage.getItem('diario_locais');
    const perigosStorage = localStorage.getItem('diario_perigos');

    this.recursos = recursosStorage ? JSON.parse(recursosStorage) : [];
    this.locais = locaisStorage ? JSON.parse(locaisStorage) : [];
    this.perigos = perigosStorage ? JSON.parse(perigosStorage) : [];
  }
}