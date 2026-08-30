import React from 'react';
import FlightDetails, { ManageFlightsOutput } from './flightdetails';

interface FlightDetailsContainerProps {
  flights: ManageFlightsOutput['flight_details'];
}

const FlightDetailsContainer: React.FC<FlightDetailsContainerProps> = ({ flights }) => {
  return (
    <section className="flight-details-container" aria-label="Flight details">
      <div className="flight-details-header">
        <p className="flight-eyebrow">Flight details</p>
        <h2>Upcoming trip</h2>
      </div>

      {flights.map((flight, index) => (
        <FlightDetails
          key={`${flight.date}-${flight.from_location}-${flight.to_location}-${index}`}
          from={flight.from_location}
          to={flight.to_location}
          from_location_airport_code={flight.from_location_airport_code}
          to_location_airport_code={flight.to_location_airport_code}
          travelDate={flight.date}
        />
      ))}
    </section>
  );
};

export default FlightDetailsContainer;