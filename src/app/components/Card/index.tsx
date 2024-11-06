import Image from "next/image"
import styles from "./Card.module.css"

type CardProps = {
    heading: string;
    contents: string[];
}

export const Card: React.FC<CardProps> = ({ heading, contents }: CardProps) => {
    return (
        <>
            <div className={styles.parent}>
                <Image className={styles.image} src="/images/robot_and_hogeta.jpeg" alt="hogeta" width={150} height={150} />
                <div className={styles.mediaBody}>
                    <h1 className={styles.heading}>{heading}</h1>
                    {contents.map((item) => <p className={styles.contents} key={item}>{item}</p>)}
                </div>
            </div >
        </>
    )
}
