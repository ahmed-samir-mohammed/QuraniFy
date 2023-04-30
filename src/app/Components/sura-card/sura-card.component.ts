import { ReadersService } from 'src/app/Core/Services/Readers/readers.service';
import { SurahService } from './../../Core/Services/Surah/surah.service';
import { Component, Input, OnInit } from '@angular/core';
import { Ayahs, Surah } from 'src/app/Core/Models/Surah';

@Component({
  selector: 'app-sura-card',
  templateUrl: './sura-card.component.html',
  styleUrls: ['./sura-card.component.scss']
})
export class SuraCardComponent implements OnInit {
  @Input() name: string = ''
  @Input() number!: number
  @Input() numberOfAyahs!: number
  time!: number
  identifier: string = ''
  surahData!: Surah
  ayahsData!: Ayahs[]

  constructor(private surahService: SurahService, private readersService: ReadersService) { }

  ngOnInit(): void {
    this.readersService.identifier.subscribe(res => this.identifier = res)
  }

  playSurah() {
    this.surahService.getSurah(this.number, this.identifier).subscribe((res: Surah | Ayahs[] | any) => {
      this.surahData = res.data.edition
      this.ayahsData = res.data.ayahs
      this.surahService.changeSurahData(this.surahData)
      this.surahService.changeAyahsData(this.ayahsData)
      console.log(this.surahData)
    })
    console.log(this.number)
  }
}
