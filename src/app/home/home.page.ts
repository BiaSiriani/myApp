import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiarioService } from '../services/diario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  recursos: any[] = [];
  locais: any[] = [];
  perigos: any[] = [];

  constructor(
    private router: Router,
    private diarioService: DiarioService
  ) {}

  ngOnInit() {
    this.carregarDados();
  }

  ionViewWillEnter() {
    this.carregarDados();
  }

  carregarDados() {
    this.recursos = this.diarioService.getRecursos();
    this.locais = this.diarioService.getLocais();
    this.perigos = this.diarioService.getPerigos();
  }

  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }
}