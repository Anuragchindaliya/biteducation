import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default NavLink;

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { pathName } = useParams();
    console.log(useParams())
    const isActive = exact ? pathName === href : pathName.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    if (props.mob) {
        props.onClick = () => {
            const body = document.querySelector("body")
            body.classList.remove("offcanvas-menu");
        };
    }



    return (<li {...props} >
        <Link to={href}>
            {children}
        </Link>
    </li>
    );
}