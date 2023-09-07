import Image from "next/image";
import styles from './styles.module.scss'
import images from './images.json'

const Images = () => {

    return (
        <>
            {images.map((image, index) =>
                
                    <div key={index} className={`${styles.imageCard}`}>
                        <Image
                            src={`${image.src}`}
                            alt={`${image.caption}`}
                            width={150}
                            height={150}
                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            key={image.place}
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