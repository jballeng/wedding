import styles from './styles.module.scss'
import Image from 'next/image'

const Registry = () => {
    return(
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.section}`}>
            <span>
                Having you join us for our celebration is the best wedding gift we could ever ask for! 
            </span>
            </div>
            <div className={`${styles.section}`}>
                <span>
                    If you would like to honor us with a gift to help furnish our home we have consolidated our 
                    registries on <a href='https://registry.theknot.com/reagan-toal-jake-ballenger-april-2024/61652114' target='_blank'>The Knot.</a>

                </span>
            </div>
            <div className={`${styles.section}`}>
                <a href='https://registry.theknot.com/reagan-toal-jake-ballenger-april-2024/61652114' target='_blank'>
                <Image
                    src={'/knot.png'}
                    alt='the knot'
                    height={750}
                    width={750}
                />
                </a>
            </div>
        </div>
    )
}
export default Registry