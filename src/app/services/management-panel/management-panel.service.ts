import { Injectable } from '@angular/core';
import { ActiosModel } from 'src/app/models/actions.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementPanelService {

  constructor() { }

  /**
   * Método que busca as ações da tela de gestão
  */
  getActions() {
    const actions: ActiosModel[]  = [];
    actions.push(new ActiosModel('23 notas canceladas', false));
    actions.push(new ActiosModel('13 notas canceladas', true, 'Ações'));
    actions.push(new ActiosModel('7 assinaturas digitais', true, 'Ações'));

    return of(actions);
  }

  /**
   * Método que busca atalhos operacionais
  */
  getShortcustsOperational () {
    return of(['Envio', 'Envio de Duplicatas', 'Nova Operação', 'Assinatura', 'Assinatura Digital']);
  }

  /**
   * Método que busca atalhos gerais
  */
  getShortcustsGeneral () {
    return of(['Carteira', 'Instruções']);
  }
}
