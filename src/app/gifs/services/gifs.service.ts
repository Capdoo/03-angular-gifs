import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apikey : string = 'Sg35dPJgZKmMisg19TZB4O1rEgWY6MMP';
  private api : string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready!');
  }

  get tagsHistory() {
    // Se usa el spread para generar una copia
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    //Para homologar
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter( e => e !== tag );
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('s',JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const temp = localStorage.getItem('s');
    if (!temp) return;
    this._tagsHistory = JSON.parse(temp);
    //Carga el primero de la lista
    if (this._tagsHistory.length == 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string) {
    //Si no se ingresa nada, no se hace nada
    if (tag.length === 0) return; 
    
    this.organizeHistory(tag);

    //Para anadir al inicio
    // console.log(this._tagsHistory);

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag);

    const url = `${this.api}/search`
    this.http.get<SearchResponse>(url, {params}).subscribe(
      (res) => {
        // console.log(res);
        this.gifsList = res.data;
        console.log({gifs:this.gifsList})
      }
    );
  }
}