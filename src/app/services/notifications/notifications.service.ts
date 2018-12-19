import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { NotificationComponent } from '../../components/notification/notification.component';
import { NotificationModel } from '../../models/notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    public snackBar: MatSnackBar,
    public dom: DomSanitizer,
  ) { }

  /**
   * Método que busca as notificações
   * *Obs: O mais correto seria criar um WebSocket, mas como não tem um microserciço
   * para comunicação, não é possivel
  */
  getNotifications() {
    const notifications: NotificationModel[]  = [];
    for (let index = 1; index <= 10; index++) {
      notifications.push(new NotificationModel('Notification' + index, 'Description notifications'));
    }

    return of(notifications);
  }

  /**
   * Cria component e renderiza a mensagem
  */
  notification(options: any) {
    const snackBarRef = this.snackBar.openFromComponent(NotificationComponent, this.createConfigSnackbar(options));
    snackBarRef.instance.htmlContent = this.dom.bypassSecurityTrustHtml(options.message);
    snackBarRef.instance.action = this.dom.bypassSecurityTrustHtml(options.action);
    snackBarRef.afterDismissed().subscribe(returnSnackBar => {});
  }

  /**
   * Cria configurações da notificação
  */
  private createConfigSnackbar(options: any) {
    const config = new MatSnackBarConfig();
    config.duration = options.time;
    config.verticalPosition = options.verticalPosition;
    config.horizontalPosition = options.horizontalPosition;
    config.data = {
      type: options.type,
      showAction: options.showAction,
    };
    return config;
  }
}
