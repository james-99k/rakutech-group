import './dashboard.scss'
import { Info } from "@material-ui/icons"
import Line from '../charts/Line'
import Pie from '../charts/Pie'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__top">
                <div className="statistics">
                    <div className="statistics__title">
                        <span>Sales Statistics</span>
                        <Info />
                    </div>
                    <div className="statistics__tab">
                        <div className="tab active">
                            <span>All time</span>
                        </div>
                        <div className="tab">
                            <span>This year</span>
                        </div>
                        <div className="tab">
                            <span>This week</span>
                        </div>
                        <div className="tab">
                            <span>Today</span>
                        </div>
                    </div>
                    <Line />
                </div>
                <div className="calendar">
                    <div className="calendar__title">
                        <span>Calendar</span>
                        <Info />
                    </div>
                </div>
            </div>
            <div className="dashboard__bottom">
                <div className="traffic">
                    <div className="traffic__title">
                        <span>Traffic</span>
                        <Info />
                    </div>
                </div>
                <div className="tickets">
                    <div className="tickets__title">
                        <span>Tickets</span>
                        <Info />
                    </div>
                </div>
                <div className="sources">
                    <div className="sources__title">
                        <span>Sources</span>
                        <Info />
                    </div>
                    <Pie />
                </div>
            </div>
        </div>
    )
}