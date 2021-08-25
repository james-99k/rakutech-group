import './topbar.scss'
import { Link } from "react-router-dom";
import { NotificationsNone, Search, PermIdentity } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__wrapper--left">
                    <Link to="/" className="link">
                        <span className="logo">Onestop<span className="red">Tech</span> Admin</span>
                    </Link>
                </div>
                <div className="topbar__wrapper--right">
                    <div className="iconContainer">
                        <Search />
                    </div>
                    <div className="iconContainer">
                        <NotificationsNone />
                        <span className="iconContainer__badge">2</span>
                    </div>
                    <div className="iconContainer">
                        <PermIdentity />
                    </div>
                </div>
            </div>
        </div>
    )
}