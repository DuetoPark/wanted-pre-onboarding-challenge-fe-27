import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  if (error instanceof AxiosError) {
    return (
      <div>
        <h2>⚠️ {error.code}</h2>
        <p>{error.message}</p>

        <ol>
          <li>url: {error.response?.config.url}</li>
          <li>status: {error.response?.status}</li>
          <li>statusText: {error.response?.statusText}</li>
        </ol>
      </div>
    );
  }

  return (
    <div>
      <h2>NotFound</h2>
      <p>404 Not Found</p>
    </div>
  );
};

export default NotFound;
