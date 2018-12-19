import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'srm-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit, OnDestroy {

  economyGroup = 'Visão Agregada 1';
  userLogged: any = {name: 'UserSRM'};
  textInputAlign = 'right';
  options: FormGroup;
  @ViewChild('sidenav') sidenav;

  _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  _toolbarListener: () => void;
  toolbar: MediaQueryList;
  opened: boolean;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    public fb: FormBuilder
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1080px)');
    this._mobileQueryListener = () => {
      this.changeDetectorRef.detectChanges();
      this.sidenav.open();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.toolbar = this.media.matchMedia('(max-width: 850px)');
    this._toolbarListener = () => {
      this.changeDetectorRef.detectChanges();
      this.sidenav.open();
      this.toolbar.matches ? this.textInputAlign = 'right' : this.textInputAlign = 'center';
    };
    this.toolbar.addListener(this._toolbarListener);
  }

  ngOnInit() {
    this.mobileQuery.matches ? this.opened = false : this.opened = true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.toolbar.removeListener(this._toolbarListener);
  }

  // setDOM(bool) {
  //   let className, classNameFileld;
  //   if (bool) {
  //     className = 'mat-select-value-custom';
  //     classNameFileld = 'mat-select-value';
  //   } else {
  //     className = 'mat-select-value';
  //     classNameFileld = 'mat-select-value-custom';
  //   }

  //   const list = document.getElementsByClassName(classNameFileld);
  //   for (let i = 0; i < list.length; i++) {
  //     list[i].className = className;
  //     i--;
  //   }
  // }
}
