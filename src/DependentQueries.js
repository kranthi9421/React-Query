import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(` http://localhost:4000/users/${email}`);
};

const fetchCourses = (channelId) => {
  return axios.get(` http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;
  const { data:course } = useQuery(
    ["courses", channelId],
    () => fetchCourses(channelId),
    {
      enabled: !!channelId,
    }
    );
    
    
    console.log(course,"Hayu")
  return (
    <div>
      <h1>de</h1>
      <h1>{user?.data.id}</h1>
      <h1>{channelId}</h1>
          <h1>{course?.data.courses[0]}</h1>
          <h1>{course?.data.courses[1]}</h1>
          <h1>{course?.data.courses[2]}</h1>
    </div>
  );
};

export default DependentQueries;
