import Styles from './Home.module.scss';
import ImageTopo from 'assets/7118756_3426523.png';
import Recentes from './Recentes';
import Cta from './Cta';
import CallToWork from './CallToWork';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
            <article className={Styles.home}>
                <div className={Styles.container}>
                    <h2 className={Styles.container__name}>
                        Leonardo Valdetaro
                    </h2>
                    <h1 className={Styles.container__title}>
                        Frontend web developer,<br /> Digital designer.
                    </h1>
                    <p className={Styles.container__text}>
                    As a front-end web developer and digital designer, I'm passionate about creating professional, modern, and search engine-optimized websites that stand out on the internet and attract more customers.
                    </p>
                    <div className={Styles.container__botaoWraper}>
                    <Link className={Styles.container__botaoWraper__link} to={"/contatos"}>Contact</Link>
                    or
                    <Link className={Styles.container__botaoWraper__link} to={"/sobre"}>Read About Me</Link>
                    </div>
                </div>
                <img src={ImageTopo} alt="imagem topo" className={Styles.home__img} />
                <Cta />
                <Recentes />
                <CallToWork />
            </article>
        </>
    );
}