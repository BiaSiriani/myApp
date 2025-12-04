import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../services/diario.service';

@Component({
  selector: 'app-perigos',
  templateUrl: './perigos.page.html',
  styleUrls: ['./perigos.page.scss'],
  standalone: false,
})
export class PerigosPage implements OnInit {
  perigos: any[] = [];
  mostrarFormulario = false;
  novoPerigo = {
    nome: '',
    nivel: 'baixo',
    tipo: '',
    descricao: ''
  };

  constructor(private diarioService: DiarioService) {}

  ngOnInit() {
    this.carregarPerigos();
  }

  ionViewWillEnter() {
    this.carregarPerigos();
  }

  carregarPerigos() {
    this.perigos = this.diarioService.getPerigos();
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  salvarPerigo() {
    if (this.novoPerigo.nome.trim()) {
      this.diarioService.adicionarPerigo(this.novoPerigo);
      this.cancelar();
      this.carregarPerigos();
    }
  }

  cancelar() {
    this.mostrarFormulario = false;
    this.novoPerigo = {
      nome: '',
      nivel: 'baixo',
      tipo: '',
      descricao: ''
    };
  }

  removerPerigo(id: number) {
    this.diarioService.removerPerigo(id);
    this.carregarPerigos();
  }

  getNivelLabel(nivel: string): string {
    const niveis: { [key: string]: string } = {
      'baixo': 'Baixo',
      'medio': 'Médio',
      'alto': 'Alto',
      'critico': 'CRÍTICO'
    };
    return niveis[nivel] || nivel;
  }

  getTipoLabel(tipo: string): string {
    const tipos: { [key: string]: string } = {
      'maquina': 'Máquina Descontrolada',
      'predador': 'Predador Urbano',
      'quimico': 'Agente Químico',
      'estrutural': 'Zona Instável',
      'desconhecido': 'Ruído Suspeito'
    };
    return tipos[tipo] || tipo;
  }
}