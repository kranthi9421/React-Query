import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useSuperHeroesData,
  useAddSuperHeroData,
} from "./hooks/useSuperHeroesData";

const onSuccess = () => {
  console.log("Welcome Home");
};

const onError = () => {
  console.log("Failure Result");
};

const RQsuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, isFetching, data, isError, error, refetch } =
    useSuperHeroesData(onSuccess, onError);

  const { mutate } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = {
      name,
      alterEgo,
    };
    mutate(hero)
  };

  if (isLoading || isFetching) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
        <button onClick={refetch}>Fetch Hero</button>
      </div>
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
