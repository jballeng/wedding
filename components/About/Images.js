import Image from "next/image";
import styles from './styles.module.scss'
import imageUrlBuilder from "@sanity/image-url";
import client from '../../sanity/sanity.client'
import { useRouter } from "next/router";
import { useState } from "react";
// import images from './images.json'
const Images = ({ images }) => {
    const builder = imageUrlBuilder(client)
    const [hover, setHover] = useState(false)
    // Then we like to make a simple function like this that gives the
    // builder an image and returns the builder for you to specify additional
    // parameters:
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
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        key={image._rev}
                    />
                    {hover ? (
                        <small key={image.caption}>
                            {image.caption}
                        </small>
                    ) : (
                        <small></small>
                    )
                        
                    }



                </div>

            )}

        </>
    )
}

export default Images