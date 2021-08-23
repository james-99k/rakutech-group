import './topbar.scss'

import { NotificationsNone, Search, PermIdentity } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__wrapper--left">
                    <span className="logo">Onestop<span className="red">Tech</span> Admin</span>
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
