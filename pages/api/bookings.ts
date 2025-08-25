import { NextApiRequest, NextApiResponse } from 'next';
import { BookingFormData } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Simulate API processing delay
    setTimeout(() => {
      const bookingData: BookingFormData = req.body;
      
      // Basic validation
      const requiredFields = [
        'firstName', 'lastName', 'email', 'phoneNumber',
        'cardNumber', 'expirationDate', 'cvv', 'billingAddress'
      ];
      
      for (const field of requiredFields) {
        if (!bookingData[field as keyof BookingFormData] || 
            !bookingData[field as keyof BookingFormData].toString().trim()) {
          return res.status(400).json({ 
            error: `Missing required field: ${field}` 
          });
        }
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(bookingData.email)) {
        return res.status(400).json({ 
          error: 'Invalid email address format' 
        });
      }
      
      // Simulate successful booking creation
      const bookingId = `booking_${Date.now()}`;
      
      res.status(201).json({
        success: true,
        bookingId: bookingId,
        message: 'Booking created successfully',
        booking: {
          id: bookingId,
          ...bookingData,
          status: 'confirmed',
          createdAt: new Date().toISOString()
        }
      });
    }, 1500); // Simulate processing time
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
