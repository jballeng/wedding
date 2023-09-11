import Image from "next/image";
import styles from './styles.module.scss'
import imageUrlBuilder  from "@sanity/image-url";
import client from '../../sanity/sanity.client'
import { useRouter } from "next/router";
// import images from './images.json'
const Images = ({images}) => {
    const builder = imageUrlBuilder(client)
    

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

    return (
       <>
        
            {images.map((image, index) =>
                
                    <div key={index} className={`${styles.imageCard}`}>
                        <Image
                            src={urlFor(image.gridItem.asset._ref).url()}
                            alt={`${image.caption}`}
                            width={150}
                            height={150}
                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             key={image._rev}
                        />
                        <small key={image.caption}>
                            {image.caption}
                        </small>
                    </div>
                
            )}
        
       </>
    )
}

export default Images