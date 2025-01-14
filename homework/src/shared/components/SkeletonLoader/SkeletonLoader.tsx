import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./skeletonLoader.styles";

export const SkeletonLoader = () => {
    
  const skeletonMarginStyle = {
    margin: "10px 0px",
    height: "20px",
    width: "300px",
  };

  return Array.from({ length: 2 }).map((_, index) => (
    <S.SkeletonDecadeGroup key={`sk${index}`}>
      <Skeleton width={150} height={40}/>
      <S.SkeletonMoviesRow key={index}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <Skeleton width={400} height={180} />
            <Skeleton style={skeletonMarginStyle} />
            <Skeleton style={skeletonMarginStyle} />
          </div>
        ))}
      </S.SkeletonMoviesRow>
    </S.SkeletonDecadeGroup>
  ));
};
