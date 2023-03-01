import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  idAlb: string = "";

  constructor(public songService : SongService,public router: ActivatedRoute,public albumService:AlbumService) { }

  ngOnInit() {
    this.idAlb = this.router.snapshot.paramMap.get('albumId')!;
    this.searchSong();
  }

  searchSong(){
    this.songService.getSongs(this.songService.albumchoisi);
}

}
