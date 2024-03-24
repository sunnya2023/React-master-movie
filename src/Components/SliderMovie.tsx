import { IGetMovie } from "../Api/MovieApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
import {
  LeftMove,
  ShowBox,
  MovieTitle,
  RightMove,
  Row,
  RowVariants,
  Slider,
  SliderTitle,
  TitleView,
  showBoxVar,
} from "../Style/StyledComponents/Slider-styled";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { makeImagePath } from "../utils";
import useWindowDimensions from "../Routes/useWidowDimensions";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import MovieDetail from "./MovieDetail";

export interface ISlider {
  data: IGetMovie | undefined;
  title: string;
  category: string;
}

function SliderMovie({ data, title, category }: ISlider) {
  const offset = 6; //슬라이드에 최대 영화개수
  const [index, setIndex] = useState(0); //슬라이드 페이지 인덱스
  const [direction, setDirection] = useState(true); //슬라이드 방향

  //슬라이드 애니메이션 에러방지를 위한 애니메이션이 끝났는지 확인
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  //슬라이드 contents 최대 6개표시
  const movieContents = data?.results.slice(
    offset * index,
    offset * index + offset
  );

  const onClickAfter = () => {
    //다음 영화 목록
    if (data) {
      if (leaving) {
        return;
      } else {
        const totalMovies = data.results.length;
        const maxIndex = Math.floor(totalMovies / offset);
        toggleLeaving();
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        setDirection(() => true);
      }
    }
  };

  const onClickBefore = () => {
    //이전 영화 목록
    if (data) {
      if (leaving) {
        return;
      } else {
        const totalMovies = data.results.length;
        const maxIndex = Math.floor(totalMovies / offset) - 1;

        toggleLeaving();
        setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
        setDirection(() => false);
      }
    }
  };

  const navigate = useNavigate();
  const movieBoxClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  const movieMatching: PathMatch<string> | null = useMatch("/movies/:movieId");

  return (
    <Slider>
      <SliderTitle>{title}</SliderTitle>
      <AnimatePresence
        custom={direction}
        initial={false}
        onExitComplete={toggleLeaving}
      >
        <Row
          key={category + index}
          custom={direction}
          variants={RowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
        >
          {movieContents &&
            movieContents.map((movie) => (
              <ShowBox
                onClick={() => movieBoxClick(movie.id)}
                key={category + movie.id}
                variants={showBoxVar}
                initial="normal"
                whileHover="hover"
                transition={{ type: "tween", duration: 0.3 }}
                $bgPhoto={makeImagePath(movie.backdrop_path)}
              >
                <MovieTitle variants={TitleView}>{movie.title}</MovieTitle>
              </ShowBox>
            ))}
          <RightMove onClick={onClickAfter}>
            {/* <FontAwesomeIcon icon={faChevronRight} size="2xl" /> */}icon
          </RightMove>
          <LeftMove onClick={onClickBefore}>
            {/* <FontAwesomeIcon icon={faChevronLeft} size="2xl" /> */}icon
          </LeftMove>
        </Row>
      </AnimatePresence>
      {movieMatching ? (
        <>
          <MovieDetail id={movieMatching.params.movieId!} category={category} />
        </>
      ) : null}
    </Slider>
  );
}

export default SliderMovie;
