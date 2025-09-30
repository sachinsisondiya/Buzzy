import {Link , NavLink} from "react-router-dom"
export default function Header(){
  return (
       <header className="header">
        <Link to="/"
        className="home-link"
        >#bu<strong>ZZ</strong>y<img
        className="home-logo"
         src="../src/assets/bus.svg" alt="red color location point bar , that include a bus" /></Link>

         <nav>
          <NavLink
          className="nav-link"
          to="/user">User</NavLink>

          <NavLink className="nav-link" to="/driver">Driver</NavLink>

          <NavLink className="nav-link" to="/admin">Admin</NavLink>

          
         </nav>

  


       </header>
  )
}