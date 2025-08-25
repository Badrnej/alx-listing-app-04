import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={property.images[0] || '/placeholder-image.svg'}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {property.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{property.location}</p>
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">
            {property.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-sm text-gray-600">{property.rating}</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">
                ${property.price}
              </span>
              <span className="text-sm text-gray-600">/night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
