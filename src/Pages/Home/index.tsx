import Styles from './Home.module.scss';
import ImageTopo from 'assets/imagem-principal-cover.jpg';
import Recentes from './Recentes';
import Botao from 'components/Button';
import Cta from './Cta';

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
                    <Botao type="button">
                        Contact me
                    </Botao>
                </div>
                <img src={ImageTopo} alt="imagem topo" className={Styles.home__img} />
                <div className={Styles.home__divider}></div>
                <Cta />
                <Recentes />
            </article>
        </>
    );
}