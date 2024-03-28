import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifService: GifsService) {}

  get listadoGeneral() {
    return this.gifService.tagsHistory;
  }

  sendSearch(item: string): void {
    this.gifService.searchTag(item);
  }

}
