import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';
import { Playlist } from '../types';
import { motion } from 'motion/react';

interface PlaylistCardProps {
  playlist: Playlist;
  onPlay: (p: Playlist) => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onPlay }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-[#181818]/40 p-4 rounded-md hover:bg-[#282828] transition-colors group relative cursor-pointer"
      onClick={() => onPlay(playlist)}
    >
      <div className="relative mb-4">
        <img 
          src={playlist.coverUrl} 
          alt={playlist.name} 
          className="w-full aspect-square object-cover rounded shadow-lg"
          referrerPolicy="no-referrer"
        />
        <button 
          className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            onPlay(playlist);
          }}
        >
          <Play fill="currentColor" size={24} className="translate-x-[2px]" />
        </button>
      </div>
      
      <h3 className="text-white font-bold text-sm mb-1 truncate">{playlist.name}</h3>
      <p className="text-[#a7a7a7] text-xs font-semibold">
        {playlist.followersCount ? `${playlist.followersCount.toLocaleString()} Followers` : playlist.description}
      </p>
    </motion.div>
  );
};

export default PlaylistCard;
