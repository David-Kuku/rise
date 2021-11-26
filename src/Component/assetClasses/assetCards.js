import React from 'react'
import { Link } from 'react-router-dom'
import './assetCards.css'
import arrow from '../../Assets/arrow.svg'

const AssetCards = ({ image, title, text, color }) => {
    return (
        <div className="card">
            <div className="card_upperHalf" style={{ backgroundColor: `${color}` }}>
                <div style={{ visibility: "hidden" }}>""</div>
                <div style ={{display:"flex", justifyContent:"center"}}>
                    <div className="card_img_div">
                        <img src={image} alt="" width="60%" height="80px" style={{ margin: "auto" }} />
                    </div>
                </div>
            </div>
            <div className="card_lowerHalf">
                <p className="card_title">
                    {title}
                </p>
                <p className="card_text">
                    {text}
                </p>

                <p className="returns"><span className="returns_risk">Historical returns:</span> 14% per annum</p>
                <p className="risk"><span className="returns_risk">Risk Level:</span> Medium</p>

            </div>
            <p className="card_learn">
                <Link to="/" className="card_learn_link">
                    Learn how {title} works
                    <img src={arrow} alt="" style={{ marginLeft: "10px" }} /></Link></p>

        </div>
    )
}

export default AssetCards
