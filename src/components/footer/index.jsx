import React from "react";
import { Divisor, Info } from './styles';
import { Link } from "gatsby";

const Footer = () => {
    return (
        <Divisor>
            <Info>
                Carlos Barrios ©2021
            </Info>
            <Info>
                LAST UPDATED — Jul 17, 2021
            </Info>
            <Link to="#showcase">
                back to top
            </Link>
        </Divisor>
    )
}

export default Footer