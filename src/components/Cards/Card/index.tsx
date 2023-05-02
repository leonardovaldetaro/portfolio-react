import Styles from './Card.module.scss';
import CardsInfo from 'Data/cardsInfo.json';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = typeof CardsInfo[0];

export default function Card (props: Props) {
    const {photo, category, description, title} = props;


    return (
        <article className={Styles.card}>
            <Link to={`/projeto/${props.id}`} className={Styles.card__link} target='_top'>
                <div className={Styles.card__imgContainer}>
                    <img src={photo} alt="Imagem" className={Styles.card__imgContainer__img} />
                </div>
                <div className={Styles.card__container}>
                    <h2 className={Styles.card__title}>{title}</h2>

                    <h3 className={classNames({
                        [Styles.card__tag]: true,
                        [Styles[`card__tag__${category.label.toLowerCase()}`]]: true,
                    })}
                    >
                        {category.label}
                    </h3>
                    <p className={Styles.card__descricao}>{description} </p>
                </div>
            </Link>
        </article>
    );
}