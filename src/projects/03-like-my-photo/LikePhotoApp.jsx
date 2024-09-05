import React, { useState } from "react";
import Title from "../components/Title";

import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineHeart,
} from "react-icons/ai";

import DogImage from "./img/dog-image.jpeg"

export default function LikePhotoApp() {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => {
        if(!like){
            setLike(true);
            setCount(count + 1)
        }else{
            setLike(false);
            setCount(count - 1)
        }
    }
    
  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
        onDoubleClick={toggleLike}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>doggy dog</small>
        </div>
        <img src={DogImage} alt="img" style={{ height: "fit-content" }} />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment /> {" "}
          {like ? <AiFillHeart className="text-danger" onClick={toggleLike} /> : <AiOutlineHeart onClick={toggleLike} />}
        </div>
      </div>
    </div>
  );
}
