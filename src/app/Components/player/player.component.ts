import { Ayahs, Surah } from 'src/app/Core/Models/Surah';
import { ReadersService } from './../../Core/Services/Readers/readers.service';
import { SurahService } from './../../Core/Services/Surah/surah.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  audioPlayer!: HTMLAudioElement
  duration: number = 0;
  seek: number = 0;
  currentTime = '00:00';
  durationString = '00:00';
  showPlay = true
  avatar = '../../../assets/img/avatar.jpg'
  surahData!: Surah | any
  ayahsData!: Ayahs[]
  src: string = ''

  constructor(private surahService: SurahService, private readersService: ReadersService, private _audioContext: AudioContext) {
    this.surahService.surahData.subscribe((res: Surah | any) => this.surahData = res)
    this.surahService.ayahsData.subscribe((res: Ayahs[]) => this.ayahsData = res)
  }

  ngOnInit(): void {
    for (let index = 0; index < this.ayahsData.length; index++) {
      this.src = this.ayahsData[0].audio;
      console.log(this.audioPlayer)
    }
  }

  switchPlay() { this.showPlay = !this.showPlay }

  ngAfterViewInit() {
    this.audioPlayerRef.nativeElement.addEventListener('timeupdate', (event: any) => {
      this.duration = event.target.duration;
      this.seek = (event.target.currentTime / this.duration) * 100;
      // this.currentTime = this.formatTime(event.target.currentTime);
      // this.durationString = this.formatTime(this.audioPlayer.duration);
      if (this.duration == event.target.currentTime) {
        this.switchPlay()
        event.target.currentTime = 0
      }
    });
  }

  formatTime(time: number): string {
    let minutes: any = Math.floor(time / 60);
    let seconds: any = Math.floor(time % 60);
    minutes < 10 ? minutes = '0' + minutes : false
    seconds < 10 ? seconds = '0' + seconds : false
    return minutes + ':' + seconds;
  }

  // setSeek(event: any) {
  //   const seekTime = (event.target.value / 100) * this.duration;
  //   this.audioPlayerRef.nativeElement.currentTime = seekTime;
  // }

  play() {
    this.audioPlayerRef.nativeElement.play()
    this.switchPlay()
  }

  pause() {
    this.audioPlayerRef.nativeElement.pause();
    this.switchPlay()
  }

  previous() {
    for (let index = 0; index < this.ayahsData.length; index++) {
      this.src = this.ayahsData[--index].audio;
      console.log(this.audioPlayer)
    }
  }
  next() {
    for (let index = 0; index < this.ayahsData.length; index++) {
      this.src = this.ayahsData[++index].audio;
      console.log(this.audioPlayer)
    }
  }
}
