import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PostItem = ({ post }) => {
  return (
    <div
      className="postItem"
      style={{ background: "#f4f4f4", color: "black", cursor: "pointer" }}
    >
      <span>{post.title}</span>
      <button>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default PostItem;
