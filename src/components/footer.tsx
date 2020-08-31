import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Footer() {
    return (
        <footer style={{ backgroundColor: `lavenderblush` }}>
            <div className="list">
                
                    <p style={{ display: `inline`, marginLeft: `25px` }}>Create by GatsbyJS, Build with Love &copy; 2020 </p>
               
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/home">Sitemap</ListLink>
                    <ListLink to="/about/">RSS</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </div>
        </footer>
    );
}