import { ReadersService } from './../../Core/Services/Readers/readers.service';
import { SurahList } from './../../Core/Models/SurahList';
import { SurahService } from './../../Core/Services/Surah/surah.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sura-list',
  templateUrl: './sura-list.component.html',
  styleUrls: ['./sura-list.component.scss']
})
export class SuraListComponent {
  surahList: any[] = []
  identifier: string = ''
  constructor(private surahService: SurahService, private readersService: ReadersService) {
    this.readersService.identifier.subscribe(res => this.identifier = res)
    this.surahService.getSurahList().subscribe((res: SurahList) => {
      this.surahList = res.data
      console.log(this.surahList)
    })
  }
}
