import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
    return axios.get("  http://localhost:4000/superheroes");
}

const fetchFriends = () => {
    return axios.get("  http://localhost:4000/friends");
}
const ParallelQueries = () => {
   const {data:heroData}  = useQuery('super-heroes', fetchSuperHeros)
   const {data:friendData}  = useQuery('friends', fetchFriends)
  return (
    <div>
          <h1>kkkk</h1>
          {friendData?.data.map(name => <h1 key={name.id}>{name.name}</h1>)}
    </div>
  );
};

export default ParallelQueries;
