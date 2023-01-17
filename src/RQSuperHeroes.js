import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "./hooks/useSuperHeroesData";

const onSuccess = (data) => {
  console.log("Welcome Home", data);
};

const onError = () => {
  console.log("Failure Result");
};

const RQsuperHeroes = () => {
  const { isLoading, isFetching, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading || isFetching) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data.map((hero) => {
        return (
        
            <div key={hero.id}>
              <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>
          
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName} </div>;
      })} */}
    </div>
  );
};

export default RQsuperHeroes;
