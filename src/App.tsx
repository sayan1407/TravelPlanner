import React from 'react';
import { useGetItinerariesMutation } from './Api/itineraryApi';
import Spinner from './components/spinner';
import ErrorComponent from './components/error';
import { useEffect } from 'react';
import Budget, { BudgetOption, BudgetProps } from './components/budget';
import { useState } from 'react';

export interface ItineraryEntry {
  date: string;
  activities: string[];
}
export interface TravelPlannerOutput {
  title: string;
  itinerary: ItineraryEntry[];
  budget: BudgetOption[];
}

const isValidNumber = (value: string) => {

  return value.trim() !== '' && !isNaN(Number(value)) && Number(value) > 0 && Number(value) <= 30;
}

const isValidDate = (value: string) => {
  const date = new Date(value);
  return !isNaN(date.getTime()) && date > new Date();
}


function App() {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [fromToShown, setFromToShown] = useState('');
  const [destinationToShown, setDestinationToShown] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [itinerary, setItinerary] = useState<TravelPlannerOutput | null>(null);
  const [travelPlannerApi, { isLoading, error }] = useGetItinerariesMutation();
  const [disabled, setDisabled] = useState(true);
  const [durationError, setDurationError] = useState('');
  const [dateError, setDateError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ from, destination, duration, startDate });
    const response = await travelPlannerApi({ location: from, destination, duration, start_date: startDate });
    console.log(response);
    setItinerary(response.data);
    setFromToShown(from);
    setDestinationToShown(destination);
  };
  useEffect(() => {
    if (from && destination && duration && startDate && isValidNumber(duration) && isValidDate(startDate)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [from, destination, duration, startDate]);

  useEffect(() => {
    if (duration && !isValidNumber(duration)) {
      setDurationError('Duration must be a number between 1 and 30');
    } else {
      setDurationError('');
    }
  }, [duration]);

  useEffect(() => {
    if (startDate && !isValidDate(startDate)) {
      setDateError('Start date must be a valid future date');
    } else {
      setDateError('');
    }
  }, [startDate]);

  const formatErrorMessage = (error: unknown) => {
    if (!error) return '';

    if (typeof error === 'string') {
      return error;
    }

    if (typeof error === 'object' && error !== null) {
      const err = error as Record<string, unknown>;
      if (typeof err.error === 'string') return err.error;
      if (typeof err.data === 'string') return err.data;
      if (err.status) return `Server responded with ${String(err.status)}.`;
    }

    return 'Unable to fetch itinerary. Please try again.';
  };

  const errorMessage = formatErrorMessage(error);

  return (
    <div className="page-shell">
      <section className="travel-form-section">
        <label className="form-label">Tell us your travel destination</label>
        <form onSubmit={handleSubmit} className="travel-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button" disabled={disabled}>
            Submit
          </button>
        </form>
        <div className="form-values">
          {durationError && <span className="value-item"><strong>{durationError}</strong></span>}
          {dateError && <span className="value-item"><strong>{dateError}</strong></span>}
        </div>
      </section>

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent message={errorMessage} />
      ) : (
        <div>

        {itinerary && (
        <header className="hero-panel">
          <div>
            <p className="eyebrow">Travel Itinerary Planner</p>
            <h1>{itinerary.title}</h1>
            <p className="hero-copy">
              Discover a polished, day-by-day journey from {fromToShown} to{" "}
              {destinationToShown} with sightseeing, trains, and culture built into a
              clear travel timeline.
            </p>
          </div>
        </header>
       
      )} 
      <main className="timeline-grid">
        {itinerary && itinerary.itinerary.map((entry, index) => (
          <article key={entry.date} className="timeline-card">
            <div className="date-pill">{entry.date}</div>
            <h2>Day {index + 1}</h2>
            <ul>
              {entry.activities.map((activity, activityIndex) => (
                <li key={activityIndex}>{activity}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
      <div>
        {itinerary?.budget && <Budget budget={itinerary?.budget} />}
      </div>
      {itinerary && (<footer className="footer-strip">
        <div>
          <strong>Tip:</strong> Use this itinerary as a travel-ready outline and
          personalize hotels, transport, and meal stops for the perfect {destination} trip.
        </div>
      </footer> )}
      
      </div>
      )}
    </div>
  );
}

export default App;
