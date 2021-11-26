import React from 'react'
import AssetCards from './assetCards'
import './assetClass.css'
import stocks from '../../Assets/stocks.svg'
import realEstate from '../../Assets/realEstate.svg'
import fixedIncome from '../../Assets/fixedIncome.svg'


const stock_text = `We help you invest and manage your money by investing
                    in our portfolio of 30 high-growth stocks across the 
                    US market with our equity portfolio of power stocks.`

const realEstate_text = `Our Real Estate plan is the sweet middle. 
                        Best for those who want a balance of good returns and medium risk. 
                        This plan invests in rented buildings in the US.`

const fixedIncome_text = `A low-risk asset perfect for anyone who wants to protect
                          their money in a secure, appreciating currency, i.e. the dollar. 
                          For people who want to protect their hard-earned money from
                          inflation while earning steady returns.`
const AssetClass = () => {
    return (
        <div className="assets_container">
            <p className="assetClasses_title">Assets Classes</p>
            <p className="assetClasses_text">It’s your money, choose where you invest it</p>
            <div className="asset_classes">
                <AssetCards image={stocks} title="Stocks" text = {stock_text} color = "#FFF4F0"/>
                <AssetCards image={realEstate} title="Real Estate" text = {realEstate_text} color = "#F6F2FF"/>
                <AssetCards image={fixedIncome} title="Fixed Income" text = {fixedIncome_text} color = "#ECFEFE"/>
            </div>
        </div>
    )
}

export default AssetClass
