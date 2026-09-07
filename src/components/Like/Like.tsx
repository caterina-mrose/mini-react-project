import { useState } from "react";
import { FcLike } from "react-icons/fc";
import styles from "./Like.module.css";

function Like() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <FcLike
        onClick={() => setLiked(!liked)}
        className={liked ? styles.likeButtonActive : styles.likeButtonInactive}
      ></FcLike>
    </>
  );
}

export default Like;
