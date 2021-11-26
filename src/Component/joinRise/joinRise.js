import React from 'react'
import './joinRise.css'
import joinrise from '../../Assets/joinrise.svg'

const JoinRise = () => {
    return (
        <>
            <div className="joinRise" id="joinRise_desktop">
                <div className="joinRise_div1">
                    <h3>Join The Rise Community</h3>
                    <p>
                        If you want to go far, go together. Our Telegram community
                        surrounds you with others who can help you along your financial
                        journey with tips, support, advice and learning. It's completely
                        free and open to new and seasoned investors.
                    </p>

                    <button>
                        Join community
                    </button>
                </div>
                <div className="joinRise_div2">
                    <img src={joinrise} alt="" width="300px" />
                </div>
            </div>

            <div id="joinRise_mobile">
                <div className="joinRise_div2_mobile">
                    <div className="joinRise_mobile_div">
                        <img src={joinrise} alt="" width="300px" />

                        <h3>Join the Rise Community</h3>
                        <p>If you want to go, go together</p>

                        <div className="join_rise_button_mobile_div">
                            <button>
                                Join community
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinRise
