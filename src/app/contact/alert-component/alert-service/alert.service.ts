import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Alert, AlertType } from './model/alert';

@Injectable()
export class AlertService {
  private result = new Subject<Alert>();

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // clear alert messages
        this.clear();
      }
    });
  }

  getAlert(): Observable<any> {
    return this.result.asObservable();
  }

  success(message: string) {
    this.alert(AlertType.Success, message);
  }

  error(message: string) {
    this.alert(AlertType.Error, message);
  }

  alert(type: AlertType, message: string) {
    this.result.next(<Alert>{ type: type, message: message });
  }

  clear() {
    // clear alerts
    this.result.next();
  }
}