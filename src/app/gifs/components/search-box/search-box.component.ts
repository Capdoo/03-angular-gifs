import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('cualquierReferencia')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  // searchTag(newTag: string) {
  //   console.log(newTag);
  // }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    // console.log({newTag});
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=Sg35dPJgZKmMisg19TZB4O1rEgWY6MMP&q=valorant&limit=10')
    //   .then( res => res.json())
    //   .then( data => console.log(data));

  }


}
