import './styles.css';
import {ReactComponent as Main} from './main.svg'
import Footer from '../Footer'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='home-content'>
                    <div className='home-actions'>
                        <h1 className='home-title'>
                            Make your order <br/> and we  will deliver <br/>to you!
                        </h1>
                        <h3 className='home-subtitle'>
                            Place your order and in a few minutes <br/> it'll be in your door
                        </h3>
                        <Link to='/orders' className='home-btn-order'>
                            MAKE YOUR ORDER
                        </Link>
                    </div>
                    <div className='home-image'>
                        <Main/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;