import React from 'react';
import type { HotelDetailsProps } from '../interface';
const HotelDetails: React.FC<HotelDetailsProps> = ({
  from_date,
  to_date,
  location
}) => {
  const formattedFromDate = from_date
    ? new Date(`${from_date}T00:00:00`).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Select a date';

  const formattedToDate = to_date
    ? new Date(`${to_date}T00:00:00`).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Select a date';

  return (
    <section className="hotel-details-panel">
      <div className="hotel-stay-rail">
        <div className="hotel-date-card">
          <span className="hotel-label">Check-in</span>
          <strong>{formattedFromDate}</strong>
        </div>

        <div className="hotel-divider" aria-hidden="true">
          <span className="hotel-arrow">🏨</span>
        </div>

        <div className="hotel-date-card">
          <span className="hotel-label">Check-out</span>
          <strong>{formattedToDate}</strong>
        </div>
      </div>

      <div className="hotel-meta">
        <div className="hotel-location-box">
          <span className="hotel-label">Location</span>
          <strong>{location}</strong>
        </div>

        <button type="button" className="hotel-book-button" onClick={() => window.open(`https://www.google.com/travel/hotels?q=Hotels%20in%20${location.split(' ').join('%20')}%20from%20${from_date}%20to%20${to_date}`, '_blank')}>
          Book hotel
        </button>
      </div>
    </section>
  );
};

export default HotelDetails;
