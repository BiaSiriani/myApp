import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../services/diario.service';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.page.html',
  styleUrls: ['./locais.page.scss'],
  standalone: false,
})
export class LocaisPage implements OnInit {
  locais: any[] = [];
  mostrarFormulario = false;
  novoLocal = {
    nome: '',
    tipo: '',
    coordenadas: '',
    descricao: ''
  };

  constructor(private diarioService: DiarioService) {}

  ngOnInit() {
    this.carregarLocais();
  }

  ionViewWillEnter() {
    this.carregarLocais();
  }

  carregarLocais() {
    this.locais = this.diarioService.getLocais();
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  salvarLocal() {
    if (this.novoLocal.nome.trim()) {
      this.diarioService.adicionarLocal(this.novoLocal);
      this.cancelar();
      this.carregarLocais();
    }
  }

  cancelar() {
    this.mostrarFormulario = false;
    this.novoLocal = {
      nome: '',
      tipo: '',
      coordenadas: '',
      descricao: ''
    };
  }

  removerLocal(id: number) {
    this.diarioService.removerLocal(id);
    this.carregarLocais();
  }

  getTipoLabel(tipo: string): string {
    const tipos: { [key: string]: string } = {
      'abrigo': 'Abrigo Improvisado',
      'tunel': 'Túnel Seguro',
      'contaminada': 'Área Contaminada',
      'agua': 'Ponto com Água',
      'perigo': 'Zona de Perigo'
    };
    return tipos[tipo] || tipo;
  }
}