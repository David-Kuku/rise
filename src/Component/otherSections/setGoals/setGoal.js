import React from 'react'
import '../otherSections.css'
import setgoals from '../../../Assets/setgoals.svg'
import { Link } from 'react-router-dom'
import arrow from '../../../Assets/arrow.svg'

const SetGoals = () => {
    return (
        <div className="desktop_view">
            <div className="otherSection_container">
                <div className="otherSection_div1">
                    <p className="otherSection_p1">Set goals and reach them</p>
                    <p>
                        You can invest towards a goal on Rise--retirement, higher education,
                        save for your home or travel budgets. Or create a goal of your own
                        and invest periodically to achieve them.
                    </p>

                    <p>
                        <Link to="/" className="otherSection_Link">
                            Start Investing Now
                            <img src={arrow} alt="" />
                        </Link>
                    </p>
                </div>

                <div>
                    <img src={setgoals} alt="" width="400px" />
                </div>
            </div>
        </div>
    )
}

export default SetGoals
