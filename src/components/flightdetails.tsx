import React from 'react';
import './flightdetails.css';

interface FlightDetailsProps {
  from: string;
  to: string;
  date: string;
  onBook?: () => void;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ from, to, date, onBook }) => {
  const formattedDate = date ? new Date(date).toLocaleDateString() : 'TBD';

  return (
    <section className="flight-details-card">
      <div className="flight-row">
        <div className="route">
          <div className="airport from">
            <div className="airport-code">From</div>
            <div className="airport-name">{from || '—'}</div>
          </div>

          <div className="flight-arrow" aria-hidden>
            ✈️
          </div>

          <div className="airport to">
            <div className="airport-code">To</div>
            <div className="airport-name">{to || '—'}</div>
          </div>
        </div>

        <div className="flight-meta">
          <div className="departure">
            <span className="departure-label">Departure</span>
            <span className="date-pill">{formattedDate}</span>
          </div>

          <button
            type="button"
            className="submit-button book-button"
            onClick={onBook}
          >
            Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
