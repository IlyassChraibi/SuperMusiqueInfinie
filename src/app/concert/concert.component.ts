import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  zoom = 5;

  artistNameCon : string = "";

  constructor(public concertService : ConcertService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.artistNameCon = this.router.snapshot.paramMap.get('artisteName')!;
    console.log(this.concerts());
  }

  concerts(){
    this.concertService.getConcerts(this.artistNameCon);
  }

}