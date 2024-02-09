'use client'

import { useState } from 'react';
import TrackInfo from './classes/TrackInfo';
import SongInfoComponent from './components/SongInfoComponent';
import SpotifyAPIController from './classes/SpotifyAPIController';
import GoogleSearchAPIController from './classes/GoogleSearchAPIController';
import ImagesComponent from './components/ImagesComponent';

export default function Home() {
  

  const [curTrack, setCurTrack] = useState(new TrackInfo(null));
  const [curImages, setCurImages] = useState(['']);
  const [audioControlSource, setAudioControlSource] = useState('pause_FILL1_wght400_GRAD0_opsz24.svg');

  const spotifyAPIController = new SpotifyAPIController();
  const googleSearchAPIController = new GoogleSearchAPIController();
  

  const searchTrack = async (trackSearch : string) => {
    const token = await spotifyAPIController.getToken();
    const track = await spotifyAPIController.getTrack(token, trackSearch);
    const images = await googleSearchAPIController.getImages(trackSearch);
    setCurTrack(new TrackInfo(track.tracks.items[0]));
    setCurImages(images);
    setAudioControlSource('pause_FILL1_wght400_GRAD0_opsz24.svg');
    const audio = document.getElementById('audio') as HTMLAudioElement;
    audio.setAttribute('loop', 'true');
    new Promise(resolve => setTimeout(resolve, 500)).then(() => {//fixes a bug where the audio doesn't play on the first click

      audio.pause();
      audio.load();
      var playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
    });
  }


  return (
    <div>
      <form>
        <div className='input-wrapper'>
          <input placeholder='Track Name' type="text" id="trackSearch" className="search-input"/>
          <div>
            <button className='search-button' type='submit'
            onClick={() => {
              event?.preventDefault();
              searchTrack((document.getElementById('trackSearch') as HTMLInputElement).value); 
              }}>Search</button>
          </div>
        </div>
      </form>

      <SongInfoComponent trackInfo={curTrack} audioControlClick= {() => {
        const audio = document.getElementById('audio') as HTMLAudioElement;
        if (audioControlSource === 'pause_FILL1_wght400_GRAD0_opsz24.svg') {
          audio.pause();
          setAudioControlSource('play_arrow_FILL1_wght400_GRAD0_opsz24.svg');
        } else {
          audio.play();
          setAudioControlSource('pause_FILL1_wght400_GRAD0_opsz24.svg');
        }
      
      }} audioControlSource={audioControlSource} />
      <audio key='please' className='visibility: hidden' src={curTrack.trackPreview} id='audio'></audio>
      <ImagesComponent images={curImages} />
    </div>
  );
}
