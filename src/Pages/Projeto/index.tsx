import Styles from './Projeto.module.scss';
import { useParams } from 'react-router-dom';
import CardsInfo from 'Data/cardsInfo.json'

export default function Projeto () {
    const { id } = useParams();

    const projeto = CardsInfo.find(item => item.id === Number(id));
    return (
        <>
            <section className={Styles.projeto}>
                <figure className={Styles.projeto__imgContainer}>
                    <img className={Styles.projeto__imgContainer__img} src={projeto?.photo} alt={projeto?.title} />
                </figure>
                <h1 className={Styles.projeto__title}>
                    {projeto?.title}
                </h1>
                <article className={Styles.projeto__textContainer}>
                    <p className={Styles.projetos__textContainer__txt}>
                        {projeto?.longDescription}
                    </p>
                </article>
            </section>
        </>
    );
}