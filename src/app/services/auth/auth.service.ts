import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() changePath: EventEmitter<string> = new EventEmitter();

  /**
   * Método autenticador de rotas
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const path = route.routeConfig.path;
    this.changePath.emit(path);
    return true;
  }

  /**
   * Método mock, que simula o retorno de uma chamada REST após autenticar o usuário
  */
  getMenusUser() {
    return of([
      {
        name: 'Painel de Gestão',
        svgIcon: 'globe',
        route: 'management-panel',
      },
      {
        name: 'Conta Digital',
        svgIcon: 'arroba',
        route: 'digital-account',
      },
      {
        name: 'Ant. de Recebíveis',
        svgIcon: 'graph',
        route: 'receivable',
      }
    ]);
  }

}
