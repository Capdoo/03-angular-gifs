import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{

  @Input()
  public urlLand!: string;

  @Input()
  public altLand: string = 'title';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.urlLand) {
      throw new Error('Url property is required.');
    }     
  } 

  onLoad() {
    console.log('Image loaded');
    this.hasLoaded = true;
  }

}
