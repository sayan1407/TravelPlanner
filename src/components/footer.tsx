import React from 'react';

interface FooterProps {
  destination?: string;
  showTip?: boolean;
  creditText?: string;
}

const Footer: React.FC<FooterProps> = ({ destination, showTip = false, creditText = '@Sayan Saha production' }) => {
  return (
    <div className="footer-outer">
      <footer className="footer-strip">
        {showTip && (
          <div>
            <strong>Tip:</strong> Use this itinerary as a travel-ready outline and
            personalize hotels, transport, and meal stops for the perfect {destination || 'trip'}.
          </div>
        )}
        <div className="footer-credit">{creditText}</div>
      </footer>
    </div>
  );
};

export default Footer;
