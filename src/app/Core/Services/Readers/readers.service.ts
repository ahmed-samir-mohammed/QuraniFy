import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Edition } from '../../Models/Ediition';

@Injectable({
  providedIn: 'root'
})
export class ReadersService {

  private identifier$ = new BehaviorSubject<string>("");
  identifier = this.identifier$.asObservable();

  constructor(private http: HttpClient) { }

  changeIdentifier(identifier: string) {
    this.identifier$.next(identifier)
  }

  editionFilter(format = 'audio', language = 'ar'): Observable<Edition> {
    return this.http.get<Edition>(`${environment.API_URL}/edition?format=${format}&language=${language}`)
  }
}
