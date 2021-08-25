import './sidebar.scss'

import { Dashboard, ShoppingBasket, PeopleAlt, DateRange, Chat, Payment, ExitToApp } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="admin">
                    <div className="admin__picture"></div>
                    <div className="admin__name">Admin Name</div>
                    <div className="admin_cash">P 47.00</div>
                </div>
                <div className="list">
                    <Link to="/admin" className="none">
                        <li className="list__menu active">
                            <Dashboard />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/productList" className="none">
                        <li className="list__menu">
                            <ShoppingBasket />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/users" className="none">
                        <li className="list__menu">
                            <PeopleAlt />
                            <span>User manager</span>
                        </li>
                    </Link>
                    <Link to="/calendar" className="none">
                        <li className="list__menu">
                            <DateRange />
                            <span>Calendar</span>
                        </li>
                    </Link>
                    <Link to="/messages" className="none">
                        <li className="list__menu">
                            <Chat />
                            <span>Messages</span>
                        </li>
                    </Link>
                    <Link to="/payments" className="none">
                        <li className="list__menu">
                            <Payment />
                            <span>Payments</span>
                        </li>
                    </Link>
                </div>
                <div className="logout">
                    <ExitToApp />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}