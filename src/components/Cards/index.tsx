import Card from './Card';
import Styles from './Cards.module.scss';
import CardsInfo from 'Data/cardsInfo.json';

export default function Cards () {
    return (
        <section className={Styles.cards}>
            {CardsInfo.map(item => (
                <Card 
                    key={item.id}
                    {...item}
                />
            ))}
        </section>
    );
}