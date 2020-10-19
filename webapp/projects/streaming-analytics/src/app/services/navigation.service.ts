import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigatorNode } from '@c8y/ngx-components';
import { NavigatorNodeFactory } from '@c8y/ngx-components/core/navigator/navigator-node-factory.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements NavigatorNodeFactory {
  validNavigatorNodes = new BehaviorSubject<NavigatorNode[]>([]);

  constructor() {
    this.validNavigatorNodes.next(this.createNavigatorNodes());
  }

  get(_activatedRoute?: ActivatedRoute): Observable<NavigatorNode[]> {
    return this.validNavigatorNodes;
  }

  createNavigatorNodes() {
    const data = [];
    data.push(new NavigatorNode({
      name: 'home_nav',
      icon: 'home',
      label: 'Home',
      path: '',
      priority: 1000
    }));

    data.push(new NavigatorNode({
      name: 'eplApps_nav',
      icon: 'bullhorn',
      label: 'EPL Apps',
      path: 'eplapps',
      priority: 900
    }));
    data.push(new NavigatorNode({
      name: 'analytics_builder_nav',
      icon: 'bicycle',
      label: 'Analytics Builder',
      path: 'analyticsbuilder',
      priority: 800
    }));
    return data;
  }

}
