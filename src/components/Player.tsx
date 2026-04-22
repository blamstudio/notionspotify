import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Mic2, ListMusic, MonitorSpeaker, Heart } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Track } from '../types';

interface PlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  shuffle: boolean;
  onToggleShuffle: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Player({ 
    currentTrack, 
    isPlaying, 
    setIsPlaying, 
    shuffle, 
    onToggleShuffle, 
    onNext, 
    onPrev 
}: PlayerProps) {
  const [repeat, setRepeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
            setError(null);
            audioRef.current.play().catch(err => {
                console.warn("Autoplay was prevented or audio failed to load:", err);
                setError("Failed to load audio. Please ensure the file exists and is a valid MP3.");
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }
  }, [isPlaying, currentTrack, setIsPlaying]);

  useEffect(() => {
    // Reset error when track changes
    setError(null);
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
        setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * duration;
  };

  if (!currentTrack) {
    return (
      <footer className="h-24 bg-zinc-900 border-t border-zinc-800 text-white px-4 grid grid-cols-3 items-center">
        <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-zinc-800 rounded shadow-lg animate-pulse" />
             <div>
                <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2" />
                <div className="h-3 w-16 bg-zinc-800 rounded animate-pulse" />
             </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-6 text-zinc-400">
                <Shuffle size={20} />
                <SkipBack size={20} />
                <Play size={32} />
                <SkipForward size={20} />
                <Repeat size={20} />
            </div>
            <div className="w-full flex items-center gap-2 text-xs text-zinc-400">
                <span>0:00</span>
                <div className="flex-1 h-1 bg-zinc-800 rounded-full" />
                <span>0:00</span>
            </div>
        </div>
        <div className="flex items-center justify-end gap-3 text-zinc-400">
            <Mic2 size={16} />
            <ListMusic size={16} />
            <MonitorSpeaker size={16} />
            <Volume2 size={16} />
            <div className="w-24 h-1 bg-zinc-800 rounded-full" />
        </div>
      </footer>
    );
  }

  const progressPercentage = (currentTime / duration) * 100 || 0;

  return (
    <footer className="h-24 bg-spotify-darker border-t border-spotify-highlight text-white px-4 grid grid-cols-3 items-center fixed bottom-0 left-0 right-0 z-50">
      <audio 
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={onNext}
      />
      
      {/* Track Info */}
      <div className="flex items-center gap-4">
        <img 
          src={currentTrack.coverUrl} 
          alt={currentTrack.title} 
          className="w-14 h-14 bg-gray-200 rounded shrink-0 object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-semibold hover:underline cursor-pointer truncate">{currentTrack.title}</p>
          <p className="text-xs text-gray-400 hover:underline cursor-pointer truncate">{currentTrack.artist}</p>
          {error && <p className="text-[10px] text-red-500 truncate mt-1">{error}</p>}
        </div>
        <button className="text-gray-400 hover:text-spotify-green transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 max-w-[600px] justify-self-center w-full">
        <div className="flex items-center gap-6 text-gray-400">
          <button 
            onClick={onToggleShuffle}
            className={`${shuffle ? 'text-spotify-green' : 'hover:text-white'} relative`}
          >
            <Shuffle size={18} />
            {shuffle && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-spotify-green rounded-full" />}
          </button>
          <button className="hover:text-white" onClick={onPrev}>
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 transition-transform shadow-lg"
          >
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
          </button>
          <button className="hover:text-white" onClick={onNext}>
            <SkipForward size={20} fill="currentColor" />
          </button>
          <button 
            onClick={() => setRepeat(!repeat)}
            className={`${repeat ? 'text-spotify-green' : 'hover:text-white'} relative`}
          >
            <Repeat size={18} />
            {repeat && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-spotify-green rounded-full" />}
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full flex items-center gap-2 text-[10px] text-gray-400 font-medium">
          <span>{formatTime(currentTime)}</span>
          <div 
            className="group relative flex-1 h-1 bg-[#4d4d4d] rounded-full cursor-pointer"
            onClick={handleProgressChange}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-white group-hover:bg-spotify-green rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            />
            <div 
              className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg" 
              style={{ left: `${progressPercentage}%` }}
            />
          </div>
          <span>{formatTime(duration) || currentTrack.duration}</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center justify-end gap-3 text-gray-400">
        <button className="hover:text-white"><Mic2 size={16} /></button>
        <button className="hover:text-white"><ListMusic size={16} /></button>
        <button className="hover:text-white"><MonitorSpeaker size={16} /></button>
        <div className="flex items-center gap-2 group w-32">
          <Volume2 size={18} className="group-hover:text-white" />
          <div 
            className="flex-1 h-1 bg-[#4d4d4d] rounded-full relative cursor-pointer"
            onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                setVolume(Math.min(Math.max(x / rect.width, 0), 1));
            }}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-white group-hover:bg-spotify-green rounded-full" 
              style={{ width: `${volume * 100}%` }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
