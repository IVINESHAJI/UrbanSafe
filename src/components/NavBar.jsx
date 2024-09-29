import Image from '../assets/UrbanSafe.webp';
import '../css/NavBar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbArrowsCross } from 'react-icons/tb';
import { useState } from 'react';

function NavBar() {
  const [isHam, setHam] = useState(false);

  const toggleHam = () => {
    setHam(!isHam);
  };

  return (
    <div style={{ position: 'relative' }}>
      <nav
        style={{
          backgroundColor: 'rgb(249, 142, 251)',
          height: '5em',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: '1em',
          paddingRight: '1em',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="navBarLogo">
          <img src={Image} alt="UrbanSafe Logo" style={{ width: '4em', borderRadius: '50%' }} />
        </div>

        <div style={{ fontSize: '3em', color: 'black' }}>UrbanSafe</div>

        <div onClick={toggleHam} style={{ cursor: 'pointer' }}>
          {isHam ? (
            <TbArrowsCross style={{ fontSize: '2em', color: 'black' }} />
          ) : (
            <RxHamburgerMenu style={{ fontSize: '2em', color: 'black' }} />
          )}
        </div>
      </nav>

      {isHam && (
        <div
          style={{
            backgroundColor: 'rgb(249, 142, 251)',
            position: 'absolute',
            right: '0',
            top: '5em',
            width: '15vw',
            textAlign: 'center',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 9,
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '1em', borderBottom: '1px solid white' }}>
              <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
                Home
              </a>
            </li>
            <li style={{ padding: '1em', borderBottom: '1px solid white' }}>
              <a href="/crime" style={{ textDecoration: 'none', color: 'black' }}>
                Crime Details
              </a>
            </li>

            <li style={{ padding: '1em', borderBottom: '1px solid white' }}>
              <a href="/developers_page" style={{ textDecoration: 'none', color: 'black' }}>
                Developer&#39;s Page
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;