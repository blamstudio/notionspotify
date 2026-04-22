import { ChevronLeft, ChevronRight, User, Play, Clock, MoreHorizontal, Ellipsis, Verified, Heart } from 'lucide-react';
import { NOTION_PROFILE } from '../constants';
import PlaylistCard from './PlaylistCard';
import { Playlist, Track } from '../types';

interface ProfileLayoutProps {
  view: 'profile' | 'playlist';
  activePlaylist: Playlist | null;
  onOpenPlaylist: (p: Playlist) => void;
  onBackToProfile: () => void;
  onPlayPlaylist: (p: Playlist) => void;
  onPlayTrack: (t: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
}

export default function ProfileLayout({ 
  view, 
  activePlaylist, 
  onOpenPlaylist, 
  onBackToProfile, 
  onPlayPlaylist, 
  onPlayTrack,
  currentTrack,
  isPlaying
}: ProfileLayoutProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#222222] to-[#121212] scroll-smooth">
      <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 bg-[#121212]/30 backdrop-blur-md">
        <div className="flex gap-4">
          <button 
            onClick={onBackToProfile}
            className={`bg-black/70 p-1 rounded-full text-white transition-opacity ${view === 'profile' ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-black'}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button className="bg-black/70 p-1 rounded-full text-white cursor-not-allowed opacity-50">
            <ChevronRight size={24} />
          </button>
        </div>
      </header>

      {view === 'profile' ? (
        <>
          {/* Hero Section - Public Profile Style */}
          <section className="relative h-80 flex flex-col justify-end px-8 pb-10 group bg-gradient-to-b from-[#444444] to-transparent">
            <div className="relative z-10 flex items-end gap-6">
              <div className="w-60 h-60 bg-white rounded-full shadow-2xl flex items-center justify-center shrink-0 overflow-hidden">
                 <img src={NOTION_PROFILE.avatarUrl} alt="Notion" className="w-[80%] h-[80%] object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex items-center gap-2">
                    <div className="text-emerald-400 bg-white rounded-full p-0.5">
                        <Verified size={14} fill="currentColor" className="text-emerald-400" />
                    </div>
                    <span className="text-white text-xs font-bold">Profile</span>
                </div>
                <h1 className="text-white text-[96px] font-black tracking-tighter leading-none mb-4">{NOTION_PROFILE.name}</h1>
                <p className="text-white text-sm font-bold">
                  {NOTION_PROFILE.playlists.length} Public Playlists • {NOTION_PROFILE.followers.toLocaleString()} Followers
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <main className="px-8 pt-6 pb-32 flex flex-col gap-8">
            {/* Actions */}
            <div className="flex items-center gap-8">
                <button className="border border-gray-500 text-white font-bold px-4 py-1 rounded-full hover:scale-105 hover:border-white transition-all text-xs uppercase tracking-widest bg-transparent">
                    Follow
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                    <Ellipsis size={32} />
                </button>
            </div>

            {/* Public Playlists Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-2xl font-bold hover:underline cursor-pointer tracking-tight">Public Playlists</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                {NOTION_PROFILE.playlists.map(playlist => (
                  <PlaylistCard 
                    key={playlist.id} 
                    playlist={playlist} 
                    onPlay={onOpenPlaylist}
                  />
                ))}
              </div>
            </section>
          </main>
        </>
      ) : activePlaylist && (
        <>
          {/* Playlist Hero Section */}
          <section className="relative h-80 flex flex-col justify-end px-8 pb-10 group bg-gradient-to-b from-[#333333] to-transparent">
            <div className="relative z-10 flex items-end gap-6">
              <div className="w-60 h-60 bg-[#282828] shadow-2xl shrink-0 overflow-hidden rounded-sm">
                 <img src={activePlaylist.coverUrl} alt={activePlaylist.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col gap-2 pb-2">
                <span className="text-white text-xs font-bold uppercase">Playlist</span>
                <h1 className="text-white text-[72px] font-black tracking-tighter leading-none mb-2">{activePlaylist.name}</h1>
                <p className="text-[#a7a7a7] text-sm font-medium">{activePlaylist.description}</p>
                <div className="flex items-center gap-1.5 text-white text-sm font-bold mt-1">
                   <span>Notion</span>
                   <span className="text-xs opacity-60">•</span>
                   <span>{activePlaylist.followersCount?.toLocaleString()} followers</span>
                   <span className="text-xs opacity-60">•</span>
                   <span>{activePlaylist.tracks.length} songs</span>
                </div>
              </div>
            </div>
          </section>

          <main className="px-8 pt-6 pb-32">
            <div className="flex items-center gap-8 mb-8">
               <button 
                 onClick={() => onPlayPlaylist(activePlaylist)}
                 className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center text-black shadow-xl hover:scale-105 active:scale-95 transition-all"
               >
                 <Play fill="currentColor" size={28} className="ml-1" />
               </button>
               <button className="text-white opacity-70 hover:opacity-100 transition-all">
                 <Heart size={32} />
               </button>
               <button className="text-white opacity-70 hover:opacity-100 transition-all">
                 <Ellipsis size={32} />
               </button>
            </div>

            <div className="w-full">
               <div className="grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)_48px] gap-4 px-4 py-2 text-[#a7a7a7] text-sm border-b border-white/10 mb-4 font-medium uppercase tracking-widest text-[11px]">
                  <span>#</span>
                  <span>Title</span>
                  <span>Album</span>
                  <span>Date Added</span>
                  <div className="flex justify-end"><Clock size={16} /></div>
               </div>

               <div className="flex flex-col">
                  {activePlaylist.tracks.map((track, i) => (
                    <div 
                      key={track.id}
                      onClick={() => onPlayTrack(track)}
                      className={`grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)_48px] gap-4 px-4 py-2 hover:bg-white/10 rounded-md group cursor-pointer items-center ${currentTrack?.id === track.id ? 'text-spotify-green' : 'text-white'}`}
                    >
                      <div className="text-[#a7a7a7] text-sm group-hover:hidden">
                        {currentTrack?.id === track.id && isPlaying ? (
                          <div className="flex items-end gap-[2px] h-3 w-3 mb-1">
                             <div className="w-0.5 bg-spotify-green animate-[bounce_0.6s_infinite]" />
                             <div className="w-0.5 bg-spotify-green animate-[bounce_0.8s_infinite]" />
                             <div className="w-0.5 bg-spotify-green animate-[bounce_0.7s_infinite]" />
                          </div>
                        ) : i + 1}
                      </div>
                      <div className="hidden group-hover:block">
                        <Play size={14} fill="currentColor" className="text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                         <img src={track.coverUrl} className="w-10 h-10 rounded shadow flex-shrink-0" referrerPolicy="no-referrer" />
                         <div className="flex flex-col">
                            <span className={`font-medium truncate ${currentTrack?.id === track.id ? 'text-spotify-green' : 'text-white'}`}>{track.title}</span>
                            <span className="text-[#a7a7a7] text-xs font-semibold group-hover:text-white transition-colors">{track.artist}</span>
                         </div>
                      </div>
                      <span className="text-[#a7a7a7] text-sm group-hover:text-white truncate transition-colors">{track.album}</span>
                      <span className="text-[#a7a7a7] text-sm">2 days ago</span>
                      <div className="flex justify-end text-[#a7a7a7] text-sm group-hover:text-white transition-colors">{track.duration}</div>
                    </div>
                  ))}
               </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
