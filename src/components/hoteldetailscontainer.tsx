import React from 'react';
import HotelDetails from './hoteldetails';
import type { HotelDetailsContainerProps } from '../interface';

const HotelDetailsContainer: React.FC<HotelDetailsContainerProps> = ({ hotels }) => {
  return (
    <section className="hotel-details-container" aria-label="Hotel details">
      <div className="hotel-details-header">
        <p className="hotel-eyebrow">Hotel details</p>
        <h2>Stay details</h2>
      </div>

      {hotels.map((hotel, index) => (
        <HotelDetails
          key={`${hotel.from_date}-${hotel.to_date}-${hotel.location}-${index}`}
          from_date={hotel.from_date}
          to_date={hotel.to_date}
          location={hotel.location}
        />
      ))}
    </section>
  );
};

export default HotelDetailsContainer;
