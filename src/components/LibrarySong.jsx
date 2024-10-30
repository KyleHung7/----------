import React from "react";
const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    id,
}) => {
    const songSelectHandler = async () => {
        // Select the song that was clicked
        const selectedSong = song;
        
        // Update active states first
        const newSongs = songs.map((s) => ({
            ...s,
            active: s.id === song.id
        }));
        setSongs(newSongs);

        // Force the current song update
        await setCurrentSong({
            ...selectedSong,
            active: true,
        });

        // Play if needed
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                try {
                    await playPromise;
                } catch (error) {
                    console.error("Playback failed:", error);
                }
            }
        }
    };

    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
