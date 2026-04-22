export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  tracks: Track[];
  followersCount?: number;
  embedId?: string;
}

export interface UserProfile {
  name: string;
  avatarUrl: string;
  bannerUrl: string;
  followers: number;
  following: number;
  playlists: Playlist[];
}
