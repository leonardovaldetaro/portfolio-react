import Styles from "./Thanks.module.scss";

export default function Thanks () {
    return (
        <section className={Styles.thanks}>
            <h2 className={Styles.thanks__title}>Thank you for your interest in my services!</h2>
            <p className={Styles.thanks__text}>Your message has been received successfully, and I am excited about the opportunity to collaborate with you. I am ready to assist you in meeting your needs and providing customized solutions for your project.</p>
            <p className={Styles.thanks__text}>I will be in touch shortly to discuss further details and create a strategy that meets your expectations.</p>
            <p className={Styles.thanks__text}>In the meantime, feel free to explore more information about my services and browse through examples of my previous work. </p>
            <p className={Styles.thanks__text}>I appreciate the opportunity to work together and look forward to contributing to your success</p>
        </section>
    );
}