import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

// Load Font Awesome v3.2.1 once
const loadFontAwesome = () => {
  const link = document.createElement("link");
  link.href = "//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Show only on specific routes
  const validPaths = [
    "/verticals",
    // "/careers",
    // "/insights-and-updates/news-and-events",
  ];
  const show = validPaths.some((p) => location.pathname.startsWith(p));

  useEffect(() => {
    loadFontAwesome();
  }, []);

  if (!show) return null;

  return (
    <>
      <ul className="flat-breadcrumb sticky">
        <li>
          <Link to="/">
            <span className="icon icon-home"> </span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const label = decodeURIComponent(name).replace(/-/g, " ").replace(/&/g, " & ");
          return (
            <li key={routeTo}>
              <Link to={routeTo}>
                <span className="icon icon-double-angle-right"></span> {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <style>{`
        .flat-breadcrumb {
          list-style: none;
          display: inline-block;
          padding: 1rem 2rem;
          margin: 10;
        }

        .flat-breadcrumb li {
          float: left;
          position: relative;
        }

        .flat-breadcrumb li a {
          color: #fff;
          display: block;
          background: #E63946;
          text-decoration: none;
          position: relative;
          height: 40px;
          line-height: 40px;
          padding: 0 10px 0 5px;
          text-align: center;
          margin-right: 23px;
          font-size: 16px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .flat-breadcrumb li:nth-child(even) a {
          background-color: #E63946;
        }

        .flat-breadcrumb li:first-child a {
          padding-left: 15px;
          border-radius: 4px 0 0 4px;
        }

        .flat-breadcrumb li:last-child a {
          padding-right: 15px;
          border-radius: 0 4px 4px 0;
        }

        .flat-breadcrumb li a:before,
        .flat-breadcrumb li a:after {
          content: "";
          position: absolute;
          top: 0;
          border: 0 solid #E63946;
          border-width: 20px 10px;
          width: 0;
          height: 0;
        }

        .flat-breadcrumb li a:before {
          left: -20px;
          border-left-color: transparent;
        }

        .flat-breadcrumb li a:after {
          left: 100%;
          border-color: transparent;
          border-left-color: #E63946;
        }

        .flat-breadcrumb li:nth-child(even) a:before {
          border-color: #E63946;
          border-left-color: transparent;
        }

        .flat-breadcrumb li:nth-child(even) a:after {
          border-left-color: #E63946;
        }

        .flat-breadcrumb li a:hover {
          background-color: gray;
        }

        .flat-breadcrumb li a:hover:before {
          border-color:gray;
          border-left-color: transparent;
        }

        .flat-breadcrumb li a:hover:after {
          border-left-color: gray;
        }

        .flat-breadcrumb:after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>
    </>
  );
}
