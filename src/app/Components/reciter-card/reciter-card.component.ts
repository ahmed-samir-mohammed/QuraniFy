import { ReadersService } from './../../Core/Services/Readers/readers.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reciter-card',
  templateUrl: './reciter-card.component.html',
  styleUrls: ['./reciter-card.component.scss']
})
export class ReciterCardComponent {
  @Input() name: string = ''
  @Input() identifier: string = ''

  constructor(private readersService: ReadersService) {
  }

  getSurahs() {
    this.readersService.changeIdentifier(this.identifier)
    console.log(this.identifier)
  }

}
