// import React from "react";
// import { useLocation } from "react-router-dom";

// const Search = () => {
//   const location = useLocation();
//   console.log(location);
//   const keyword = new URLSearchParams(location.search).get("keyword");
//   console.log(keyword);
//   return <></>;
// };

// export default Search;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMovie } from "../api";
import styled from "styled-components";

const Wrapper = styled.div`
  background: black;
  margin-top: 200px;
  padding-bottom: 100px;
  overflow-x: hidden;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Box = styled.div`
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  useEffect(() => {
    // 검색어가 없는 경우 처리
    if (!keyword) {
      return;
    }

    // Movie 검색 API 호출
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e012dd802b89cd607582ba13e84ce8bc&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [keyword]);

  // 미리보기 클릭 시 자세한 정보 보기
  const handlePreviewClick = (movieId: number) => {
    // 클릭한 영화의 ID를 기반으로 자세한 정보를 보여주는 페이지로 이동
    navigate(`/movies/${movieId}`);
  };

  return (
    <Wrapper>
      <Items>
        {searchResults.map((movie) => (
          <Box key={movie.id} onClick={() => handlePreviewClick(movie.id)}>
            <Img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </Box>
        ))}
      </Items>
    </Wrapper>
  );
};

export default Search;
