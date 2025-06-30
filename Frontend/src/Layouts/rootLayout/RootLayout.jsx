import './rootLayout.scss';
import { Outlet, Link,useNavigate } from 'react-router-dom'
import { MdLogout } from "react-icons/md";

const RootLayout = () => {
  const isDashBoard = window.location.href.includes('/dashboard');
   const navigate = useNavigate();

  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'> 
                <img src="/logo.png" alt="" />
                <span>CHAT AI</span>
            </Link>
            <div className="user">
            { isDashBoard?
                (
                   <MdLogout className='logout-button'/> 
                ):
                (<button onClick={() => navigate('/signin')}>
                    Sign In
                </button>)
            }
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout
