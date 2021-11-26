import React from 'react'
import '../otherSections.css'
import weRemember from '../../../Assets/weRemember.svg'
import { Link } from 'react-router-dom'
import arrow from '../../../Assets/arrow.svg'

const WeRemember = () => {
    return (
        <>
            <div className="desktop_view">
                <div className="otherSection_container">
                    <div>
                        <img src={weRemember} alt="" width="400px" />
                    </div>

                    <div className="otherSection_div1">
                        <p className="otherSection_p1">We remember so you dont have to</p>
                        <p>
                            Our Auto-invest feature makes it easy to stay consistent, even when you forget.
                            Set a funding amount, frequency and payment method and Rise will automatically
                            fund your investment, on schedule.
                        </p>

                        <p>
                            <Link to="/" className="otherSection_Link">
                                Start Investing Now
                                <img src={arrow} alt="" />
                            </Link>
                        </p>
                    </div>
                </div>

            </div>

            <div className="mobile_view">
                <div className="otherSection_container">
                    <div>
                        <img src={weRemember} alt="" width="300px" />
                    </div>

                    <div className="otherSection_div1">
                        <p className="otherSection_p1">Diversification</p>
                        <p>
                            Rise offers a choice of three asset classes: US equities,
                            US real estate and fixed income assets to provide stability
                            to your investments and protection from market declines.
                            You can pick one asset class or
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WeRemember
