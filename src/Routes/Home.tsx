import { useQuery } from "@tanstack/react-query";
import {
  IGetMovie,
  getNowplayingMovie,
  getPopularMovie,
  getUpcomingMovie,
  getTopRatedMovie,
} from "../Api/MovieApi";
import {
  Loader,
  Wrapper,
  Banner,
  Title,
  Overview,
} from "../Style/StyledComponents/Home-styled";
import { makeImagePath } from "../utils";
import SliderMovie from "../Components/SliderMovie";

function Home() {
  //현재상영작
  const { data: nowPlaying, isLoading } = useQuery<IGetMovie>({
    queryKey: ["nowPlaying", "nowplayingMovie"],
    queryFn: getNowplayingMovie,
  });

  //인기상영작
  const { data: popularMovie } = useQuery<IGetMovie>({
    queryKey: ["popular", "popularMovie"],
    queryFn: getPopularMovie,
  });

  //개봉예정작
  const { data: upcomingMovie } = useQuery<IGetMovie>({
    queryKey: ["upcoming", "upcomingMovie"],
    queryFn: getUpcomingMovie,
  });

  //평점높은 영화
  const { data: topratedMovie } = useQuery<IGetMovie>({
    queryKey: ["topRated", "topRatedMovie"],
    queryFn: getTopRatedMovie,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 배너 영역 */}
          <Banner
            $bgPhoto={makeImagePath(nowPlaying?.results[0].backdrop_path || "")}
          >
            <Title>{nowPlaying?.results[0].title}</Title>
            <Overview>{nowPlaying?.results[0].overview}</Overview>
          </Banner>
          {/* 슬라이드 영역 */}
          <SliderMovie
            data={nowPlaying as IGetMovie}
            title={"Now Playing"}
            category={"now_playing"}
          />
          <SliderMovie
            data={popularMovie as IGetMovie}
            title={"Popular Movies"}
            category={"popular"}
          />
          <SliderMovie
            data={topratedMovie as IGetMovie}
            title={"Top Rated Movies"}
            category={"topRating"}
          />
          <SliderMovie
            data={upcomingMovie as IGetMovie}
            title={" Upcoming Movies"}
            category={"upcoming"}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Home;

// import React, { useState } from "react";
// import { useQuery } from "react-query";
// import { IGetMoviesResult, getMovies } from "../api";
// import styled from "styled-components";
// import { makeImagePath } from "../utils";
// import { AnimatePresence, motion, useScroll } from "framer-motion";
// import useWindowDimensions from "./useWidowDimensions";
// import { useMatch, useNavigate } from "react-router-dom";
// import { symlink } from "fs";
// import { useForm } from "react-hook-form";

// const Wrapper = styled.div`
//   background: black;
//   padding-bottom: 200px;
//   overflow-x: hidden;
// `;

// const Loader = styled.div`
//   height: 20vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Banner = styled.div<{ $bgPhoto: string }>`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 60px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
//     url(${(props) => props.$bgPhoto});
//   background-size: cover;
// `;
// const Title = styled.h2`
//   font-size: 48px;
//   margin-bottom: 20px;
// `;
// const Overview = styled.p`
//   font-size: 20px;
//   width: 50%;
// `;
// const Slider = styled.div`
//   position: relative;
//   top: -50px;
// `;
// const Row = styled(motion.div)`
//   display: grid;
//   gap: 2px;
//   grid-template-columns: repeat(6, 1fr);
//   position: absolute;
//   width: 100%;
// `;
// const Box = styled(motion.div)<{ $bgPhoto: string }>`
//   background-color: #fff;
//   background-image: url(${(props) => props.$bgPhoto});
//   background-size: cover;
//   background-position: center;
//   width: auto;
//   height: 200px;
//   font-size: 60px;
//   cursor: pointer;
//   &:first-child {
//     transform-origin: center left;
//   }
//   &:last-child {
//     transform-origin: center right;
//   }
// `;

// const Info = styled(motion.div)`
//   padding: 10px;
//   background-color: ${(props) => props.theme.black.lighter};
//   opacity: 0;
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   h4 {
//     text-align: center;
//     font-size: 14px;
//   }
// `;
// const Overlay = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   opacity: 0;
// `;
// const BigMovie = styled(motion.div)`
//   position: absolute;
//   width: 40vw;
//   height: 80vh;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
//   border-radius: 15px;
//   overflow: hidden;
//   background-color: ${(props) => props.theme.black.lighter};
// `;
// const BigCover = styled.div`
//   width: 100%;
//   height: 400px;
//   background-position: center;
//   background-size: cover;
// `;
// const BigTitle = styled.h3`
//   color: ${(props) => props.theme.white.lighter};
//   padding: 10px;
//   position: relative;
//   top: -60px;
//   font-size: 46px;
// `;
// const BigOverview = styled.p`
//   padding: 20px;
//   color: ${(props) => props.theme.white.lighter};
//   position: relative;
//   top: -60px;
//   font-size: 16px;
// `;

// //variants
// const InfoVariants = {
//   hover: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       duration: 0.1,
//       type: "tween",
//     },
//   },
// };

// const BoxVariants = {
//   normal: {
//     scale: 1,
//   },
//   hover: {
//     scale: 1.3,
//     y: -50,
//     transition: {
//       delay: 0.5,
//       duration: 0.2,
//       type: "tween",
//     },
//   },
// };

// const Home = () => {
//   const navigate = useNavigate();
//   const bigMovieMatch = useMatch("/movies/:movieId");
//   // console.log(bigMovieMatch);
//   const { scrollY } = useScroll();
//   const { isLoading, data } = useQuery<IGetMoviesResult>({
//     queryKey: [["movies", "nowPlaying"]],
//     queryFn: getMovies,
//   });
//   const width = useWindowDimensions();
//   // const rowVariants = {
//   //   hidden: {
//   //     x: window.outerWidth + 2,
//   //   },
//   //   visible: {
//   //     x: 0,
//   //   },
//   //   exit: {
//   //     x: -window.outerWidth - 2,
//   //   },
//   // };

//   const offset = 6;
//   const [index, setIndex] = useState(0);
//   const [leaving, setLeaving] = useState(false);
//   const increaseIndex = () => {
//     if (data) {
//       if (leaving) return;
//       //setLeaving(true)
//       toggleLeaving();
//       const totalMovies = data.results.length - 1; //배너 영화 제외
//       const maxIndex = Math.floor(totalMovies / offset) - 1; //페이지 0부터 시작
//       setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
//     }
//   };

//   const toggleLeaving = () => setLeaving((prev) => !prev);
//   //url
//   const onBoxClicked = (movieId: number) => {
//     navigate(`/movies/${movieId}`);
//   };
//   const onOverlayClick = () => navigate("/");
//   const clickedMovie =
//     bigMovieMatch?.params.movieId &&
//     data?.results.find(
//       (movie) => String(movie.id) === bigMovieMatch.params.movieId
//     );
//   console.log(clickedMovie);
//   return (
//     <Wrapper>
//       {isLoading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <>
//           <Banner
//             onClick={increaseIndex}
//             $bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
//           >
//             <Title>{data?.results[0].title}</Title>
//             <Overview>{data?.results[0].overview}</Overview>
//           </Banner>
//           <Slider>
//             <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
//               <Row
//                 // variants={rowVariants}
//                 initial={{ x: width + 2 }}
//                 animate={{ x: 0 }}
//                 exit={{ x: -width - 2 }}
//                 transition={{ type: "tween", duration: 1 }}
//                 key={index}
//               >
//                 {data?.results
//                   .slice(1)
//                   .slice(offset * index, offset * index + offset)
//                   .map((movie) => (
//                     <Box
//                       layoutId={movie.id + ""}
//                       variants={BoxVariants}
//                       whileHover="hover"
//                       initial="normal"
//                       transition={{ type: "tween" }}
//                       onClick={() => onBoxClicked(movie.id)}
//                       key={movie.id}
//                       $bgPhoto={makeImagePath(movie.backdrop_path)}
//                     >
//                       <Info variants={InfoVariants}>
//                         <h4>{movie.title}</h4>
//                       </Info>
//                     </Box>
//                   ))}
//               </Row>
//             </AnimatePresence>
//           </Slider>
//           <AnimatePresence>
//             {bigMovieMatch ? (
//               <>
//                 <Overlay
//                   onClick={onOverlayClick}
//                   exit={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 />
//                 <BigMovie
//                   style={{ top: scrollY.get() + 100 }}
//                   layoutId={bigMovieMatch.params.movieId}
//                 >
//                   {clickedMovie && (
//                     <>
//                       <BigCover
//                         style={{
//                           backgroundImage: `linear-gradient(to top, black , transparent), url(${makeImagePath(
//                             clickedMovie.backdrop_path,
//                             "w500"
//                           )})`,
//                         }}
//                       />
//                       <BigTitle>{clickedMovie.title}</BigTitle>
//                       <BigOverview>{clickedMovie.overview}</BigOverview>
//                     </>
//                   )}
//                 </BigMovie>
//               </>
//             ) : null}
//           </AnimatePresence>
//         </>
//       )}
//     </Wrapper>
//   );
// };

// export default Home;
