import '../../styles/common/Styles.css';
import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from '../buying-Item/BuyPostItem';

function BuyPostItemList({ buyingPostData }) {
    // 전달받은 buyingPostData 화면에 보여주기
    return (
        <div className={styles['profile-grid-container']}>
            {Array.isArray(buyingPostData) && buyingPostData.length > 0 ? (
                buyingPostData.map((item, index)  => (
                    <div key={index} className={styles['buy-grid-item']}> 
                        <BuyPostItem
                            post={item}
                        />
                    </div>
                ))
            ) : (
                <p>작성글 없습니다.</p>
            )}
        </div>
    )
}

export default BuyPostItemList;