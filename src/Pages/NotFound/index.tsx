import ImageNotFound from 'assets/404_notFound.jpg';
import Styles from './notFound.module.scss';


export default function NotFound () {
    return (
        <section className={Styles.notFound}>
            <p className={Styles.notFound__text}>OOPS!</p>
            <h2 className={Styles.notFound__title}>Page not found</h2>
            <img src={ImageNotFound} alt="not found" className={Styles.notFound__img} />
        </section>
    )
}