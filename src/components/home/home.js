import styles from '../../styles/common/styles.css';
import homeStyle from '../../styles/home/home.module.css';
import TitleBar from '../common/titleBar';
import SearchInput from '../common/searchInput';
import SellDiv from '../common/sellDiv';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function Home() {
    return(
        <div className={homeStyle['divContainer']}>
            <TitleBar />
            <div className={homeStyle['DivStyle']}>
                <p>벼룩이</p>
            </div>
            <SearchInput />
            <div className={homeStyle['lookContainer']}>
                <p className={homeStyle['lookUserP']}>사용자님이 최근 본 글</p>
                <div className={homeStyle['scrollContainer']}>
                    <div className={homeStyle['topContainer']}>
                        <div className={homeStyle['boxContainer']}>
                            <div className={homeStyle['lookImgStyle']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'}/> </div>
                            <div className={homeStyle['textContainer']}>
                                <p>#판매중</p>
                                <p>제목입니다.</p>
                            </div>
                            <p className={homeStyle['moneyP']}>40,000원</p>
                            <div className={homeStyle['vectorDiv']}>
                                {/* 몇명 봤는지, 누가 찜했는지 */}
                                <div className={homeStyle['eyesVectorDiv']}>
                                    <VscEye className={homeStyle['eyesVector']}/>
                                    <p>0</p>
                                </div>
                                <div className={homeStyle['heartVectorDiv']}>
                                    <GoHeart className={homeStyle['heartVector']}/>
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={homeStyle['newContainer']}>
                    <p className={homeStyle['lookUserP']}>따끈따끈 최신 글</p>
                    <div className={homeStyle['newScrollContainer']}>
                        <SellDiv />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;