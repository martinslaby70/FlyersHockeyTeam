import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  extractFlyersTrainings,
  Training,
} from "./utils/extractFlyersTrainings";
import {
  extractFlyersPosition,
  FlyersPosition,
} from "./utils/extractFlyersCurrentPlace";
import {
  extractFlyersMatches,
  MatchDetail,
} from "./utils/extractFlyersMatches";

export const stadiumApi = createApi({
  reducerPath: "flyersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://flyers-hockey-team-be.vercel.app",
    responseHandler: async (res) => {
      const text = await res.text();
      return text;
    },
  }),
  endpoints: (builder) => ({
    getTrainings: builder.query<Training[] | string, { day: string }>({
      query: ({ day }) => `/trainings?day=${day}`,
      transformResponse: extractFlyersTrainings,
    }),
    getCurrentPlace: builder.query<FlyersPosition | null, { year: string }>({
      query: ({ year }) => `/currentPlace?year=${year}`,
      transformResponse: extractFlyersPosition,
    }),
    getMatches: builder.query<MatchDetail[], { year: string }>({
      query: ({ year }) => `/matches?year=${year}`,
      transformResponse: extractFlyersMatches,
    }),
  }),
});

export const {
  useGetTrainingsQuery,
  useGetCurrentPlaceQuery,
  useGetMatchesQuery,
} = stadiumApi;
