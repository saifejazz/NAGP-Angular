import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, throwError, of } from "rxjs";
import { IUser } from "./user";
import { catchError,tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/products/users.json';

  constructor(private http: HttpClient) { }

  // get all users
  getUsers():Observable<IUser[]> {
        return this.http.get<IUser[]>(this.userUrl).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
        ); 
        //return of(this.testV);
    }

    // get user by id
    getUser(id: number): Observable<IUser | undefined> {
    return this.getUsers()
      .pipe(
        map((users: IUser[]) => users.find(p => p.userid === id))
      );
      
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
