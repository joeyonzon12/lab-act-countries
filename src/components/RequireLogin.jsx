
import { Navigate, Outlet, useLocation } from "react-router";

// TEMPORARY: a hardcoded flag.
// Week 15 replaces this with:
// const { isLoggedIn } = useAuth();
const isLoggedIn = false;

const RequireLogin = () => {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default RequireLogin;
