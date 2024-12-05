import { Link } from "react-router-dom";

interface IAuthLink {
  guideMessage: string;
  text: string;
  path: string;
}

const AuthLink = ({ guideMessage, text, path }: IAuthLink) => {
  return (
    <div>
      <p>{guideMessage}</p>
      <Link to={path}>{text}</Link>
    </div>
  );
};

export default AuthLink;
