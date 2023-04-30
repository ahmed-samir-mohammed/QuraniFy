import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SurahList } from '../../Models/SurahList';
import { Ayahs, Surah } from '../../Models/Surah';

@Injectable({
  providedIn: 'root'
})
export class SurahService {

  private surahData$ = new BehaviorSubject<Surah | null>(null);
  surahData = this.surahData$.asObservable();

  private ayahsData$ = new BehaviorSubject<Ayahs[]>([]);
  ayahsData = this.ayahsData$.asObservable();

  constructor(private http: HttpClient) { }

  changeSurahData(surahData: Surah) {
    this.surahData$.next(surahData)
  }

  changeAyahsData(ayahsData: Ayahs[]) {
    this.ayahsData$.next(ayahsData)
  }

  getSurahList(): Observable<SurahList> {
    return this.http.get<SurahList>(`${environment.API_URL}/surah`);
  }

  getSurah(num: number, reader: string): Observable<Surah> {
    return this.http.get<Surah>(`${environment.API_URL}/surah/${num}/${reader}`);
  }
}
