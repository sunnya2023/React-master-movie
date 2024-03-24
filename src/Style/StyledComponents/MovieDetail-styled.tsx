import styled from "styled-components";
import { motion } from "framer-motion";

export const DeatilMotion = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

export const OverlayMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

export const Detail = styled(motion.div)`
  position: fixed;
  width: 30vw;
  height: 90vh;
  top: 5vmin;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 1vmin;
  background-color: ${(props) => props.theme.black.darker};
  z-index: 2;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1;
`;

//DetailMovie Infomation
export const BackGorundImage = styled.div<{ $bgphoto: string }>`
  width: 100%;
  height: 30vh;
  border-top-right-radius: 1vmin;
  border-top-left-radius: 1vmin;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.$bgphoto});
  position: relative;
`;

export const PosterImage = styled.div<{ $bgphoto: string }>`
  width: 16vmin;
  height: 24vmin;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.$bgphoto});
  position: absolute;
  right: 3vmin;
  bottom: 3vmin;
  border-radius: 1vmin;
`;

export const MovieDetailTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DetailTitle = styled.span`
  font-size: 3vmin;
  margin-left: 3vmin;
  margin-top: 0.5vmin;
  display: block;
  overflow: hidden;
`;

export const OriginalTitle = styled.span`
  font-size: 1.5vmin;
  display: block;
  margin-left: 3vmin;
`;

export const DetailOverview = styled.p`
  font-size: 1.2vmin;
  margin: 1vmin 3vmin;
  height: 10vmin;
  overflow: scroll;
`;

export const GenreBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2vmin;
`;

export const GenreList = styled.span`
  font-size: 1.2vmin;
  font-weight: 600;
  color: ${(props) => props.theme.black.veryDark};
  background-color: ${(props) => props.theme.white.lighter};
  border-radius: 1vmin;
  padding: 0.2vmin 0.5vmin;
  margin-right: 4vmin;
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 2vmin 0;
`;

export const Release = styled.div`
  font-size: 1.8vmin;
  margin-right: 4vmin;
`;

export const Runtime = styled.div`
  font-size: 1.8vmin;
  margin-right: 4vmin;
`;

//Director, Actor Information
export const ActorBox = styled.div`
  width: 100%;
  height: 18vmin;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  margin-top: 13.5vmin;
`;

export const ActorList = styled(motion.div)`
  height: 18vmin;
  width: 10vmin;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1vmin;
`;

export const ActorImage = styled.div<{ $bgphoto: string }>`
  width: 100%;
  height: 12vmin;
  border-top-right-radius: 1vmin;
  border-top-left-radius: 1vmin;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.$bgphoto});
`;

export const ActorName = styled.div`
  height: 1.5vmin;
  font-size: 1.2vmin;
  margin-top: 1vmin;
  overflow: hidden;
  padding: 0 0.8vmin;
`;

export const ActorCharacter = styled.div`
  height: 1.5vmin;
  font-size: 1.2vmin;
  margin-top: 1vmin;
  overflow: hidden;
  padding: 0 0.8vmin;
`;

export const DirectorList = styled(motion.div)`
  height: 18vmin;
  width: 10vmin;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1vmin;
`;

export const DirectorImage = styled.div<{ $bgphoto: string }>`
  width: 100%;
  height: 12vmin;
  border-top-right-radius: 1vmin;
  border-top-left-radius: 1vmin;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.$bgphoto});
`;

export const DirectorName = styled.div`
  height: 1.5vmin;
  font-size: 1.2vmin;
  margin-top: 1vmin;
  overflow: hidden;
  padding: 0 0.8vmin;
`;

export const DirectorDepartment = styled.div`
  height: 1.5vmin;
  font-size: 1.2vmin;
  margin-top: 1vmin;
  overflow: hidden;
  padding: 0 0.8vmin;
`;
