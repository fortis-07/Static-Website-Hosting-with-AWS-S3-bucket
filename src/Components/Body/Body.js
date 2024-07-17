import React from "react";
import "./Body.css";

function Body() {
  const [memeData, setMemeData] = React.useState({
    firstText: "",
    secondText: "",
    randomImage: "https://i.imgflip.com/7383sx.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((meme) => setAllMemes(meme.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMemeData((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }
  console.log(memeData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="body">
      <div className="form">
        <input
          type="text"
          name="firstText"
          placeholder="First Text"
          value={memeData.firstText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="secondText"
          placeholder="Second Text"
          value={memeData.secondText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get Meme Image</button>
      </div>

      <div className="meme">
        <h3 className="memetext--first">{memeData.firstText} </h3>
        <img src={memeData.randomImage} alt="" />
        <h3 className="memetext--second">{memeData.secondText}</h3>
      </div>
    </div>
  );
}

export default Body;
