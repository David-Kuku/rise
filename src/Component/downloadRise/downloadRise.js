import React from 'react'
import playstore from '../../Assets/playstore.svg'
import Appstore from '../../Assets/apple.svg'
import './downloadRise.css'
import phone_bottom from '../../Assets/phone_bottom.svg'

const DownloadRise =() =>{
    return (
        <div className="download_rise">
            <div className="download_rise_container">
                <div className="download_rise_container_div1">
                    <p className="download_rise_container_div1_p1">
                        Download Rise
                    </p>
                    <div className="download_rise_container_bold">Join our 100,000 users investing and setting long term goals</div>
                    <p className="download_rise_container_div1_p2">Dollar investments that help you grow</p>

                    <div className="download_rise_buttons">
                        <button>
                            <img src={Appstore} alt="app store" />
                            Download on the App store
                        </button>
                        <button>
                            <img src={playstore} alt="app store" />
                            Donwload on the Google playstore

                        </button>
                    </div>
                </div>
                <div className="download_rise_img" id = "desktop_img">
                    <img src = {phone_bottom} alt = ""/>
                </div>

                <div className="download_rise_img_mobile" id = "mobile_img">
                    <img src = {phone_bottom} alt = ""/>
                </div>
            </div>
        </div>
    )
}

export default DownloadRise
