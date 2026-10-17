import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const withAuth = (WrappedCompoent) => {
  const AuthComponent = (props) => {
    const router = useNavigate();
    const hasToken = !!localStorage.getItem("token");

    useEffect(() => {
      if (!hasToken) router("/auth");
    }, [hasToken]);

    if (!hasToken) return null;

    return <WrappedCompoent {...props} />;
  };
  return AuthComponent;
};
export default withAuth;
