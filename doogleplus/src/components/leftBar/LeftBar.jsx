import "./leftBar.scss";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <PeopleRoundedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsRoundedIcon />
            <span>Groups</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
