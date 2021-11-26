import React from 'react'
import Phone from '../../Assets/Phone.svg'
import './FirstSection.css'
import playstore from '../../Assets/playstore.svg'
import Appstore from '../../Assets/apple.svg'
import companies from '../../Assets/companies.svg'
import support_mobile from '../../Assets/support_mobile.svg'

const FirstSection = () => {
    return (
        <>
            <div className="firstSection_container">
                <div className="firstSection_text">
                    <h3 className="firstSection_text_h3">
                        Dollar investments that help you grow
                    </h3>
                    <p className="firstSection_text_p">
                        We put your money in high quality assets that help you build wealth and achieve your financial goals.
                    </p>

                    <div className="download_buttons">
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
                <div className="firstSection_image">
                    <img src={Phone} alt="phone" width="300px" height="500px" />
                </div>
            </div>

            <div className="supported_companies">
                <div className="desktop_supported_companies"><img src={ companies} alt="" /></div>
                <div className="mobile_supported_companies"><img src={support_mobile} alt="" /></div>
            </div>
        </>
    )
}

export default FirstSection
