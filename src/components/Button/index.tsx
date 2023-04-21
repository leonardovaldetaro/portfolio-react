import React from "react";
import Styles from './Button.module.scss';
import { Link } from "react-router-dom";

type props  = {
    children: string,
    type?: "button" | "submit" | "reset" | undefined
}

class Botao extends React.Component<props, {
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const { type="button" } = this.props;
        return (
            <Link className={Styles.botao} type={type} to={"/contatos"}>
                {this.props.children}
            </Link>
        )
    }
}

export default Botao;