import { ReadersService } from './../../Core/Services/Readers/readers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reciter-list',
  templateUrl: './reciter-list.component.html',
  styleUrls: ['./reciter-list.component.scss']
})

export class ReciterListComponent {

  readerList: any[] = []
  constructor(private readersService: ReadersService) {
    this.readersService.editionFilter().subscribe(res => {
      this.readerList = res.data
      console.log(this.readerList)
    })
  }
}
