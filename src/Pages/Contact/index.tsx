import Styles from './Contatct.module.scss';

export default function Contact () {
    return (
        <section className={Styles.formContainer}>
            <article id='wrapper' className={Styles.formContainer__wrapper}>
                <form action='' className='form'>
                    <p className='field required half'>
                        <label className='label required' htmlFor='name'>Name</label>
                        <input className='text-input' id='name' name='name' required type='text' />
                    </p>
                    <p className='field required half'>
                        <label className='label' htmlFor='email'>E-mail</label>
                        <input className='text-input' id='email' name='email' required type='email' />
                    </p>
                    <p className='field'>
                        <label className='label' htmlFor='message'>Message</label>
                        <textarea className='textarea' id='message' name='message' required></textarea>
                    </p>
                    <p className='field'>
                        <input className='button' type='submit' value='Send message' />
                    </p>
                </form>
            </article>
        </section>
    );
}