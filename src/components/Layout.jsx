import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Countries of the World</h1>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/countries"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300"
              }
            >
              Countries
            </NavLink>
            <NavLink
              to="/bucket-list"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300"
              }
            >
              Bucket List
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;