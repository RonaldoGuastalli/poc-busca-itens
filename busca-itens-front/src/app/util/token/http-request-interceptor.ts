import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
            const aposReq = req.clone({
                headers: req.headers.set('app-token', 'mCl6SnTQp6eT')
            });
        return next.handle(aposReq);
    }

}