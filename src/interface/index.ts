export interface BudgetBreakdown {
  accommodation: string;
  food: string;
  activities: string;
  transportation: string;
}

export interface BudgetOption {
  budget_type: "budget" | "mid-range" | "luxury";
  estimate: number;
  breakdown: BudgetBreakdown;
}

export interface BudgetProps {
  budget: BudgetOption[];
}

export interface ErrorProps {
  message: string;
}

export interface FlightDetailsProps {
  from: string;
  to: string;
  travelDate: string;
  from_location_airport_code: string;
  to_location_airport_code: string;
}

export interface ManageFlights {
  date: string;
  from_location: string;
  from_location_airport_code: string;
  to_location: string;
  to_location_airport_code: string;
}

export interface ManageFlightsOutput {
  flight_booking_required: boolean;
  flight_details: ManageFlights[];
}

export interface FlightDetailsContainerProps {
  flights: ManageFlightsOutput["flight_details"];
}

export interface FooterProps {
  destination?: string;
  showTip?: boolean;
  creditText?: string;
}

export interface HotelDetailsProps {
  from_date: string;
  to_date: string;
  location: string;
}

export interface ManageHotels {
  from_date: string;
  to_date: string;
  location: string;
}

export interface ManageHotelsOutput {
  hotel_booking_required: boolean;
  hotel_details: ManageHotels[];
}

export interface HotelDetailsContainerProps {
  hotels: ManageHotelsOutput["hotel_details"];
}

export interface ItineraryEntry {
  date: string;
  activities: string[];
}

export interface TravelPlannerOutput {
  title: string;
  itinerary: ItineraryEntry[];
  budget: BudgetOption[];
}

export interface TravelPlannerFinalOutput {
  travelPlannerOutput: TravelPlannerOutput;
  manageFlightsOutput: ManageFlightsOutput;
  manageHotelsOutput: ManageHotelsOutput;
}

export interface ErrorDetails {
  detail: string;
}
