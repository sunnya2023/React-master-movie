import { useQuery } from "@tanstack/react-query";
import {
  IAiringToday,
  airingToday,
  onTheAir,
  popularTv,
  topRatedTv,
} from "../Api/TvApi";
import {
  Banner,
  Loader,
  Overview,
  Title,
  Wrapper,
} from "../Style/StyledComponents/Home-styled";
import { makeImagePath } from "../utils";
import SliderTv from "../Components/SliderTv";

function Tv() {
  //onTheAir,popularTv,topRatedTv
  const { data: todayTv, isLoading } = useQuery<IAiringToday>({
    queryKey: ["airingToday", "airingTodayTv"],
    queryFn: airingToday,
  });

  const { data: onTheAirTvSerise } = useQuery<IAiringToday>({
    queryKey: ["onTheAir", "onTheAirTv"],
    queryFn: onTheAir,
  });

  const { data: popularTvSerise } = useQuery<IAiringToday>({
    queryKey: ["popular", "popularTv"],
    queryFn: popularTv,
  });

  const { data: topRatedTvSerise } = useQuery<IAiringToday>({
    queryKey: ["topRated", "topRatedTv"],
    queryFn: topRatedTv,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 배너 영역 */}
          <Banner
            $bgPhoto={makeImagePath(
              todayTv?.results[0].backdrop_path
                ? todayTv?.results[0].backdrop_path
                : todayTv?.results[0].poster_path || ""
            )}
          >
            <Title>{todayTv?.results[0].name}</Title>
            <Overview>{todayTv?.results[0].overview}</Overview>
          </Banner>
          {/* 슬라이더 영역 */}
          <SliderTv
            data={todayTv as IAiringToday}
            title={"Airing Today"}
            category={"today"}
          />
          <SliderTv
            data={onTheAirTvSerise as IAiringToday}
            title={"Latest Shows"}
            category={"today"}
          />
          <SliderTv
            data={popularTvSerise as IAiringToday}
            title={"Popular TV"}
            category={"today"}
          />
          <SliderTv
            data={topRatedTvSerise as IAiringToday}
            title={"High Rated"}
            category={"today"}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Tv;
