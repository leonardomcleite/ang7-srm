import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotificationModel } from 'src/app/models/notifications.model';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'srm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() showSide: EventEmitter<boolean> = new EventEmitter();

  // two-way-databinding customizado
  @Input() get changeWidth(): boolean { return this._changeWidth; }
  @Output() changeWidthChange: EventEmitter<boolean> = new EventEmitter();
  set changeWidth(val: boolean) {
    this._changeWidth = val;
    this.changeWidthChange.emit(val);
  }
  _changeWidth = true;

  economyGroup = 'Visão Agregada 1';
  userLogged: UserModel = new UserModel('Sandra Oliveira');
  notifications: NotificationModel[];

  constructor(
    public bottomSheet: MatBottomSheet,
    public notificationsService: NotificationsService
  ) {}

  ngOnInit() {
    this.notificationsService.getNotifications().subscribe(returnQuery => {
      this.notifications = returnQuery;
    });
  }

  openBottomSheet(): void {
    if (this.notifications.length === 0) { return; }
    const bottomSheet = this.bottomSheet.open(BottomSheetComponent, {
      data: {notifications: this.notifications}
    });

    bottomSheet.afterDismissed().subscribe(returnBottomSheet => {
      returnBottomSheet !== undefined ? this.notifications = returnBottomSheet : this.notifications = this.notifications;
    });
  }
}
