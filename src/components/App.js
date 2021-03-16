// import video from "../data/video.js";
import video from "../data/video.js";
import Details from "./Details.js"

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      < Details comments={video.comments}/>

    </div>
  );
}

export default App;
