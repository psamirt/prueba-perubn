import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (performance.navigation.type === 1 && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
