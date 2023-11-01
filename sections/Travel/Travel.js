import styles from './styles.module.scss'
import Image from "next/image";
import {checkbox} from "/utils/svgImages"



const Travel = ({posts, accom}) => {
    
    return (
        <div className={`${styles.travelWrapper}`}>
           <div className={`${styles.travelSection} section`}>
            <div className={styles.travelHeader}>
                <Image 
                    src='/plane.png'
                    width={38}
                    height={37}
                    alt='Plane'
                />
                <h2>Travel</h2>
                
            </div>
            <div>
                <>
                    {posts.map((post) => {
                        return(
                            <div className={styles.postSection}>
                                <h3>{post.title}</h3>
                            {post.section.map((section) => {
                                return(
                                    <div className={styles.postSection}>
                                    {post.type == 'checkbox' ? 
                                    (
                                        <span className={styles.checkbox}>
                                            <div className={styles.checkboxSvg} dangerouslySetInnerHTML={{ __html: checkbox()}}/>
                                            {section}
                                        </span>
                                    ) :(
                                        <span>{section}</span>
                                    )}
                                    </div>
                                        
                                )
                            })}
                            </div>
                        )
                    })}
                    </>
                </div>
            </div>
            <div className={`${styles.accomodationSection} section`}>
                <div className={styles.travelHeader}>
                    <Image 
                        src='/home.png'
                        width={38}
                        height={37}
                        alt='House'
                    />
                    <h2>Accomodation</h2>
                    <div>
                        {accom.map((accomodation => {
                            return(
                                <div key={accomodation.title} className={styles.postSection}>
                                    <h3>{accomodation.title}</h3>
                                {accomodation.section.map((section) => {
                                    return(
                                        <div className={styles.postSection}>
                                        {accomodation.type == 'checkbox' ? 
                                        (
                                            <span className={styles.checkbox}>
                                                <div className={styles.checkboxSvg} dangerouslySetInnerHTML={{ __html: checkbox()}}/>
                                                {section}
                                            </span>
                                        ) :(
                                            <span>{section}</span>
                                        )}
                                        </div>
                                            
                                    )
                                })}
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel