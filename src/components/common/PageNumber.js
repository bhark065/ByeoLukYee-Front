import { Icon } from "@iconify/react";

import '../../styles/common/Styles.css';
import styles from '../../styles/common/PageNumber.module.css';

function PageNumber({ totalPosts, postsPerPage, currentPage, onPageChange }) {
    const pageCount = Math.ceil(totalPosts / postsPerPage);

    const handleSelectedClick = (number) => {
        onPageChange(number);
    };

    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    let pathName = window.location.pathname;

    return (
        <>
            {
                pageNumbers.length > 0 &&
                <div className={pathName === '/selling-posts' ? styles['sellingSelectDiv'] : (pathName === '/buying-posts' ? styles['buyingSelectDiv'] : styles['searchSelectDiv'])}>
                    <div className={styles['div']}>
                        {pageNumbers.map(number => (
                            <div key={number} className={number === currentPage ? styles['selected'] : ''} onClick={() => handleSelectedClick(number)}>
                                <p>{number}</p>
                            </div>
                        ))}
                        {
                            pageNumbers.length > 5 &&
                            <Icon icon='iconamoon:arrow-right-2-light' style={{ color: '#E0E0E0', fontSize: '20px', cursor: 'pointer'}} />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default PageNumber;