import React from 'react'
import '../otherSections.css'
import invest from '../../../Assets/invest.svg'
import { Link } from 'react-router-dom'
import arrow from '../../../Assets/arrow.svg'

const Invest = () => {
    return (
        <>
            <div className="desktop_view">
                <div className="otherSection_container">
                    <div className="otherSection_div1">
                        <p className="otherSection_p1">Invest your money in dollars</p>
                        <p>
                            By holding your investments in a stable currency,
                            your money grows more over time and retains its value better.
                        </p>

                        <p>
                            <Link to="/" className="otherSection_Link">
                                Start Investing Now
                                <img src={arrow} alt="" />
                            </Link>
                        </p>
                    </div>
                    <div>
                        <img src={invest} alt="" width="400px" />
                    </div>
                </div>
            </div>

            <div className="mobile_view">
                <div className="otherSection_container">
                    <div>
                        <img src={invest} alt="" width="300px" />
                    </div>
                    <div className="otherSection_div1">
                        <p className="otherSection_p1">Super Performance</p>
                        <p>
                            Rise outperforms your other alternatives in two ways.
                            The first is through our expert, algorithm driven investment
                            approach that picks through over 3,000 data sets to find the
                            perfect investment for you.
                        </p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Invest
