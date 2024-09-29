import React from "react";
import Ivine from '../assets/Ivinejpeg.jpeg';
import Vijay from '../assets/Vijay.jpeg';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Developer() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', color: 'black', fontFamily: 'Playfair Display SC', fontWeight: '1000', fontSize: '2vw', margin: '20px 0' }}>
                Developer&#39;s Page
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '4vh', margin: '4vh' }}>
                {/* Developer 1 */}
                <div style={{ textAlign: 'center' }}>
                    <img src={Ivine} style={{ borderRadius: '25%', height: '40vh' }} alt="Ivine Shaji Kakkanat"/>
                    <p style={{ color: 'black', fontWeight: '700' }}>
                        Name: Ivine Shaji Kakkanat
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                        <a href="https://www.linkedin.com/in/ivine-shaji-kakkanat-88bb06251" target="_blank" rel="noopener noreferrer" style={{ 
                            color: 'black', 
                            fontWeight: '700', 
                            textDecoration: 'none',
                            display: 'flex', 
                            alignItems: 'center'
                        }}>
                            <FaLinkedin style={{ height: '2em', marginRight: '0.5em', color: 'black' }} />
                            LinkedIn
                        </a>
                        <a href="https://github.com/IVINESHAJI" target="_blank" rel="noopener noreferrer" style={{ 
                            color: 'black', 
                            fontWeight: '700', 
                            textDecoration: 'none',
                            display: 'flex', 
                            alignItems: 'center'
                        }}>
                            <FaGithub style={{ height: '2em', marginRight: '0.5em', color: 'black' }} />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Developer 2 */}
                <div style={{ textAlign: 'center' }}>
                    <img src={Vijay} style={{ borderRadius: '25%', height: '40vh' }} alt="Vijay Varadarajan"/>
                    <p style={{ color: 'black', fontWeight: '700' }}>
                        Name: Vijay Varadarajan
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>
                        <a href="https://www.linkedin.com/in/vijay-varadarajan-630597200/" target="_blank" rel="noopener noreferrer" style={{ 
                            color: 'black', 
                            fontWeight: '700', 
                            textDecoration: 'none',
                            display: 'flex', 
                            alignItems: 'center'
                        }}>
                            <FaLinkedin style={{ height: '2em', marginRight: '0.5em', color: 'black' }} />
                            LinkedIn
                        </a>
                        <a href="https://github.com/vijay-varadarajan/" target="_blank" rel="noopener noreferrer" style={{ 
                            color: 'black', 
                            fontWeight: '700', 
                            textDecoration: 'none',
                            display: 'flex', 
                            alignItems: 'center'
                        }}>
                            <FaGithub style={{ height: '2em', marginRight: '0.5em', color: 'black' }} />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Developer;
