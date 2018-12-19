import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuModel } from '../../models/menu.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'srm-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menus: MenuModel[] = [];
  activeRoute: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public authService: AuthService
  ) {
    this.matIconRegistry.addSvgIcon('globe', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/globe.svg'));
    this.matIconRegistry.addSvgIcon('arroba', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/arroba.svg'));
    this.matIconRegistry.addSvgIcon('graph', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/graph.svg'));
  }

  ngOnInit() {
    this.authService.changePath.subscribe(returnSubscribe => {
      this.activeRoute = returnSubscribe;
    });
    this.getMenus();
  }

  getMenus() {
    this.authService.getMenusUser().subscribe(returnQuery => {
      this.menus = returnQuery;
    });
  }

}
