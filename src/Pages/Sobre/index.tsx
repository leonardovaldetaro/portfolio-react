import Styles from './Sobre.module.scss';
import ImageSobre from 'assets/img-field-sobre.png';
import { FaLinkedin, FaGithubSquare, FaBehanceSquare, FaDribbbleSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const rotasSocial = [{
    label: 'Linkedin',
    to: 'https://www.linkedin.com/in/leonardovaldetaro/',
    icon: <FaLinkedin size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Github',
    to: 'https://github.com/leonardovaldetaro',
    icon: <FaGithubSquare size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Behance',
    to: 'https://www.behance.net/leonardovaldetaro',
    icon: <FaBehanceSquare size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Dribbble',
    to: 'https://dribbble.com/Valdetaro',
    icon: <FaDribbbleSquare size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
}]

export default function Sobre () {
    return (
        <section className={Styles.sobre}>
            <figure className={Styles.sobre__imgContainer}>
                <img className={Styles.sobre__img} src={ImageSobre} alt="Imagem" />
            </figure>
            <article className={Styles.sobre__container}>
                <h2 className={Styles.sobre__container__subtitle}>Leonardo Valdetaro</h2>
                <h1 className={Styles.sobre__container__title}>Frontend web developer, digital designer.</h1>
                <p className={Styles.sobre__container__mainText}>
                    As a transitioning professional, I have a combination of design and front-end development skills. Although my professional experience has been focused on design and advertising, since 2018 I have been seeking continuous learning and study in front-end development. 
                </p>
                <p className={Styles.sobre__container__text}>
                    I have technical skills in HTML, CSS, JavaScript, and their respective frameworks such as Bootstrap and React. My specialties include responsive design, mobile-first approach, accessibility, semantic coding, SEO, UI, design system, and design components.
                </p>
                <p className={Styles.sobre__container__text}>
                    As an additional advantage, I have strong communication skills and can collaborate effectively with various teams involved in digital product production. <a href="https://read.cv/leonardovaldetaro" className={Styles.sobre__container__link}>Access my resume</a></p>
                <div className={Styles.sobre__mdSociais}>
                    <ul className={Styles.sobre__mdSociais__list}>
                        {rotasSocial.map((rota, index) =>(
                            <li className={Styles.sobre__mdSociais__list__item} key={index}>
                                <Link to={rota.to} target="_blank" title={rota.label}>{rota.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    );
}