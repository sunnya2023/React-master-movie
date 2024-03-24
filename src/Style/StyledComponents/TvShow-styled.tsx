import { motion } from "framer-motion";
import styled from "styled-components";

export const TvSeasonsBox = styled.div`
  width: 100%;
  height: 30vh;
  border-bottom-left-radius: 1vmin;
  border-bottom-right-radius: 1vmin;
  position: absolute;
  bottom: 2vmin;
  overflow: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

export const TvSeasons = styled.div`
  width: 15vmin;
  height: 21vmin;
  background-color: white;
  border-radius: 1vmin;
  margin-bottom: 3vmin;
`;

export const TvSeasonsPoster = styled.div<{ $bgphoto: string }>`
  width: 100%;
  height: 22vmin;
  border-top-right-radius: 1vmin;
  border-top-left-radius: 1vmin;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.$bgphoto});
  border-radius: 1vmin;
`;
