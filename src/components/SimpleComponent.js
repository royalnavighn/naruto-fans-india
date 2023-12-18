import { Link } from 'react-router-dom'


function SimpleComponent() {
    return (
        <>
            <div>SimpleComponent</div>
            <Link to='characters' className='navbar__item'> sample </Link>
        </>

    );
}

export default SimpleComponent;