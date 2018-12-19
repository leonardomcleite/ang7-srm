import { Component, OnInit } from '@angular/core';
import { ActiosModel } from 'src/app/models/actions.model';
import { Animations } from '../../animations/animations';
import { HeaderOptionsModel } from '../../models/header-options.model';
import { ManagementPanelService } from '../../services/management-panel/management-panel.service';

@Component({
  selector: 'srm-management-panel',
  templateUrl: './management-panel.component.html',
  styleUrls: ['./management-panel.component.scss'],
  animations: [Animations.FadeInAndFadeOut]
})
export class ManagementPanelComponent implements OnInit {

  headerOptions: HeaderOptionsModel = new HeaderOptionsModel('Painel de Gestão', 'globe');
  product = 'Todos';
  shortcutsOperational: string[];
  shortcutsGeneral: string[];
  show: boolean;
  actions: ActiosModel[];

  constructor(
    public managementPanelService: ManagementPanelService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 100);

    this.getActions();
    this.getShortcustsOperational();
    this.getShortcustsGeneral();
  }

  getActions() {
    this.managementPanelService.getActions().subscribe(returnQuery => {
      this.actions = returnQuery;
    });
  }

  getShortcustsOperational() {
    this.managementPanelService.getShortcustsOperational().subscribe(returnQuery => {
      this.shortcutsOperational = returnQuery;
    });
  }

  getShortcustsGeneral() {
    this.managementPanelService.getShortcustsGeneral().subscribe(returnQuery => {
      this.shortcutsGeneral = returnQuery;
    });
  }

}
