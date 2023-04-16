import styles from './AboutTitleBlock.module.scss'
import { FC } from "react";

interface Props {
    title1: string;
    title2: string;
    size?: string;
    lineheight?: string;

}

const AboutTitleBlock: FC<Props> = ({ title1, title2, size, lineheight }) => {
    return (
        <div style={{ fontSize: `${size}`, lineHeight: `${lineheight}` }} className={styles.Title_block}>
            {title1} <br />{title2}
        </div>
    )

}
export default AboutTitleBlock