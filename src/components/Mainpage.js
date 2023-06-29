import React from "react";
import profile from "../images/profile.jpg"
import home from "../images/home.png"
import bl from "../images/bl.png"
import pl from "../images/pl.png"
import trade from "../images/trade.png"
import wallet from "../images/wallet.png"
import history from "../images/history.png"
import graph1 from "../images/graph1.png"
import graph2 from "../images/graph2.jpg"
import graph3 from "../images/graph3.png"
import pie_chart from "../images/pie_chart.png"
import arrow from "../images/arrow.png"
import imge1 from "../images/logo.png"
import Bitcoin from "../images/Bitcoin.png"
import triangle from "../images/triangle.png"
import bell from "../images/bell.png"
import searchnormal from "../images/searchnormal.jpg"
import microphone from "../images/microphone2.png"

function Mainpage(){
    return(
        <div>
             <div className="main">
              {/* <!--Sidebar--> */}
            <div class="sidebar">
                <div className="profile">
                    <a href="#"><img src={profile} className="profile_1"/></a>
                    <a href="#"><img src={home}/></a>
                    <a href="#"><img src={bl}/></a>
                    <a href="#"><img src={pl}/></a>
                    <a href="#"><img src={trade}/></a>
                    <a href="#"><img src={wallet}/></a>
                    <a href="#"><img src={history}/></a>
                </div>
            </div>



        {/* <!--first div--> */}
        <div class="spot_profit">
            <div class="nav">
                <img className='first-image-nav' src={imge1} alt='logo-company' />
                <div className='search' >
                    {/* search bar hai */}
                    <div className='NewSearchIcon'>
                        {/* <img src={searchnormal} alt='searchicon' className='searchIcon' /> */}



                        <input type="text" class="searchTerm" placeholder="Search here" />
                        {/* voice icon hai */}
                        {/* <img src={microphone} alt='VoiceIcon' className='voiceIcon' /> */}
                    </div>

                </div>
                {/* <div className="item">
                    
                    
                    

                    </div>
                    
                   

                </div> */}
            <div className="three_nav">
                <div className="coin_content">
                    <div className="bit_image"><img src={Bitcoin} className="bitcoin"></img></div>
                    <p className="bit">Bitcoin</p>  
                </div>
                <div>
                <p className="bit_para">$25,713</p>
                </div> 
                <div className="tri_angle">
                    <div><img src={triangle} className="tri_photo"></img></div>
                    <p className="tri_para">18.39%</p>
                </div>

            </div>
                
                <div >
                    <img src={bell} className="bell_content"></img>
                </div>
                <div className="last_content">
                    <p className="name">John Dack</p>
                    <p className="online">Online</p>
                </div>
                

            </div>
           
            
            <h1>Spot Profit & Analysis</h1>
        </div>

        {/* <!--second--> */}
        <div class="balance">
            <div class="estimated_balance">
                <h2>Esitmated Balance</h2>
                <p class="balance_1">0.1543287547</p>
                <p class="btc_1">
                    BTC- $ 734,76
                </p>
            </div>

            <div class="yesterday_pnl">
                <h2>Yesterday's PNL</h2>
            <p class="balance_1">-$58.31</p>
                <p class="btc_2">
                    -8.79%
                </p>

            </div>
            
           
            <div class="day_pnl">
                <h2>30 Day's PNL</h2>
                <p class="balance_1">+$463.76</p>
                <p class="btc_3" >
                    +8.79%
            </p>
            </div>
        </div>

         {/* <!--third--> */}

        <div class="last_customize">
            <div class="lastd_7">
                Last 7 days
            </div>
            <div class="lastd_7">
                Last 30 days
            </div>
            <div class="lastd_7">
                Customize
            </div>

        </div>
        <div className="graph_1">
            <img src={graph1} className="graph1_1"/>
            <img src={graph2} className="graph2_2"/>
        </div>
        <div class="side_graph">
            <img src={pie_chart} class="graph3_3"/>
            <img src={graph3} class="graph4_4"/>
        </div>
       <div class="side_profit">
        <strong>Profit</strong>
        <span class="side_profit_content">+$107.69</span>
       </div>
       <div class="arrow">
        <a href="#"><img src={arrow}/></a>
       </div>
            

    </div>
</div>

    
       
       
    )
}
export default Mainpage;