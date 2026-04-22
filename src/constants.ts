import { Track, Playlist, UserProfile } from './types';

export const TRACKS: Track[] = [
  // Cleaning Music Tracks (c)
  { id: 'c1', title: 'Them Changes', artist: 'Thundercat', album: 'Drunk', duration: '3:08', coverUrl: 'https://images.unsplash.com/photo-1514525253344-f2038753239a?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c1.mp3' },
  { id: 'c2', title: 'Next Levels', artist: 'King Geedorah', album: 'Take Me To Your Leader', duration: '3:47', coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c2.mp3' },
  { id: 'c3', title: 'Sweet Love', artist: 'Junko Ohashi', album: 'Magical', duration: '3:58', coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c3.mp3' },
  { id: 'c4', title: 'Give Up The Funk', artist: 'Parliament', album: 'Mothership Connection', duration: '5:46', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c4.mp3' },
  { id: 'c5', title: 'Mercy Mercy Me', artist: 'Marvin Gaye', album: "What's Going On", duration: '3:14', coverUrl: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c5.mp3' },
  { id: 'c6', title: 'Slow Dancing', artist: 'V', album: 'Layover', duration: '3:07', coverUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce6742?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c6.mp3' },
  { id: 'c7', title: 'Moon River', artist: 'Frank Ocean', album: 'Moon River', duration: '3:12', coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c7.mp3' },
  { id: 'c8', title: 'Blast Off', artist: 'Bruno Mars, Silk Sonic', album: 'An Evening with Silk Sonic', duration: '4:44', coverUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/c8.mp3' },

  // Stay Awake! Keep Working! Tracks (s)
  { id: 's1', title: 'If You Want Blood', artist: 'AC/DC', album: 'Highway to Hell', duration: '4:36', coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s1.mp3' },
  { id: 's2', title: 'X Gon\' Give It To Ya', artist: 'DMX', album: 'Cradle 2 the Grave', duration: '3:38', coverUrl: 'https://images.unsplash.com/photo-1514525253344-f2038753239a?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s2.mp3' },
  { id: 's3', title: 'RICKY', artist: 'Denzel Curry', album: 'ZUU', duration: '2:27', coverUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s3.mp3' },
  { id: 's4', title: 'Dancing Queen', artist: 'ABBA', album: 'Arrival', duration: '3:50', coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s4.mp3' },
  { id: 's5', title: 'Maneater', artist: 'Nelly Furtado', album: 'Loose', duration: '4:18', coverUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce6742?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s5.mp3' },
  { id: 's6', title: 'I Go', artist: 'Peggy Gou', album: 'I Go', duration: '3:09', coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s6.mp3' },
  { id: 's7', title: 'One More Time', artist: 'Daft Punk', album: 'Discovery', duration: '5:20', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/s7.mp3' },

  // Easing Into Monday Morning Tracks (m)
  { id: 'm1', title: 'Cheek To Cheek', artist: 'Smoke & Mirrors Trio', album: 'Jazz Standards', duration: '4:12', coverUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m1.mp3' },
  { id: 'm2', title: 'I Thought About You', artist: 'Ted Lightfoot', album: 'Morning Jazz', duration: '3:45', coverUrl: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m2.mp3' },
  { id: 'm3', title: 'Slide', artist: 'Hara Noda', album: 'Slide', duration: '3:20', coverUrl: 'https://images.unsplash.com/photo-1514525253344-f2038753239a?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m3.mp3' },
  { id: 'm4', title: 'Body & Soul', artist: 'Hudson Harris', album: 'Jazz Cuts', duration: '5:10', coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m4.mp3' },
  { id: 'm5', title: 'Reception Rhythms', artist: 'Eximo Blue', album: 'Blue Notes', duration: '3:55', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m5.mp3' },
  { id: 'm6', title: 'April In Paris', artist: 'Grove Street Quartet', album: 'Paris Mornings', duration: '4:30', coverUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce6742?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m6.mp3' },
  { id: 'm7', title: 'Alfie', artist: 'Long Island Quartet', album: 'Classics', duration: '2:58', coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m7.mp3' },
  { id: 'm8', title: 'Blues Walk', artist: 'Lou Donaldson', album: 'Blues Walk', duration: '6:43', coverUrl: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&q=80&w=300&h=300', audioUrl: '/audio/m8.mp3' },
];

export const PLAYLISTS: Playlist[] = [
  {
    id: 'p1',
    name: 'Cleaning Music',
    description: 'Groovy beats to sweep and scrub to. Selected by blam.',
    followersCount: 313,
    coverUrl: '/frame2.png', 
    tracks: TRACKS.filter(t => t.id.startsWith('c')),
  },
  {
    id: 'p2',
    name: 'Stay Awake! Keep Working!',
    description: 'High energy anthems for those late night grinds.',
    followersCount: 210,
    coverUrl: '/frame3.png',
    tracks: TRACKS.filter(t => t.id.startsWith('s')),
  },
  {
    id: 'p3',
    name: 'Easing Into Monday Morning',
    description: 'Smooth jazz and acoustic layers for a gentle start to the week.',
    followersCount: 702,
    coverUrl: '/frame1.png',
    tracks: TRACKS.filter(t => t.id.startsWith('m')),
  },
];

export const NOTION_PROFILE: UserProfile = {
  name: 'Notion',
  avatarUrl: 'https://www.notion.so/images/logo-ios.png',
  bannerUrl: 'https://picsum.photos/seed/notionbg/1200/400?grayscale',
  followers: 1225, // Updated to match the sum or a realistic number for 3 playlists
  following: 0,
  playlists: PLAYLISTS,
};
