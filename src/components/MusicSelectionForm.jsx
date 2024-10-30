import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MusicSelectionForm.scss';

const MusicSelectionForm = ({ songs }) => {
  const [selectedSong, setSelectedSong] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSong) {
      const songToPlay = songs.find(song => song.name === selectedSong);
      if (songToPlay) {
        navigate(`/player/${encodeURIComponent(songToPlay.name)}`);
      }
    }
  };

  const handleReset = () => {
    setSelectedSong('');
  };

  return (
    <div className="music-selection-container">
      <h2>Music Selection</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Song's Name</h3>
          
          {songs.map((song) => (
            <div key={song.id} className="checkbox-container">
              <input
                type="radio"
                id={song.id}
                name="song"
                value={song.name}
                checked={selectedSong === song.name}
                onChange={(e) => setSelectedSong(e.target.value)}
              />
              <label htmlFor={song.id}>{song.name}</label>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" disabled={!selectedSong}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MusicSelectionForm;
