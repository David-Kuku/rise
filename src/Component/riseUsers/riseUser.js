import React from 'react'
import './riseUsers.css'
import jesse from '../../Assets/jesse.svg'
import raye from '../../Assets/raye.svg'

const RiseUser = () => {
    return (
        <>
            <div className="rise_users" id="riseUser_desktop">
                <h3>From The People Who Use Rise</h3>
                <p className="rise_users_p">
                    Our mission at Risevest is to empower
                    more people just like you to achieve your personal financial goals.
                </p>

                <div className="rise_users_card_container">
                    <div className="rise_users_card">
                        <p>
                            I don’t want to invest in separate stocks because I’m not a
                            financial expert and I would rather trust my money in the hands
                            of people like Rise who are skilled and knowledgeable.
                        </p>

                        <div className="rise_users_img">
                            <img src={jesse} alt="" style={{ marginRight: "10px", width: "60px" }} />
                            <b>Jesse</b>
                        </div>
                    </div>

                    <div className="rise_users_card">
                        <p>
                            I don’t want to invest in separate stocks because I’m not a
                            financial expert and I would rather trust my money in the hands
                            of people like Rise who are skilled and knowledgeable.
                        </p>

                        <div className="rise_users_img">
                            <img src={jesse} alt="" style={{ marginRight: "10px", width: "60px" }} />
                            <b>Jesse</b>
                        </div>
                    </div>

                    <div className="rise_users_card">
                        <p>
                            I don’t want to invest in separate stocks because I’m not a
                            financial expert and I would rather trust my money in the hands
                            of people like Rise who are skilled and knowledgeable.
                        </p>

                        <div className="rise_users_img">
                            <img src={raye} alt="" style={{ marginRight: "10px", width: "60px" }} />
                            <b>Raye</b>
                        </div>
                    </div>

                </div>

            </div>

            <div className="rise_users" id="riseUser_mobile">
                <h3>What our customers are saying</h3>
                <p className="rise_users_p">
                    We serve over 80,000 amazing users.
                </p>

                <div className="rise_users_card_mobile">
                        <p>
                            I don’t want to invest in separate stocks because I’m not a
                            financial expert and I would rather trust my money in the hands
                            of people like Rise who are skilled and knowledgeable.
                        </p>

                        <div className="rise_users_img_mobile">
                            <img src={jesse} alt="" style={{ marginRight: "10px", width: "60px" }} />
                            <p style={{marginRight: "10px", marginBottom:"0px"}}><b>Jesse</b></p>
                            <span>UX Researcher</span>
                        </div>
                    </div>
            </div>
        </>

    )
}

export default RiseUser
