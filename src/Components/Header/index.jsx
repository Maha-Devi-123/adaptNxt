import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    return (
        <div className='header-con'>
            <Link className='link-item' to='/'>Dashboard</Link>
            <Link className='link-item' to='/orders' >Orders</Link>
            <Link className='link-item' to='/inventory' >Inventory</Link>
            <Link className='link-item' to='/shipping' >Shipping</Link>
        </div>
    )
}

export default Header