import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const itineraryApi = createApi({
  reducerPath: "apiItinerary",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://travelagentapi-dtagfjaxbvhybmeg.canadacentral-01.azurewebsites.net/travel/",

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