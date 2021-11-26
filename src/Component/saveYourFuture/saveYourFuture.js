import React from 'react'
import SaveForYourFuture from '../../Assets/saveYourFuture.svg'
import './saveYourFuture.css'


const SaveYourFuture = () => {
    return (
        <div className="saveforyourfuture_container">
            <div className="saveforyourfuture_image">
                <img src={SaveForYourFuture} alt="" />
            </div>
            <div className="saveforyourfuture_text">
                <p>The Rise App</p>
                <p className = "saveforyourfuture_text_p2">Save for your <span>future</span></p>

                <p>
                    With Rise, you achieve your financial goals faster.
                    Save for school, your home, vacations, your
                    children’s future and more.
                </p>

                <button>Start Saving</button>
            </div>
        </div>
    )
}

export default SaveYourFuture
