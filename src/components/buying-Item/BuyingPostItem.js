import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';

import buyingStyle from '../../styles/buying-Item/BuyingPostItem.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyingPostItem({ title, status, price, image, desc, id, userName }) {
    // 삽니다 게시글 각각의 item 컴포넌트
    // BuyingPostItemList에서 보낸 title, status, price, desc, userName를 받아서 화면에 보여주기
    const containerStyle = {
        backgroundColor: status === '경매완료' ? '#F6F6F6' : ''
    }
    const textStyle = {
        color: status === '경매완료' ? '#D2D2D2' : ''
    }

    return(
        <>
            <Link to={`/selling-posts/${id}`} style={{ textDecoration: "none", color: 'black' }}>
                
                <div className={buyingStyle['BoxContainer']} style={containerStyle}>
                     
                    <div className={buyingStyle['topDiv']}>
                        <div className={buyingStyle['topLeftDiv']}>
                            <div className={buyingStyle['imgDiv']}> <img src="/images/exampleImg.png" alt="example" /> </div>
                            <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px'}}>
                                <p>{userName}</p>
                                <p>2024-04-04</p>
                            </div>
                        </div>
                        <p style={textStyle}>#{status}</p>
                    </div>

                    <div className={buyingStyle['middleDiv']}>
                        <div className={buyingStyle['context']}>
                            <p>{title}</p>
                            <p>{desc}</p>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <div className={buyingStyle['moneyDiv']}>
                            <p>희망 구매 가격</p>
                            <p>{price}원</p>
                        </div>
                        <div className={buyingStyle['iconDiv']}>
                            <div className={buyingStyle['eyesVectorDiv']}>
                                <VscEye className={buyingStyle['eyesVector']}/>
                                <p>0</p>
                            </div>
                            <div className={buyingStyle['heartVectorDiv']}>
                                <GoHeart className={buyingStyle['heartVector']}/>
                                <p>0</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default BuyingPostItem;