import Cards from 'components/Cards';
import Styles from './Recentes.module.scss';
import CardFull from 'components/Cards/CardFull';

export default function Recentes () {
    return (
        <article className={Styles.recentes}>
            <h2 className={Styles.recentes__titulo}>Projetos Recentes</h2>
            <Cards />
            <CardFull />
        </article>
    );
}