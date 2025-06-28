
import { BackgroundLines } from '../../components/ui/background-lines';
import './homepage.scss';

const Homepage = () => {
  return (
      <BackgroundLines>
         <div className='Hometext'>
          <div className='Info'>
            Welcome to Chat Application
            <p>Your AI assistant</p>
          </div>
         </div>
      </BackgroundLines>
  )
}

export default Homepage
