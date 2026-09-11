// NOTE: The nav below uses <a href="…"> which triggers full page reloads.
// Lab 07 asks you to install react-router and replace these with <Link>.
import { Outlet } from "react-router";
import { Link, Outlet } from "react-router";

      <nav>
        <Link to="/">
          <p className="text-[12px]">Home</p>
        </Link>

        <Link to="/countries">
          <p className="text-[12px]">Countries</p>
        </Link>

        <Link to="/bucket-list">
          <p className="text-[12px]">Bucket List</p>
        </Link>

        <Link to="/about">
          <p className="text-[12px]">About</p>
        </Link>
      </nav>

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-14 flex items-center justify-between border-2 px-5 border-blue-600">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <span className="font-bold">Countries of the World</span>
        </div>

        <div className="flex gap-5">
          <a href="/">
            <p className="text-[12px]">Home</p>
          </a>
          <a href="/countries">
            <p className="text-[12px]">Countries</p>
          </a>
          <a href="/bucket-list">
            <p className="text-[12px]">Bucket List</p>
          </a>
          <a href="/about">
            <p className="text-[12px]">About</p>
          </a>
        </div>
      </nav>
      <main className="flex-1 border-2 border-amber-400 p-3">
        {Outlet}
      </main>
    </div>
  );
};

export default Layout;
