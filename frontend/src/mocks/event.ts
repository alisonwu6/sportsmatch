import { EventCardProps } from '@/interfaces/event'

export const mockEvents: EventCardProps[] = [
  {
    title: 'Basketball Pickup',
    location: 'South Bank Court',
    time: 'Sat, July 20 · 3:00–5:00 PM',
    joinedCount: 6,
    maxCount: 10,
    timeLeft: '2 hours',
    host: {
      name: 'Blue',
      avatarUrl: '/avatars/blue.jpg',
      tag: 'Friendly & Chill',
    },
    tags: ['Beginner-friendly', 'Casual vibe', 'Just for fun'],
    participants: ['/avatars/a1.jpg', '/avatars/a2.jpg', '/avatars/a3.jpg'],
  },
  {
    title: 'Volleyball Fun Match',
    location: 'Kangaroo Point',
    time: 'Sun, July 21 · 4:30–6:00 PM',
    joinedCount: 8,
    maxCount: 12,
    timeLeft: '5 hours',
    host: {
      name: 'Maggie',
      avatarUrl: '/avatars/maggie.jpg',
      tag: 'For all levels',
    },
    tags: ['Open to all', 'Friendly', 'Relaxed pace'],
    participants: [
      '/avatars/b1.jpg',
      '/avatars/b2.jpg',
      '/avatars/b3.jpg',
      '/avatars/b4.jpg',
    ],
  },
]
