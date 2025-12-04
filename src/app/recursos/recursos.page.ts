import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../services/diario.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
  standalone: false,
})
export class RecursosPage implements OnInit {
  recursos: any[] = [];
  mostrarFormulario = false;
  novoRecurso = {
    nome: '',
    quantidade: '',
    descricao: ''
  };

  constructor(private diarioService: DiarioService) {}

  ngOnInit() {
    this.carregarRecursos();
  }

  ionViewWillEnter() {
    this.carregarRecursos();
  }

  carregarRecursos() {
    this.recursos = this.diarioService.getRecursos();
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  salvarRecurso() {
    if (this.novoRecurso.nome.trim()) {
      this.diarioService.adicionarRecurso(this.novoRecurso);
      this.cancelar();
      this.carregarRecursos();
    }
  }

  cancelar() {
    this.mostrarFormulario = false;
    this.novoRecurso = {
      nome: '',
      quantidade: '',
      descricao: ''
    };
  }

  removerRecurso(id: number) {
    this.diarioService.removerRecurso(id);
    this.carregarRecursos();
  }
}