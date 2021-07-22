import { Link } from 'react-router-dom';
import robot from '../images/Robot.png';

import './Header.css';

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return <Link className="headerlink-title" to={`/${page}`}>{title}</Link>;
};

const Header = () => {
    return (
        <>
      <div className='header'>
        <HeaderLink page='home' />
        <HeaderLink page='voters' />
        <HeaderLink page='register' />
        <HeaderLink page='ballots' />
        <HeaderLink page='elections' />
      </div>
      <div><br />
        <img src={robot} height={100} width={100} />
        <h1 style={{color: "F57222"}}>Team React Rookies - Developing cutting edge React components since yesterday!</h1> 
        <hr />
      </div>
      </>
    );
  };
  
  export default Header;