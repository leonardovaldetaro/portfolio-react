import Styles from './Sobre.module.scss';
import ImageSobre from 'assets/img-field-sobre.png';
import { FaLinkedin, FaGithubSquare, FaBehanceSquare, FaDribbbleSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const rotasSocial = [{
    label: 'Linkedin',
    to: 'https://www.linkedin.com/in/leonardovaldetaro/',
    icon: <FaLinkedin size={18} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Github',
    to: 'https://github.com/leonardovaldetaro',
    icon: <FaGithubSquare size={18} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Behance',
    to: 'https://www.behance.net/leonardovaldetaro',
    icon: <FaBehanceSquare size={18} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Dribbble',
    to: 'https://dribbble.com/Valdetaro',
    icon: <FaDribbbleSquare size={18} color="rgb(32,50,62)" className={Styles.header__icon} />
}]

export default function Sobre () {
    return (
        <section className={Styles.sobre}>
            <figure className={Styles.sobre__imgContainer}>
                <img className={Styles.sobre__img} src={ImageSobre} alt="Imagem" />
            </figure>
            <article className={Styles.sobre__container}>
                <h2 className={Styles.sobre__container__subtitle}>Leonardo Valdetaro</h2>
                <h1 className={Styles.sobre__container__title}>Designer digital, desenvolvedor front-end.</h1>
                <p className={Styles.sobre__container__mainText}>Por muito tempo trabalhei em empresas de publicidade e marketing; na Casa &amp; Vídeo fui designer por mais de sete anos, trabalhei em empresas como a Bloom Design, Digitalvista entre outras. Dediquei alguns anos da minha vida ensinando minha profissão, tive experiências fantásticas como instrutor de produtos Adobe (Photoshop, Illustrator e InDesign). </p>
                <p className={Styles.sobre__container__text}>Meus projetos refletem minha paixão por esse setor, meu trabalho é repleto experimentação. Quando não estou na frente do computador trabalhando em um novo projeto, estou com a minha família, eu, minha esposa Flavia e minha filha Mariana. Ja fui um grande apaixonado pelo mar, mas agora estou um pouco afastado me dedicando a outras paixões; viagens, encontro com os amigos, culinária, músicas, cinema, livros e a incansável busca pela conhecimento.</p>
                <p>Conheça as minha experiências profissionais.<a href="/curriculo.html" className={Styles.sobre__container__link}>Acesse o meu Currículo.</a></p>
                <div className={Styles.sobre__mdSociais}>
                    <ul>
                        {rotasSocial.map((rota, index) =>(
                            <li className={Styles.header__navbar__list__item} key={index}>
                                <Link to={rota.to} target="_blank" title={rota.label}>{rota.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    );
}