import Styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/simbol.svg';
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
        label: 'Projects',
        to: '/'
    }];

    const rotaSobre = [{
        label: 'About',
        to: '/sobre'
    }];

    const rotaMail = [{
        label: 'Contacts',
        to: '/contatos',
    }];

    return (
        <header className={Styles.header}>
            <div className={Styles.header__logo}>
                {rotaLogo.map((rota, index) => (
                    <figure key={index}>
                        <Link to={rota.to} preventScrollReset={true}>{rota.label}</Link>
                    </figure>
                ))}
            </div>
            <div className={Styles.header__title}>
                {rotaName.map((rota, index) => (
                    <div key={index}>
                        <Link to={rota.to} preventScrollReset={true}>{rota.label}</Link>
                    </div>
                ))}
            </div>
            <div className={Styles.header__portfolio}>
                {rotaPortfolio.map((rota, index) => (
                    <div key={index}>
                        <NavLink 
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    preventScrollReset={true}
                    to={rota.to}
                    >
                        {rota.label}
                    </NavLink>
                    </div>
                ))}
            </div>
            <div className={Styles.header__sobre}>
                {rotaSobre.map((rota, index) => (
                    <div key={index}>
                        <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    to={rota.to}
                    preventScrollReset={true}
                    >
                        {rota.label}
                    </NavLink>
                    </div>
                ))}
            </div>
            <div className={Styles.header__mail}>
                {rotaMail.map((rota, index) => (
                    <div key={index} className={Styles.header__mailContainer}>
                        <NavLink
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        to={rota.to}
                        preventScrollReset={false}
                        >
                            {rota.label}
                        </NavLink>
                    </div>
                ))}
            </div>
        </header>
    );
}