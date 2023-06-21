import { useEffect, useRef, useState } from 'react';
import { MEDIA_FILES } from './constants';

function App() {
  const [isMusicDownloaded] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const [isMusicFetched, setIsMusicFetched] = useState<boolean>(false); 
  const audio = useRef<HTMLAudioElement>();

  const handleMusic = (): void => {
    setIsMusicPlaying(prevState => !prevState);
  }
  const handleDownload = (): void => {
    window.caches.open('bgplayer-media').then((cache) => {
      cache.add(`${process.env.PUBLIC_URL}/${MEDIA_FILES[0]}`);
    })
  }

  useEffect(() => {
    if (isMusicPlaying && !isMusicFetched) {
      audio.current = new Audio(`${process.env.PUBLIC_URL}/${MEDIA_FILES[0]}`);
      fetch(`${process.env.PUBLIC_URL}/${MEDIA_FILES[0]}`)
      setIsMusicFetched(true);
    }
    isMusicPlaying ? audio.current?.play() : audio.current?.pause()
  }, [ isMusicPlaying, isMusicFetched ]);

  return (
    <div className="App">
      <button type="button" onClick={handleMusic}>{isMusicPlaying ? 'Stop' : 'Play'} music</button><br/>
      <button type="button" onClick={handleDownload}>Download music</button><br/>
      <span>Is music downloaded: {isMusicDownloaded.toString()}.</span>
    </div>
  );
}

export default App;
