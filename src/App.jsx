import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Player from "./components/PlayerSong";
import Song from "./components/Song";
import "./components/app.scss";
import MusicSelectionForm from "./components/MusicSelectionForm";

// Importing DATA
import data from "./components/data";
import Library from "./components/Library";
import Nav from "./components/Navb";

function MusicPlayer() {
  const { songName } = useParams();
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  // Modified useEffect to only run on initial mount and form navigation
  useEffect(() => {
    if (songName && !currentSong.initializedFromUrl) {
      const selectedSong = songs.find(
        song => song.name.toLowerCase() === decodeURIComponent(songName).toLowerCase()
      );
      if (selectedSong) {
        setCurrentSong({
          ...selectedSong,
          initializedFromUrl: true
        });
        if (audioRef.current) {
          audioRef.current.load();
        }
      }
    }
  }, [songName]); // Remove songs from dependency array

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        id={songs.id}
        songs={songs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

function App() {
  const [songs] = useState(data());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicSelectionForm songs={songs} />} />
        <Route path="/player/:songName" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
