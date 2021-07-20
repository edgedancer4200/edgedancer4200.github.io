import React from "react";
import { Divisor, Info } from './styles';
import { Link } from "gatsby";

// data
import data from "../../../data.json";

const Footer: React.FC = () => {
    return (
        <Divisor>
            <Info>{ data.footer.main }</Info>
            <Info>{ data.footer.secondary }</Info>
            <Link to="#showcase">
                back to top
            </Link>
        </Divisor>
    )
}

export default Footer