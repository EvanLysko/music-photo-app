export default class TrackInfo {
    trackPreview: string;
    trackName: string;
    trackFullLink: string;

    artistName: string;
    artistLink: string;

    albumName: string;
    albumLink: string;
    albumImage: string;

    trackDate: string;
    trackDurationMS: string;

    constructor(item: any) {
      this.trackPreview = '';
      this.trackName = '';
      this.trackFullLink = '';

      this.artistName = '';
      this.artistLink = '';

      this.albumName = '';
      this.albumLink = '';
      this.albumImage = '';

      this.trackDate = '';
      this.trackDurationMS = '';

      if (item) {
        this.trackPreview = item.preview_url;
        this.trackName = item.name;
        this.trackFullLink = item.external_urls.spotify;

        this.artistName = item.artists[0].name;
        this.artistLink = item.artists[0].external_urls.spotify;

        this.albumName = item.album.name;
        this.albumLink = item.album.external_urls.spotify;
        this.albumImage = item.album.images[0].url;

        this.trackDate = item.album.release_date;
        this.trackDurationMS = item.duration_ms;
      }
    }
  }