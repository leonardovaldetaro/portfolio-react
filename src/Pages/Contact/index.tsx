import Styles from './Contatct.module.scss';

export default function Contact () {
    return (
        <section className={Styles.formContainer}>
            <article id='wrapper' className={Styles.formContainer__wrapper}>
                <form action='' className={Styles.form}>
                    <p className={Styles.form__field}>
                        <label className={Styles.form__field__label} htmlFor='name'>Name</label>
                        <input className={Styles['text-input']} id='name' name='name' required type='text' />
                    </p>
                    <p className={Styles.form__field}>
                        <label className={Styles.form__field__label} htmlFor='email'>E-mail</label>
                        <input className={Styles['text-input']} id='email' name='email' required type='email' />
                    </p>
                    <p className={Styles.form__field}>
                        <label className={Styles.form__field__label} htmlFor='message'>Message</label>
                        <textarea className={Styles['text-input']} id='message' name='message' required></textarea>
                    </p>
                    <p className={Styles.field__button}>
                        <input className={Styles.button} type='submit' value='Send Message' />
                    </p>
                </form>
            </article>
        </section>
    );
}