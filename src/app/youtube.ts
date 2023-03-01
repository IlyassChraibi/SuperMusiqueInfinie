export class Youtube {

    static parse(res: any) {
      return res.items[0].id.videoId;
    }
  }