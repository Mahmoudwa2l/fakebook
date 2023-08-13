import "./Rightbar.css";
import Friends from "../Friends/Friends";
import {Users} from "../../dummyData"
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Mahmoud Wael</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
