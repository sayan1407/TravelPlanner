import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const itineraryApi = createApi({
  reducerPath: "apiItinerary",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/travel/",

  }),
  tagTypes: ["Itineraries"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    GetItineraries: builder.mutation({
      query: ({ location, start_date, destination, duration }) => ({
        url: `itinerary`,
        method: "POST",
        body: {
          location: location,
          start_date: start_date,
          destination: destination,
          duration: duration
        }
      })
      
    }),



  }),
});
export const { useGetItinerariesMutation
} = itineraryApi;