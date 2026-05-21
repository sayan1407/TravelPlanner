import React from 'react';
import './budget.css';

export interface BudgetBreakdown {
  accommodation: string;
  food: string;
  activities: string;
  transportation: string;
}

export interface BudgetOption {
  budget_type: 'budget' | 'mid-range' | 'luxury';
  estimate: number;
  breakdown: BudgetBreakdown;
}

export interface BudgetProps {
  budget: BudgetOption[];
}

const Budget: React.FC<BudgetProps> = ({ budget }) => {
  const getBudgetIcon = (budgetType: string): string => {
    switch (budgetType) {
      case 'budget':
        return '💰';
      case 'mid-range':
        return '✈️';
      case 'luxury':
        return '👑';
      default:
        return '🌍';
    }
  };

  const getAccentColor = (budgetType: string): string => {
    switch (budgetType) {
      case 'budget':
        return '#10b981';
      case 'mid-range':
        return '#f59e0b';
      case 'luxury':
        return '#8b5cf6';
      default:
        return '#0ea5e9';
    }
  };

//   const formatCurrency = (value: string | number): string => {
//     const num = typeof value === 'string' ? parseInt(value) : value;
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(num);
//   };

  return (
    <section className="budget-section">
      <div className="budget-header">
        <h2 className="budget-title">Budget Breakdown</h2>
        <p className="budget-subtitle">Explore different budget options for your trip</p>
      </div>

      <div className="budget-grid">
        {budget.map((option) => (
          <div
            key={option.budget_type}
            className="budget-card"
            style={{ '--accent-color': getAccentColor(option.budget_type) } as React.CSSProperties}
          >
            <div className="budget-card-header">
              <div className="budget-icon-wrapper">
                <span className="budget-icon">{getBudgetIcon(option.budget_type)}</span>
              </div>
              <h3 className="budget-type-title">
                {option.budget_type.charAt(0).toUpperCase() + option.budget_type.slice(1)}
              </h3>
            </div>

            <div className="budget-estimate">
              <span className="estimate-label">Total Estimate</span>
              <span className="estimate-value">{(option.estimate)}</span>
            </div>

            <div className="budget-divider"></div>

            <div className="budget-breakdown">
              <h4 className="breakdown-title">Cost Breakdown</h4>
              <div className="breakdown-items">
                <div className="breakdown-item">
                  <div className="breakdown-item-header">
                    <span className="item-label">🏨 Accommodation</span>
                    <span className="item-value">{(option.breakdown.accommodation)}</span>
                  </div>
                  <div className="breakdown-bar">
                    <div
                      className="breakdown-bar-fill"
                      style={{
                        width: `${(parseInt(option.breakdown.accommodation) / option.estimate) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="breakdown-item">
                  <div className="breakdown-item-header">
                    <span className="item-label">🍽️ Food</span>
                    <span className="item-value">{(option.breakdown.food)}</span>
                  </div>
                  <div className="breakdown-bar">
                    <div
                      className="breakdown-bar-fill"
                      style={{
                        width: `${(parseInt(option.breakdown.food) / option.estimate) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="breakdown-item">
                  <div className="breakdown-item-header">
                    <span className="item-label">🎭 Activities</span>
                    <span className="item-value">{(option.breakdown.activities)}</span>
                  </div>
                  <div className="breakdown-bar">
                    <div
                      className="breakdown-bar-fill"
                      style={{
                        width: `${(parseInt(option.breakdown.activities) / option.estimate) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="breakdown-item">
                  <div className="breakdown-item-header">
                    <span className="item-label">🚗 Transportation</span>
                    <span className="item-value">{(option.breakdown.transportation)}</span>
                  </div>
                  <div className="breakdown-bar">
                    <div
                      className="breakdown-bar-fill"
                      style={{
                        width: `${(parseInt(option.breakdown.transportation) / option.estimate) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Budget;
