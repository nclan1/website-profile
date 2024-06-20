
import style from './style.module.scss';

export default function ProjectCards({title, description, link}) {


    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                {title}
            </div>
        </div>
    )
}