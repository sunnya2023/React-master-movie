// import styled from "styled-components";
// import { useQuery } from "react-query";
// import { IGetMoviesResult, getMovies } from "../api";
// import { makeImagePath } from "../utils";
// import { AnimatePresence, motion, useScroll } from "framer-motion";
// import useWindowDimensions from "./useWidowDimensions";
// import { useMatch, useNavigate } from "react-router-dom";
// import { symlink } from "fs";
// import { useForm } from "react-hook-form";

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

// function Slide() {
//   return (
//     <>
//       <Slider>
//         <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
//           <Row
//             // variants={rowVariants}
//             initial={{ x: width + 2 }}
//             animate={{ x: 0 }}
//             exit={{ x: -width - 2 }}
//             transition={{ type: "tween", duration: 1 }}
//             key={index}
//           >
//             {data?.results
//               .slice(1)
//               .slice(offset * index, offset * index + offset)
//               .map((movie) => (
//                 <Box
//                   layoutId={movie.id + ""}
//                   variants={BoxVariants}
//                   whileHover="hover"
//                   initial="normal"
//                   transition={{ type: "tween" }}
//                   onClick={() => onBoxClicked(movie.id)}
//                   key={movie.id}
//                   $bgPhoto={makeImagePath(movie.backdrop_path)}
//                 >
//                   <Info variants={InfoVariants}>
//                     <h4>{movie.title}</h4>
//                   </Info>
//                 </Box>
//               ))}
//           </Row>
//         </AnimatePresence>
//       </Slider>
//       <AnimatePresence>
//         {bigMovieMatch ? (
//           <>
//             <Overlay
//               onClick={onOverlayClick}
//               exit={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             />
//             <BigMovie
//               style={{ top: scrollY.get() + 100 }}
//               layoutId={bigMovieMatch.params.movieId}
//             >
//               {clickedMovie && (
//                 <>
//                   <BigCover
//                     style={{
//                       backgroundImage: `linear-gradient(to top, black , transparent), url(${makeImagePath(
//                         clickedMovie.backdrop_path,
//                         "w500"
//                       )})`,
//                     }}
//                   />
//                   <BigTitle>{clickedMovie.title}</BigTitle>
//                   <BigOverview>{clickedMovie.overview}</BigOverview>
//                 </>
//               )}
//             </BigMovie>
//           </>
//         ) : null}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Slide;

import React from "react";

function Slide() {
  return <div>Slide</div>;
}

export default Slide;
