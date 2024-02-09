import TrackInfo from "../classes/TrackInfo";
import AudioControlComponent from "./AudioControlComponent";

export default function SongInfoComponent({trackInfo, audioControlClick, audioControlSource} :{trackInfo: TrackInfo, audioControlClick: () => void, audioControlSource: string}) {

  function millisToMinutesAndSeconds(millis : number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      Number(seconds) == 60 ?
      (minutes+1) + ":00" :
      minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds
    );  
  }

  
  if (trackInfo.trackName != '') {
    return (
      <div className="song-info-card">
        <div className="track-image-wrapper">
          <a href={trackInfo.albumLink} target="_blank" rel="noreferrer">
          <img src={trackInfo.albumImage} alt={trackInfo.albumName} className="track-image"/>
          </a>
        </div>
        <div className="track-info-wrapper">
          <div className="track-name-wrapper">
            <h1 className="track-name">
              <a href={trackInfo.trackFullLink} target="_blank" rel="noreferrer">
              {trackInfo.trackName}
              </a>
            </h1>
          </div>
          <div className="artist-wrapper">
            <h2 className="artist">
              <a href={trackInfo.artistLink} target="_blank" rel="noreferrer">
              {trackInfo.artistName}
              </a>
            </h2>
          </div>
          <div className="album-wrapper">
            <h2 className="album">
              <a href={trackInfo.albumLink} target="_blank" rel="noreferrer">
              {trackInfo.albumName}
              </a>
            </h2>
          </div>
          <div className="time-date-wrapper">
            <h3 className="time-date">{trackInfo.trackDate}</h3>
            <h3 className="time-date">{millisToMinutesAndSeconds(Number(trackInfo.trackDurationMS))}</h3>
          </div>
        </div>
        <AudioControlComponent click={audioControlClick} source={audioControlSource}/>
      </div>
    );
  }
}