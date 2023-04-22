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
                    My name is Leonardo Valdetaro and I am passionate about technology and innovation. I am a web developer with experience in design and front-end development. 
                </p>
                <p className={Styles.sobre__container__text}>
                    Over the years, I have developed a passion for creating incredible and functional interfaces that not only meet the users' needs but also impress them. My goal is to make the user experience as enjoyable as possible, making navigation and interaction with the site easier.
                </p>
                <p className={Styles.sobre__container__text}>
                    With technical skills in HTML, CSS, and JavaScript, I am constantly updating myself with the latest frameworks, technologies, and market trends. My knowledge in web development allows me to create responsive, accessible, and SEO-optimized sites, ensuring that they are easily found by search engines.
                </p>
                <p className={Styles.sobre__container__text}>
                    As a proactive collaborator, I am always looking for opportunities to learn and grow. With excellent communication skills, I am able to work in teams and contribute to a collaborative and productive environment.
                </p>
                <p className={Styles.sobre__container__text}>
                    If you are looking for a passionate and experienced web developer who can turn your vision into reality, <Link className={Styles.sobre__container__link} to="/contatos">please contact me</Link>. I will be happy to talk about how I can help you achieve your online goals. <a href="https://read.cv/leonardovaldetaro" className={Styles.sobre__container__link}>Access my resume</a> and social medias.</p>
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