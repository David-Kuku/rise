import React from 'react'
import '../otherSections.css'
import choose from '../../../Assets/choose.svg'
import { Link } from 'react-router-dom'
import arrow from '../../../Assets/arrow.svg'

const Choose = () => {
    return (
        <>
            <div className="desktop_view">
                <div className="otherSection_container">
                    <div>
                        <img src={choose} alt="" width="400px" />
                    </div>

                    <div className="otherSection_div1">
                        <p className="otherSection_p1">Choose what's best for you</p>
                        <p>
                            Unlike other platforms, Rise lets you pick between stocks,
                            US real estate and fixed income, according to your risk appetite.
                            That way you can spread your risk and tap into different investments all in one place.
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
                        <img src={choose} alt="" width="300px" />
                    </div>

                    <div className="otherSection_div1">
                        <p className="otherSection_p1">Personailization</p>
                        <p>
                            No two people are the same, and everyone’s financial goals are different.
                            Rise understands this, which is why we tailor your journey to financial freedom to fit you.
                        </p>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Choose
