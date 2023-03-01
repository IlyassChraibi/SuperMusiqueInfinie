import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Youtube } from '../app/youtube';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private httpClient: HttpClient) { }
  url : string = 'https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&key={API_KEY}&q={MA_RECHERCHE}';

  getYoutubeVideo(chanson: String) : Observable<String> {
    return  this
    .httpClient.get<any>(this.url + chanson).pipe(
      map(response => Youtube.parse(response)));
  }
}