
import styles from './styles.module.css'
import Image from 'next/image'

export default function CardPodcastCarousel({ url, title, description }) {
  return (
    <div className={styles.container}>
       <div className={styles.podcast__cover} >
            <Image 
                src={url} 
                alt={title} 
                width="100%" 
                height="100%"
                unoptimized={true}
                loading="eager"
                quality='90'
                layout="fill"
            />
       </div>
        <div className={styles.podcast__content}>
            <div>
                10 episódios
            </div>
            <div>
                <h3 className={styles.podcast__title}>{title}</h3>
                <p className={styles.podcast__description}>{description}</p>
            </div>
        </div>
    </div>
  )
}
