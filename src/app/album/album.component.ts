import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { SongService } from '../song.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  artistIdAlb : string = "";

  constructor( public songService : SongService, public albumService : AlbumService, public router: ActivatedRoute) { }

  ngOnInit() {

    this.artistIdAlb = this.router.snapshot.paramMap.get('artisteId')!;
    this.searchAlb();
    console.log(this.artistIdAlb);
  }

  searchAlb(){
      this.albumService.getAlbums(this.artistIdAlb);
  }

  sendAlbum(album:Album)
  {
      this.songService.albumchoisi = album;
      console.log(this.songService.albumchoisi);
      

  }
}
