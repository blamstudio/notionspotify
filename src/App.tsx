import { useState, useCallback } from 'react';
import Player from './components/Player';
import ProfileLayout from './components/ProfileLayout';
import { Playlist, Track } from './types';
import { TRACKS } from './constants';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(TRACKS[0]);
  const [queue, setQueue] = useState<Track[]>(TRACKS);
  const [activePlaylist, setActivePlaylist] = useState<Playlist | null>(null);
  const [view, setView] = useState<'profile' | 'playlist'>('profile');
  const [shuffle, setShuffle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenPlaylist = useCallback((playlist: Playlist) => {
    setActivePlaylist(playlist);
    setView('playlist');
  }, []);

  const handleBackToProfile = useCallback(() => {
    setView('profile');
  }, []);

  const handlePlayPlaylist = useCallback((playlist: Playlist) => {
    setActivePlaylist(playlist);
    let tracks = [...playlist.tracks];
    if (shuffle) {
      tracks = [...tracks].sort(() => Math.random() - 0.5);
    }
    setQueue(tracks);
    if (tracks.length > 0) {
      setCurrentTrack(tracks[0]);
    }
    setIsPlaying(true);
  }, [shuffle]);

  const handlePlayTrack = useCallback((track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    if (!queue.find(t => t.id === track.id)) {
        setQueue(TRACKS);
    }
  }, [queue]);

  const handleNextTrack = useCallback(() => {
    if (!currentTrack) return;
    const currentIndex = queue.findIndex(t => t.id === currentTrack.id);
    if (currentIndex !== -1 && currentIndex < queue.length - 1) {
      setCurrentTrack(queue[currentIndex + 1]);
    } else {
      setCurrentTrack(queue[0]);
    }
  }, [currentTrack, queue]);

  const handlePrevTrack = useCallback(() => {
    if (!currentTrack) return;
    const currentIndex = queue.findIndex(t => t.id === currentTrack.id);
    if (currentIndex > 0) {
      setCurrentTrack(queue[currentIndex - 1]);
    } else {
      setCurrentTrack(queue[queue.length - 1]);
    }
  }, [currentTrack, queue]);

  const toggleShuffle = useCallback(() => {
    const newShuffle = !shuffle;
    setShuffle(newShuffle);
    if (newShuffle && queue.length > 0) {
        const shuffled = [...queue].sort(() => Math.random() - 0.5);
        setQueue(shuffled);
    } else if (activePlaylist) {
        setQueue(activePlaylist.tracks);
    } else {
        setQueue(TRACKS);
    }
  }, [shuffle, queue, activePlaylist]);

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden selection:bg-emerald-500/30">
      <ProfileLayout 
        view={view}
        activePlaylist={activePlaylist}
        onOpenPlaylist={handleOpenPlaylist}
        onBackToProfile={handleBackToProfile}
        onPlayPlaylist={handlePlayPlaylist}
        onPlayTrack={handlePlayTrack}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
      />
      <Player 
        currentTrack={currentTrack} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        shuffle={shuffle}
        onToggleShuffle={toggleShuffle}
        onNext={handleNextTrack}
        onPrev={handlePrevTrack}
      />
    </div>
  );
}
