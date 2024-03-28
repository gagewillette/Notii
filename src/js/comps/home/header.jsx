import notiiLogo from "../../../assets/notii-inverse.png";
import "../../../styles/header.scss";

export default function Header() {
  return (
    <>
      <div className="header-positioner">
        <div className="header-wrapper">
          <div className="header-left">
            <div className="notii-text">
              <h2>Notii</h2>
            </div>
          </div>
          <div className="header-right">
            <div className="header-buttons"></div>
          </div>
        </div>
      </div>
    </>
  );
}
