import { AnimatePresence } from "framer-motion";
import { IAiringToday } from "../Api/TvApi";
import {
  LeftMove,
  MovieTitle,
  RightMove,
  Row,
  RowVariants,
  ShowBox,
  Slider,
  SliderTitle,
  TitleView,
  showBoxVar,
} from "../Style/StyledComponents/Slider-styled";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { makeImagePath } from "../utils";
import TvDetail from "./TvDetail";

interface IGetTvShow {
  data: IAiringToday | undefined;
  title: string;
  category: string;
}

export default function SliderTv({ data, title, category }: IGetTvShow) {
  const offset = 6;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const tvContents = data?.results.slice(
    offset * index,
    offset * index + offset
  );

  const onClickAfter = () => {
    //다음 영화 목록
    if (data) {
      if (leaving) {
        return;
      } else {
        const totalTvSerise = data.results.length;
        const maxIndex = Math.floor(totalTvSerise / offset);
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
        const totalTvSerise = data.results.length;
        const maxIndex = Math.floor(totalTvSerise / offset) - 1;

        toggleLeaving();
        setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
        setDirection(() => false);
      }
    }
  };

  const navigate = useNavigate();
  const tvBoxClick = (tvId: number) => {
    navigate(`/tv/${tvId}`);
  };
  const tvMatching: PathMatch<string> | null = useMatch("/tv/:id");
  console.log(tvMatching);

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
          {tvContents &&
            tvContents.map((tv) => (
              <ShowBox
                onClick={() => tvBoxClick(tv.id)}
                key={category + tv.id}
                variants={showBoxVar}
                initial="normal"
                whileHover="hover"
                transition={{ type: "tween", duration: 0.3 }}
                $bgPhoto={makeImagePath(
                  tv.backdrop_path
                    ? tv.backdrop_path
                    : tv.poster_path
                    ? tv.poster_path
                    : ""
                )}
              >
                <MovieTitle variants={TitleView}>{tv.name}</MovieTitle>
              </ShowBox>
            ))}
          <RightMove onClick={onClickAfter}>
            {/* <FontAwesomeIcon icon={faChevronRight} size="2xl" /> */}icon
          </RightMove>
          <LeftMove onClick={onClickBefore}>
            icon
            {/* <FontAwesomeIcon icon={faChevronLeft} " /> */}
          </LeftMove>
        </Row>
      </AnimatePresence>
      {tvMatching ? (
        <>
          <TvDetail id={tvMatching.params.id!} category={category} />
        </>
      ) : null}
    </Slider>
  );
}
