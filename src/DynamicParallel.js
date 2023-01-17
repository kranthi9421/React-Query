import { useQueries } from "react-query";
import axios from "axios";

const fetchHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallel = ({ heroIds }) => {
  const queryRes = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchHero(id),
      };
    })
  );
  console.log(queryRes);
  return (
    <div>
      <h1>ooooo</h1>
    </div>
  );
};

export default DynamicParallel;
