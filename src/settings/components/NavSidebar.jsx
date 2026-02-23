import { NavLink } from "react-router-dom";

export default function NavSidebar() {
  const getClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  return (
    <nav className="nav">
      <div className="nav-title">Settings</div>

      <NavLink to="/settings/general" className={getClass}>General</NavLink>
      <NavLink to="/settings/account" className={getClass}>Account</NavLink>
      <NavLink to="/settings/security" className={getClass}>Security</NavLink>
      <NavLink to="/settings/notifications" className={getClass}>Notifications</NavLink>
      <NavLink to="/settings/privacy" className={getClass}>Privacy</NavLink>
      <NavLink to="/settings/appearance" className={getClass}>Appearance</NavLink>
      <NavLink to="/settings/localization" className={getClass}>Localization</NavLink>
      <NavLink to="/settings/billing" className={getClass}>Billing</NavLink>
      <NavLink to="/settings/integrations" className={getClass}>Integrations</NavLink>
      <NavLink to="/settings/developer" className={getClass}>Developer</NavLink>
      <NavLink to="/settings/advanced" className={getClass}>Advanced</NavLink>
    </nav>
  );
}