const API_KEY = "e728e85d387922f0d291c0d62860815c";
const BASE_PATH = "https://api.themoviedb.org/3";
const LANG = "en-US";
const PAGE = "2";

interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface IGetMovie {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetDetail {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  title: string;
  original_title?: string;
  release_date: string;
  runtime: number;
}

export interface ICreditData {
  id: number;
  cast: [
    {
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      profile_path: string;
      character: string;
    }
  ];
  crew: [
    {
      known_for_department: string;
      name: string;
      original_name: string;
      department: string;
      job: string;
      profile_path: string;
    }
  ];
}

//Now Playing Movie
export function getNowplayingMovie() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&${PAGE}&region=kr`
  ).then((response) => response.json());
}

//Popular Movie
export function getPopularMovie() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=${LANG}&${PAGE}`
  ).then((response) => response.json());
}

//Top Rated Movie
export function getTopRatedMovie() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=${LANG}&page=${PAGE}`
  ).then((response) => response.json());
}

//Upcoming Movie
export function getUpcomingMovie() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=${LANG}&${PAGE}`
  ).then((response) => response.json());
}

//Detail Movie Infomation
export function getDetailMovie(id: string) {
  return fetch(
    `${BASE_PATH}/movie/${id}?api_key=${API_KEY}&language=${LANG}`
  ).then((response) => response.json());
}

//Credit Actor
export function getCreditInfo(id: string) {
  return fetch(
    `${BASE_PATH}/movie/${id}/credits?api_key=${API_KEY}&language=${LANG}`
  ).then((response) => response.json());
}
