import { useNavigate } from "react-router-dom";
import {
  BackGorundImage,
  DeatilMotion,
  Detail,
  DetailOverview,
  DetailTitle,
  OriginalTitle,
  Overlay,
  OverlayMotion,
  PosterImage,
  MovieDetailTitle,
  GenreBox,
  GenreList,
  ActorBox,
  ActorList,
  ActorImage,
  ActorName,
  ActorCharacter,
  DirectorList,
  DirectorImage,
  DirectorName,
  DirectorDepartment,
  InfoBox,
  Release,
  Runtime,
} from "../Style/StyledComponents/MovieDetail-styled";
import { useQuery } from "@tanstack/react-query";
import {
  ICreditData,
  IGetDetail,
  getCreditInfo,
  getDetailMovie,
} from "../Api/MovieApi";
import { makeImagePath } from "../utils";
import { useEffect } from "react";

interface IMovieId {
  id: string;
  category: string;
}

export default function MovieDetail({ id, category }: IMovieId) {
  //Overlay 클릭시 home으로 이동, 뒤로가기
  const navigate = useNavigate();
  const onOverlay = () => navigate(-1);

  const { data: detailData, refetch: detailRefetch } = useQuery<IGetDetail>({
    queryKey: ["movie", id],
    queryFn: () => getDetailMovie(id),
  });

  const { data: creditData, refetch: creditRefetch } = useQuery<ICreditData>({
    queryKey: ["credit", id],
    queryFn: () => getCreditInfo(id),
  });

  useEffect(() => {
    detailRefetch();
    creditRefetch();
  }, [id, detailRefetch, creditRefetch]);

  const actor = creditData?.cast.slice(0, 4);
  const director = creditData?.crew.find(
    (person: any) => person.known_for_department === "Directing"
  );

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
        {detailData && creditData && (
          <>
            <BackGorundImage
              onClick={onOverlay}
              $bgphoto={makeImagePath(detailData.backdrop_path + "", "w500")}
            >
              <PosterImage
                $bgphoto={makeImagePath(detailData.poster_path + "", "w500")}
              />
            </BackGorundImage>
            <MovieDetailTitle>
              <DetailTitle>{detailData.title}</DetailTitle>
              <OriginalTitle>{detailData.original_title}</OriginalTitle>
            </MovieDetailTitle>
            <DetailOverview>{detailData.overview}</DetailOverview>
            <GenreBox>
              {detailData.genres.map((g: any) => (
                <GenreList key={g.id}>{g.name}</GenreList>
              ))}
            </GenreBox>
            <InfoBox>
              <Release>개봉일 {detailData.release_date}</Release>
              <Runtime>{detailData.runtime}분</Runtime>
            </InfoBox>
            <ActorBox>
              <DirectorList>
                <DirectorImage
                  $bgphoto={makeImagePath(director?.profile_path + "", "w500")}
                />
                <DirectorDepartment>
                  {director?.known_for_department ? "감독" : null}
                </DirectorDepartment>
                <DirectorName>{director?.name}</DirectorName>
              </DirectorList>
              {actor?.map((cast: any) => (
                <ActorList key={cast.id}>
                  <ActorImage
                    $bgphoto={makeImagePath(cast.profile_path + "", "w500")}
                  />
                  <ActorCharacter>{cast.character}역</ActorCharacter>
                  <ActorName>{cast.name}</ActorName>
                </ActorList>
              ))}
            </ActorBox>
          </>
        )}
      </Detail>
    </>
  );
}
