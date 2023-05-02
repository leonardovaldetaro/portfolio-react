import Styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/logotipo-lv.svg';
import { MdEmail, MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';


export default function Header () {
    const rotaLogo = [{
        label: <Logo className={Styles.header__img} />,
        to: '/'
    }];

    const rotaName = [{
        label: <span className={Styles.header__name}>Leonardo Valdetaro</span>,
        to: '/'
    }];

    const rotaPortfolio = [{
        label: 'Portfolio',
        to: '/portfolio'
    }];

    const rotaSobre = [{
        label: 'About',
        to: '/sobre'
    }];

    const rotaMail = [{
        label: 'Contacts',
        to: '/contatos',
        icon: <MdEmail size={18} color="rgb(32,50,62)" className={Styles.header__icon} />
    }];

    const rotasNav = [{
        label: 'Home',
        to: '/'
    },{
        label: 'Portfolio',
        to: '/portfolio'
    },{
        label: 'About',
        to: '/sobre'
    },{
        label: 'Contacts',
        to: '/contatos'
    }]


    return (
        <header className={Styles.header}>
            <div className={Styles.header__logo}>
                {rotaLogo.map((rota, index) => (
                    <figure key={index}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </figure>
                ))}
            </div>
            <div className={Styles.header__title}>
                {rotaName.map((rota, index) => (
                    <div key={index}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </div>
                ))}
            </div>
            <div className={Styles.header__portfolio}>
                {rotaPortfolio.map((rota, index) => (
                    <div key={index}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </div>
                ))}
            </div>
            <div className={Styles.header__sobre}>
                {rotaSobre.map((rota, index) => (
                    <div key={index}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </div>
                ))}
            </div>
            <div className={Styles.header__mail}>
                {rotaMail.map((rota, index) => (
                    <div key={index} className={Styles.header__mailContainer}>
                        <Link to={rota.to}>{rota.label}{rota.icon}</Link>
                    </div>
                ))}
            </div>
            <nav className={Styles.header__navbar} id='nav'>
                <ul className={Styles.header__navbar__list}>
                    <div className={Styles.menu__container}>
                        <MdKeyboardDoubleArrowDown size={18} color="rgb(32,50,62)" className={Styles.menu__container__icon} />
                        <h2 className={Styles.menu__container__title}>
                            Menu
                        </h2>
                    </div>
                    {rotasNav.map((rota, index) =>(
                        <li className={Styles.header__navbar__list__item} key={index}>
                            <NavLink 
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                                to={rota.to}
                            >
                                {rota.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}