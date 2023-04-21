import Styles from './CardFull.module.scss';
import ImageCardFull from 'assets/imagem_posts_cover_full.jpg';

export default function CardFull () {
    return (
        <article className={Styles.cardFull}>
            <img src={ImageCardFull} alt="Imagem full" />
            <div className={Styles.cardFull__container}>
                <h2 className={Styles.cardFull__title}>Teste</h2>
                <h3 className={Styles.cardFull__tag}>teste</h3>
                <p className={Styles.cardFull__descricao}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam suscipit consectetur odio, malesuada venenatis nulla posuere eu. 
                    Donec sit amet quam et urna tincidunt faucibus.
                </p>
            </div>
        </article>
    );
}