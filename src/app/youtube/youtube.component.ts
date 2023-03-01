import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
})
export class YoutubeComponent implements OnInit {
  url: String = '';
  chanson: String = '';
  constructor(
    private youtubeService: YoutubeService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chanson = this.router.snapshot.paramMap.get('songId')!;
    this.getYoutube();
  }

  getYoutube(): void {
    const baseUrl = 'https://www.youtube.com/embed/';
    this.youtubeService
      .getYoutubeVideo(this.chanson)
      .subscribe((res) => (this.url = baseUrl + res));
  }
}
