import { useQuery } from "@tanstack/react-query";
import { ITvDetail, TvDetailInfo } from "../Api/TvApi";
import {
  BackGorundImage,
  DeatilMotion,
  Detail,
  DetailOverview,
  DetailTitle,
  GenreBox,
  GenreList,
  MovieDetailTitle,
  OriginalTitle,
  Overlay,
  OverlayMotion,
  PosterImage,
} from "../Style/StyledComponents/MovieDetail-styled";
import { useNavigate } from "react-router-dom";
import { makeImagePath } from "../utils";
import { useEffect } from "react";
import {
  TvSeasons,
  TvSeasonsBox,
  TvSeasonsPoster,
} from "../Style/StyledComponents/TvShow-styled";

interface ITvId {
  id: string;
  category: string;
}

export default function TvDetail({ id, category }: ITvId) {
  const navigate = useNavigate();
  const onOverlay = () => navigate(-1);

  const { data: TvSerise, refetch: TvSeriseRefetch } = useQuery<ITvDetail>({
    queryKey: ["tv", id],
    queryFn: () => TvDetailInfo(id),
  });

  console.log(TvSerise);

  useEffect(() => {
    TvSeriseRefetch();
  }, [id, TvSeriseRefetch]);

  return (
    <>
      <Overlay
        onClick={onOverlay}
        variants={OverlayMotion}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <Detail
        variants={DeatilMotion}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {TvSerise && (
          <>
            <BackGorundImage
              onClick={onOverlay}
              $bgphoto={makeImagePath(TvSerise.backdrop_path + "", "w500")}
            >
              <PosterImage
                $bgphoto={makeImagePath(TvSerise.poster_path + "", "w500")}
              />
            </BackGorundImage>
            <MovieDetailTitle>
              <DetailTitle>{TvSerise.name}</DetailTitle>
              <OriginalTitle>{TvSerise.original_name}</OriginalTitle>
            </MovieDetailTitle>
            <DetailOverview>{TvSerise.overview}</DetailOverview>
            <GenreBox>
              {TvSerise.genres.map((g: any) => (
                <GenreList key={g.id}>{g.name}</GenreList>
              ))}
            </GenreBox>
            <TvSeasonsBox>
              {TvSerise.seasons.map((info: any) => (
                <TvSeasons key={info.id}>
                  <TvSeasonsPoster
                    $bgphoto={
                      info.poster_path
                        ? makeImagePath(info.poster_path + "", "w500")
                        : ""
                    }
                  ></TvSeasonsPoster>
                </TvSeasons>
              ))}
            </TvSeasonsBox>
          </>
        )}
      </Detail>
    </>
  );
}
