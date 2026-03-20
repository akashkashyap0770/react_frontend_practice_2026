import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink> |{" "}
            <NavLink to="/about">About</NavLink> |{" "}
            <NavLink to="/contact">Contact</NavLink> |{" "}
            <NavLink to="/account/profile">Profile</NavLink> |{" "}
            <NavLink to="/account/settings">Settings</NavLink> |{" "}
            <NavLink to="/users/:akash">User</NavLink>
        </nav>
    )
}

export default Header
