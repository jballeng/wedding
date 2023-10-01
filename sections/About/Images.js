import Image from "next/image";
import styles from './styles.module.scss'
import imageUrlBuilder from "@sanity/image-url";
import client from '../../sanity/sanity.client'
import { useState } from "react";
import { isMobile } from '../../utils/helpers'

const Images = ({ images }) => {
    const builder = imageUrlBuilder(client)
    const [hover, setHover] = useState(false)
    const mobile = isMobile()
    
    function urlFor(source) {
        return builder.image(source)
    }

    return (
        <>
            {images.map((image, index) =>

                <div key={index} className={`${styles.imageCard}`} onMouseOut={() => setHover(false)} onMouseOver={() => setHover(true)}>
                    <Image
                        src={urlFor(image.gridItem.asset._ref).url()}
                        alt={`${image.caption}`}
                        width={150}
                        height={150}
                        key={image._rev}
                    />
                    {mobile ? (
                        <span key={image.caption}>
                            {image.caption}
                        </span>
                    ) : (
                        <>
                        {hover ? (
                            <small key={image.caption}>
                                {image.caption}
                            </small>
                        ) : (
                            <small></small>
                        )
                        }
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Images