import Styles from './Cta.module.scss';
import ImageCta from 'assets/teste3.jpg';

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
                My creation process starts with a complete analysis of your business and your target audience, so I can understand your needs and goals. Then, I develop a personalized strategy for front-end development and digital design, which takes into account the latest trends and best practices in the industry.
                Whether you need a new website or want to revamp your existing one, I'm here to help you achieve your online goals. So, don't hesitate to contact me to discuss your project and see how I can help you succeed on the web.
                </p> 
            </article>
        </section>
    );
}