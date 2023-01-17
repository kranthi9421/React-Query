import React from "react";
import useSueprHeroData from "./hooks/useSueprHeroData";
import { useParams } from "react-router-dom";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSueprHeroData(heroId);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQSuperHero;
