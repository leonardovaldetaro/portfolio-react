import Cards from 'components/Cards';
import Styles from './Recentes.module.scss';

export default function Recentes () {
    return (
        <article className={Styles.recentes}>
            <h3 className={Styles.recentes__subTitle}>Case studies</h3>
            <h2 className={Styles.recentes__titulo}>Selected Projects</h2>
            <Cards />
        </article>
    );
}