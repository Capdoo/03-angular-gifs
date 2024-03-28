import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-atomic',
  templateUrl: './atomic.component.html',
  styleUrl: './atomic.component.css'
})
export class AtomicComponent implements OnInit{

  ngOnInit(): void {
    if (!this.gifSingleLand) {
      throw new Error('Gif property is required!');
    }
  }

  @Input()
  public gifSingleLand!: Gif;

}
