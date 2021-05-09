import { ICategories } from "src/app/products/categories";
import { Injectable } from "@angular/core/core";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { from, Observable, throwError, of } from "rxjs";
import { catchError,tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private productUrl = 'api/products/categories.json';

    constructor(private http: HttpClient) {}
    
    getCategories(id: number): Observable<ICategories | undefined> {
    return this.getCategories()
      .pipe(
        map((categories: ICategories[]) => categories.find(p => p.productId === id))
      );
      
  }
}