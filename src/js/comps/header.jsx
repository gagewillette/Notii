import notiiLogo from "../../assets/notii-inverse.svg";

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="notii-logo"><img src={notiiLogo} width={200} /></div>
        <div className="header-buttons"></div>
      </div>
    </>
  );
}
