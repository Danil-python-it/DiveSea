import '../style/Hero.sass'
import Nft1 from '../assets/Nft1.png'
import Nft2 from '../assets/Nft2.png'
import arrow from '../assets/ArrowHard.svg'
import points from '../assets/DecorPoints.svg'
import left_arrow from '../assets/left-line.svg'
import right_arrow from '../assets/right-line.svg'


function Hero(){
    
    return(
        <section className='Hero'>
            <div className="HeroText">
                <div className="top_line"></div>
                <div className="Hero_title">
                    Discover And Create NFTs
                </div>
                <div className="Hero_description">
                    Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span>$20 bonus</span>.
                </div>
                <div className="HeroUi">
                    <a href="#" className="btn">Explore More</a>
                    <a href="#" className="btn">create NFT</a>
                </div>
                <div className="HeroFeatures">
                    <div className="case">
                        <div className="case_title">430K+</div>
                        <div className="case_type">Art Works</div>
                    </div>
                    <div className="case">
                        <div className="case_title">159K+</div>
                        <div className="case_type">Creators</div>
                    </div>
                    <div className="case">
                        <div className="case_title">87K+</div>
                        <div className="case_type">Collections</div>
                    </div>
                </div>
            </div>
            <div className="HeroHeader">
                <div className="CtnNft">
                    <div>
                        <img src={Nft1} alt="" className="main" />
                        <img src={Nft1} alt="" className="shadow" />
                    </div>
                </div>
                <div className="CtnArrow">
                    <img src={arrow} alt="" />
                </div> 
                <div className="CtnPoints">
                    <img src={points} alt="" />
                </div>
                <div className="CtnNft">
                    <div>
                        <img src={Nft2} alt="" className="main" />
                        <img src={Nft2} alt="" className="shadow" />
                    </div>
                </div>
                <div className="CtnNav">
                    <a href="" className="Btn"><img src={left_arrow} alt="" /></a>
                    <div className="vertical_line">
                    </div>
                    <a href="" className="Btn"><img src={right_arrow} alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero;