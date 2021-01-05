import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { roleandzones } from './roleandzones';
import {searchpromotion} from './searchpromotion'

@Injectable({
  providedIn: 'root'
})
export class PromtionServicesService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem('tokenKey'); // you probably want to store it in localStorage or something


    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `${token}`),
    });

    return next.handle(req1);
  }
   rolezone: any;

  constructor(private http:HttpClient) {

   }

   public submit(rolezone){
     return this.http.post("http://localhost:8080/submit?zone=US&role=Promotion+Manager",rolezone,{responseType:'text' as 'json'});
   }

   public getPromotions(){
    return this.http.get("http://localhost:8080/promotions");
   }
   
   //public getPromotions(){
   // return this.http.get("http://localhost:8080/promotions");
   //}

   public getPromotionById(promoId){
     return this.http.get("http://localhost:8080/promotionid/"+promoId);
   }

   public getPromotionByName(promoName){
    return this.http.get("http://localhost:8080/promotionname/"+promoName);
  }
}
