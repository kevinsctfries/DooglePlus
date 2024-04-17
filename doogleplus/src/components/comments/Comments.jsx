import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temp
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://cdn.britannica.com/90/152490-050-DFE5FE7A/James-Gandolfini-2011.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam corrupti doloribus?",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://cdn.britannica.com/90/152490-050-DFE5FE7A/James-Gandolfini-2011.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam corrupti doloribus?",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="leave a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">10 minutes ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
