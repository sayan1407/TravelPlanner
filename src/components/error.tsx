import React from 'react';

interface ErrorProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  return (
    <section className="error-panel">
      <div className="error-icon">⚠️</div>
      <div className="error-copy-block">
        <p className="error-eyebrow">Request failed</p>
        <h2 className="error-title">Unable to load itinerary</h2>
        <p className="error-copy">
          {message || 'Please check your connection and try again.'}
        </p>
      </div>
    </section>
  );
};

export default ErrorComponent;
