import Styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';


export default function Menu () {
const rotasNav = [{
    label: 'Projects',
    to: '/'
},{
    label: 'About',
    to: '/sobre'
},{
    label: 'Contacts',
    to: '/contatos'
}]

    return (
        <nav 
            className={Styles.menu} 
            id='nav'
        >   
            <ul className={Styles.menu__list}>
                {rotasNav.map((rota, index) =>(
                    <li className={Styles.menu__list__item} key={index}>
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
    );
}