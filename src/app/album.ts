import { Song } from "./song";

export class Album {
    constructor(public id : string, public name : string, public src : string, public songs: Song[] = []){}
}
