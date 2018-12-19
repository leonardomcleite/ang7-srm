import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';
import { BreadcrumbModel } from '../../models/breadcrumb.model';

@Component({
  selector: 'srm-breadcrumb',
  styleUrls: ['breadcrumb.component.scss'],
  templateUrl: 'breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: BreadcrumbModel[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.createRoute(root);
    });
  }

  createRoute(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbModel[] = []): BreadcrumbModel[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) { return breadcrumbs; }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) { continue; }

      if (!child.snapshot.data.hasOwnProperty('breadcrumb')) {
        return this.createRoute(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeURL}`;

      const breadcrumb: BreadcrumbModel = this.addBreadcrumb(child, url);
      breadcrumbs.push(breadcrumb);
      return this.createRoute(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  addBreadcrumb(child: any, url: string): BreadcrumbModel {
    const breadcrumb: BreadcrumbModel = {
      title: child.snapshot.data['breadcrumb'],
      params: child.snapshot.params,
      url: url
    };
    return breadcrumb;
  }

}
