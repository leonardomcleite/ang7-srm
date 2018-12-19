import { Component } from '@angular/core';
import { OptionsNotification } from '../../models/options-notifications.model';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'srm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [Animations.arise]
})
export class PageNotFoundComponent {

  constructor(
    public notificationService: NotificationsService
  ) {}

  reportError() {
    const messageOptions = new OptionsNotification(
      `<span class="notification-content">Erro reportado com sucesso!</span>`,
      'success',
      null,
      false,
      'bottom',
      'center');

    this.notificationService.notification(messageOptions);
  }

}
