import React from 'react';

export interface FlightDetailsProps {
  from: string;
  to: string;
  travelDate: string;
  from_location_airport_code: string;
  to_location_airport_code: string;
}

interface ManageFlights{
    date: string
    from_location : string
    from_location_airport_code : string
    to_location : string
    to_location_airport_code : string
}

export interface ManageFlightsOutput{
    flight_booking_required: boolean
    flight_details: ManageFlights[]
}
const FlightDetails: React.FC<FlightDetailsProps> = ({
  from,
  to,
  travelDate,
  from_location_airport_code,
  to_location_airport_code,
}) => {
  const formattedDate = travelDate
    ? new Date(`${travelDate}T00:00:00`).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Select a date';

  return (
    <section className="flight-details-panel">
      <div className="flight-route">
        <div className="flight-stop">
          <span className="flight-label">From</span>
          <strong>{from || 'Location'}</strong>
        </div>

        <div className="flight-divider" aria-hidden="true">
          <span className="flight-arrow">✈</span>
        </div>

        <div className="flight-stop">
          <span className="flight-label">To</span>
          <strong>{to || 'Destination'}</strong>
        </div>
      </div>

      <div className="flight-meta">
        <div className="flight-date-box">
          <span className="flight-label">Travel date</span>
          <strong>{formattedDate}</strong>
        </div>

        <button type="button" className="flight-book-button" onClick={() => window.open(`https://www.google.com/travel/flights?q=One%20way%20flights%20from%20${from_location_airport_code}%20to%20${to_location_airport_code}%20on%20${travelDate}`, '_blank')}>
          Book flight
        </button>
      </div>
    </section>
  );
};

export default FlightDetails;
