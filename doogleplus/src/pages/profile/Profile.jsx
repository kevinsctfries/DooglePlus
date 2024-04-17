import "./profile.scss";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://cdn.britannica.com/90/152490-050-DFE5FE7A/James-Gandolfini-2011.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left"></div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceRoundedIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageRoundedIcon />
                <span>English</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right"></div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
