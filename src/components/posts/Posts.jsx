import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://cdn.britannica.com/90/152490-050-DFE5FE7A/James-Gandolfini-2011.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aperiam corrupti doloribus?",
      img: "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
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
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
