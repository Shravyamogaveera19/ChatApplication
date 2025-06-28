import './rootLayout.scss';
import { Outlet, Link } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'> 
                <img src="/logo.png" alt="" />
                <span>CHAT AI</span>
            </Link>
            <div className="user">
                <button>
                    <Link to='dashboard'>
                    USER
                    </Link>
                </button>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout
