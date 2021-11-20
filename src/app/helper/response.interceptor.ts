import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HelperService } from './helper.service';
import { errors } from './error-message';
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private helperService: HelperService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            if (!window.navigator.onLine) {
              this.helperService.showToastMessage(errors.noInternet);
            } else if (!err.error?.errors) {
              this.helperService.showToastMessage(
                err.error.message || errors.someThingWrong
              );
            }
            if (err.status === 401) {
            }
            for (let error in err.error?.errors) {
              for (let i = 0; i < err.error.errors[error].length; i++) {
                this.helperService.showToastMessage(err.error.errors[error][i]);
              }
            }
          } catch (e) {
            this.helperService.showToastMessage(errors.someThingWrong);
          }
        }
        return throwError(err);
      })
    ) as any;
  }
}
