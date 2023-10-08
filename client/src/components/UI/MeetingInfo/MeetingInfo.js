import "./MeetingInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const MeetingInfo = ({ setMeetInfoPopup, url }) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting is ready</h3>
        <FontAwesomeIcon
          icon={faTimes}
          className="icon"
          onClick={() => {
            setMeetInfoPopup(false);
          }}
        />
      </div>
      <button className="add-people-btn">
        <FontAwesomeIcon icon={faUser} className="icon" />
        Add Others
      </button>
      <p className="info-text">
        Or share this meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon
          icon={faCopy}
          className="icon"
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
      <div className="permission-text">
        <FontAwesomeIcon icon={faShieldAlt} className="icon" />
        <p className="small-text">
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small-text">Joined as pravin@gmail.com</p>
    </div>
  );
};

export default MeetingInfo;
