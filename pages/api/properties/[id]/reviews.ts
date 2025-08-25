import { NextApiRequest, NextApiResponse } from 'next';
import { Review } from '@/types';

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: '1',
    propertyId: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely stunning villa! The views were incredible and the infinity pool was perfect for relaxing. The staff was extremely helpful and the location was ideal for exploring Ubud. Would definitely stay here again!',
    createdAt: '2024-08-15T10:30:00Z'
  },
  {
    id: '2',
    propertyId: '1',
    userId: 'user2',
    userName: 'Michael Chen',
    rating: 5,
    comment: 'This place exceeded all expectations. The traditional Balinese architecture combined with modern amenities created the perfect atmosphere. The yoga deck was a highlight of our stay.',
    createdAt: '2024-08-10T14:22:00Z'
  },
  {
    id: '3',
    propertyId: '1',
    userId: 'user3',
    userName: 'Emma Wilson',
    rating: 4,
    comment: 'Beautiful property with amazing amenities. The only minor issue was that it was a bit far from the main town, but the shuttle service provided by the host was very convenient.',
    createdAt: '2024-08-05T09:15:00Z'
  },
  {
    id: '4',
    propertyId: '2',
    userId: 'user4',
    userName: 'Pierre Dubois',
    rating: 5,
    comment: 'Perfect location in the heart of Paris! The apartment was exactly as described and the host was incredibly responsive. Walking distance to everything we wanted to see.',
    createdAt: '2024-08-12T16:45:00Z'
  },
  {
    id: '5',
    propertyId: '2',
    userId: 'user5',
    userName: 'Lisa Martinez',
    rating: 4,
    comment: 'Lovely apartment with great character. The high ceilings and original features were charming. Great restaurants nearby and easy metro access.',
    createdAt: '2024-08-08T11:30:00Z'
  },
  {
    id: '6',
    propertyId: '3',
    userId: 'user6',
    userName: 'David Thompson',
    rating: 5,
    comment: 'The perfect mountain retreat! Woke up to deer in the yard and spent evenings by the fireplace. The hiking trails were amazing and the cabin had everything we needed.',
    createdAt: '2024-08-14T13:20:00Z'
  },
  {
    id: '7',
    propertyId: '3',
    userId: 'user7',
    userName: 'Jennifer Lee',
    rating: 5,
    comment: 'Amazing escape from the city! The cabin was cozy and well-equipped. Loved the deck for morning coffee with mountain views. Will definitely be back!',
    createdAt: '2024-08-09T08:45:00Z'
  },
  {
    id: '8',
    propertyId: '4',
    userId: 'user8',
    userName: 'Robert Garcia',
    rating: 5,
    comment: 'Waking up to ocean views every day was a dream! The house was immaculate and the beach access was incredible. Watched dolphins from the deck every morning.',
    createdAt: '2024-08-11T15:30:00Z'
  },
  {
    id: '9',
    propertyId: '4',
    userId: 'user9',
    userName: 'Amanda Foster',
    rating: 4,
    comment: 'Beautiful beachfront property with stunning views. The house was well-appointed and the location was perfect. Only wish we could have stayed longer!',
    createdAt: '2024-08-07T12:15:00Z'
  },
  {
    id: '10',
    propertyId: '5',
    userId: 'user10',
    userName: 'James Parker',
    rating: 4,
    comment: 'Charming Victorian townhouse with lots of character. Great location near Hyde Park and the museums. The private garden was a lovely surprise.',
    createdAt: '2024-08-13T17:00:00Z'
  },
  {
    id: '11',
    propertyId: '6',
    userId: 'user11',
    userName: 'Sofia Rodriguez',
    rating: 5,
    comment: 'Once in a lifetime experience! The desert camp was magical and the stargazing was incredible. The traditional meals and camel trekking made it unforgettable.',
    createdAt: '2024-08-06T19:30:00Z'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Simulate API delay
    setTimeout(() => {
      const propertyReviews = mockReviews.filter(review => review.propertyId === id);
      
      res.status(200).json(propertyReviews);
    }, 600);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
