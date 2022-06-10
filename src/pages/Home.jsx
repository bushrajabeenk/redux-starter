import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeedAPI } from "../store/feed/feed.actions";

const Home = () => {
  // const [feed, setFeed] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/feeds").then((r) => {
  //     setFeed(r.data);
  //   });
  // }, []);

  const dispatch = useDispatch();
  const { data, getFeed } = useSelector((state) => state.feed);

  useEffect(() => {
    // if data is already present why to call the data again and again
    if (data.length === 0) {
      dispatch(getFeedAPI());
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeed.loading && <div>Loading...</div>}
      {getFeed.erro && <div>Error...</div>}
      {!getFeed.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "200px",
            }}
          >
            <div>{feed.title}</div>
            <div>{feed.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
