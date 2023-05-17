import Styles from './Cta.module.scss';
import ImageCta from 'assets/teste3.jpg';
import { Link } from 'react-router-dom';
import { MdTrendingFlat } from 'react-icons/md';

export default function Cta () {
    return (
        <section className={Styles.ctaContainer}>
            <div className={Styles.ctaContainer__imgContainer}>
                <img className={Styles.ctaContainer__imgContainer__img} src={ImageCta} alt="" />
            </div>
            <article className={Styles.ctaContainer__article}>
                <h3 className={Styles.ctaContainer__article__subTitle}>work</h3>
                <h2 className={Styles.ctaContainer__article__title}>Bring bold ideas to life</h2>
                <h4 className={Styles.ctaContainer__article__lead}>Imagine and build experiences, products and businesses that disrupt the status quo, win hearts and realize the future.</h4>
                <p className={Styles.ctaContainer__article__txt}>
                To create a successful online presence, I thoroughly analyze your business and target audience. This helps me understand your goals and tailor a strategy for front-end development and digital design. With expertise in the latest industry trends, I can assist you in building a new website or enhancing your current one. Reach out to me today to discuss your project and achieve your online objectives.
                </p> 
            </article>
            <div className={Styles.ctaContainer__linkWraper}>
                <Link className={Styles.ctaContainer__linkWraper__link} to={"/contatos"}>Get in touch <MdTrendingFlat size={40} color="rgb(32,50,62)" className={Styles.ctaContainer__linkWraper__link__icon} /></Link>
            </div>
        </section>
    );
}