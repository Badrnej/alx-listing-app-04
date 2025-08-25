import { NextApiRequest, NextApiResponse } from 'next';
import { Property } from '@/types';

// Mock data for demonstration
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Bali',
    description: 'Experience the ultimate tropical getaway in this stunning luxury villa located in the heart of Bali. Featuring breathtaking views, infinity pool, and world-class amenities.',
    price: 350,
    location: 'Ubud, Bali, Indonesia',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'
    ],
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Air Conditioning', 'Hot Tub', 'Garden'],
    rating: 4.9
  },
  {
    id: '2',
    title: 'Modern Apartment in Paris',
    description: 'A stylish and contemporary apartment in the heart of Paris, perfect for exploring the City of Light. Located near major attractions and excellent transport links.',
    price: 180,
    location: 'Marais, Paris, France',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    amenities: ['WiFi', 'Kitchen', 'Washing Machine', 'Heating', 'Elevator'],
    rating: 4.7
  },
  {
    id: '3',
    title: 'Cozy Cabin in the Mountains',
    description: 'Escape to this charming mountain cabin surrounded by nature. Perfect for hiking, relaxation, and disconnecting from the digital world.',
    price: 120,
    location: 'Aspen, Colorado, USA',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=300&fit=crop'
    ],
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Parking', 'Pet Friendly'],
    rating: 4.8
  },
  {
    id: '4',
    title: 'Beachfront House in Malibu',
    description: 'Wake up to ocean views every morning in this spectacular beachfront property. Direct beach access and stunning sunset views guaranteed.',
    price: 500,
    location: 'Malibu, California, USA',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
    ],
    amenities: ['WiFi', 'Beach Access', 'Pool', 'Kitchen', 'Parking', 'Hot Tub'],
    rating: 4.9
  },
  {
    id: '5',
    title: 'Historic Townhouse in London',
    description: 'Stay in a beautifully restored Victorian townhouse in central London. Classic charm meets modern comfort in this elegant property.',
    price: 220,
    location: 'Kensington, London, UK',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=400&h=300&fit=crop'
    ],
    amenities: ['WiFi', 'Kitchen', 'Heating', 'Garden', 'Parking'],
    rating: 4.6
  },
  {
    id: '6',
    title: 'Desert Oasis in Morocco',
    description: 'Experience the magic of the Sahara in this unique desert camp. Traditional Berber hospitality with modern amenities under the stars.',
    price: 280,
    location: 'Merzouga, Morocco',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=300&fit=crop'
    ],
    amenities: ['Traditional Meals', 'Camel Trekking', 'Stargazing', 'Cultural Activities'],
    rating: 4.8
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(mockProperties);
    }, 1000);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
