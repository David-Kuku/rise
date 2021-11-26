import React from 'react'
import rise_footer from '../../Assets/rise_footer.svg'
import arrow_diagonal from '../../Assets/arrow_diagonal.svg'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className = "footer_divs">
                <img src={rise_footer} alt="" style={{marginTop:"16px", marginBottom:"10px"}}/>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                    <li>Contact Info</li>
                    <li>Press</li>
                    <li>Rise impact</li>
                </ul>
            </div>

            <div className = "footer_divs">
                <p><b>Explore</b></p>
                <ul>
                    <li>Investment Club <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                    <li>blog <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                </ul>
            </div>

            <div className = "footer_divs">
                <p><b>Products</b></p>
                <ul>
                    <li>Rise App</li>
                    <li>Wallets</li>
                    <li>Asset Classes</li>
                </ul>
            </div>

            <div className = "footer_divs">
            <p><b>Contact Us</b></p>
                <ul>
                    <li>08187147405 <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                    <li>hello@rise.capital <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                    <li>Newsletter <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                    <li>Instagram <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                    <li>Twitter <img src={arrow_diagonal} alt = "" className="diagonal_arrow"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
