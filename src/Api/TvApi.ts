const API_KEY = "e728e85d387922f0d291c0d62860815c";
const BASE_PATH = "https://api.themoviedb.org/3";
const LANG = "ko-KR";
const PAGE = "2";

export interface IAiringToday {
  results: [
    {
      backdrop_path: string;
      first_air_date: string;
      id: number;
      name: string;
      original_language: string;
      original_name: string;
      overview: string;
      poster_path: string;
    }
  ];
}

export interface ITvDetail {
  name: string;
  backdrop_path: string;
  episode_run_time: [number];
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  original_name: string;
  overview: string;
  poster_path: string;
  seasons: [
    {
      air_date: string;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
    }
  ];
}

export function airingToday() {
  return fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}&language=${LANG}&page=${PAGE}`
  ).then((response) => response.json());
}

export function onTheAir() {
  return fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=${LANG}&page=${PAGE}`
  ).then((response) => response.json());
}

export function popularTv() {
  return fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=${LANG}&page=${PAGE}`
  ).then((response) => response.json());
}

export function topRatedTv() {
  return fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=${LANG}&page=${PAGE}`
  ).then((response) => response.json());
}

export function TvDetailInfo(id: string) {
  return fetch(
    `${BASE_PATH}/tv/${id}?api_key=${API_KEY}&language=${LANG}`
  ).then((response) => response.json());
}
