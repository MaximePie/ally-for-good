import routes from '../../../helpers/routes';
import {NavLink} from "react-router-dom";
/**
 * Use NavLink component from React Router to redirect to the pages listed in /helpers/routes
 * @constructor
 */
export default function Navbar() {
  return (
    <div>
      <h2>Navbar</h2>
      <NavLink to={routes.HOME}>Home</NavLink>
      <NavLink to={routes.ABOUT}>About</NavLink>
      <NavLink to={routes.MATILDA}>Matilda</NavLink>
    </div>
  )
}