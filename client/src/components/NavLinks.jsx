// import { useDashboardContext } from "../pages/DashboardLayout";
// import links from "../utils/links";
// import { NavLink } from "react-router-dom";

// const NavLinks = ({ isBigSidebar }) => {
//   const { toggleSidebar, user } = useDashboardContext();
//   return (
//     <div className="nav-links">
//       const { role } = user;
//       {links.map((link) => {
//         const { text, path, icon } = link;
//         if (path === "admin" && role !== "admin") return;
//         return (
//           <NavLink
//             to={path}
//             key={text}
//             className="nav-link"
//             onClick={isBigSidebar ? null : toggleSidebar}
//             end
//           >
//             <span className="icon">{icon}</span>
//             {text}
//           </NavLink>
//         );
//       })}
//     </div>
//   );
// };
// export default NavLinks;


import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  // Add check to make sure user is defined
  if (!user) {
    return null; // or you could display a loading spinner, or some fallback UI
  }

  const { role } = user;

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;

        // Prevent admin link access for non-admin users
        if (path === "admin" && role !== "admin") return null;

        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

