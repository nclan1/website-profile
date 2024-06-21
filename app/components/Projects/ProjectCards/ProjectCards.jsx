
import style from './style.module.scss';
import Rounded from '@/object/RoundedButton/Rounded';

export default function ProjectCards({i, title, description, link, github}) {


    return (
        <div className={style.cardContainer} style={{top: `calc(12vh + ${i *100}px)`}}>
            <div className={style.card}>
                <h1>{title}</h1>
                <a href={link} target='_blank'>{github}</a>
            </div>

            <div className={style.card2}>
                <p>{description}</p>
            </div>
        </div>
    )
}