import Styles from './Cta.module.scss';
import ImageCta from 'assets/friedolin_BW.png';

export default function Cta () {
    return (
        <section className={Styles.ctaContainer}>
            <div className={Styles.ctaContainer__imgContainer}>
                <img className={Styles.ctaContainer__imgContainer__img} src={ImageCta} alt="" />
            </div>
            <article className={Styles.ctaContainer__article}>
                <h2 className={Styles.ctaContainer__article__title}>Frog</h2>
                <p className={Styles.ctaContainer__article__txt}>
                    If you're looking for a way to stand out on the internet and attract more customers, front-end development and digital design are essential to your success. With a team of experts in front-end development and digital design, we can create a professional, modern, and search engine-optimized website. <br />Our creation process starts with a complete analysis of your business and your target audience, so we can understand your needs and goals. Then, we develop a personalized strategy for front-end development and digital design, which takes into account the latest trends and best practices in the market.
                </p> 
            </article>
        </section>
    );
}