import Build from '../assets/building.png';
import Build1 from '../assets/building2.png';
import Build4 from '../assets/building4.png';
import Build5 from '../assets/building5.png';
import Image from '../assets/UrbanSafe.webp'
import '../css/mainPage.css'

function MainPage() {
    return (
        <>
            <main>
                <section style={{ minHeight : "100vh", marginBottom : '0', paddingBottom : '0' }}>
                    <div className="pattern-collage">
                        <img src={Build} alt="Building 1" />
                        <img src={Build1} alt="Building 2" />
                        <img src={Build4} alt="Building 3" />
                        <img src={Build5} alt="Building 4" />
                        <p className='quote'>Building safer<br/> communities for a<br/> brighter tomorrow.</p>
                    </div>

                    <button
  style={{
    top: '36em',
    left: '70%',
    position: 'absolute',
    textDecoration: 'none',
    color: 'black',
    width: '15em',
    height: '4em',
    backgroundColor: 'rgb(249, 142, 251)',
    border: 'none',
    borderRadius: '5px',
    
    transition: 'box-shadow 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.boxShadow = '0 0 1.5em 0.5em rgba(249, 142, 251, 0.75)';
    e.target.style.cursor = 'pointer';
  }}
  onMouseLeave={(e) => {
    e.target.style.boxShadow = 'none';
  }}
>
  <a
    href="/crime"
    style={{
      fontSize: '18px',
      textDecoration: 'none',
      fontFamily: 'Playfair Display SC',
      color: 'white',
      fontWeight: '700',
    }}
  >
    Crime Analysis
  </a>
</button>

                </section>
                <section>
                    <div style={{ 
                        fontFamily : "Playfair Display SC", 
                        color : 'black', 
                        fontWeight : '1000',
                        display : 'flex', 
                        justifyContent : 'center',
                        alignItems : 'center',
                        fontSize : '3vw',
                        backgroundColor: '#f9f9f9',
                        paddingTop : '2em'
                        }}>
                        At A Glance
                    </div>
                </section>
                <section style={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f9f9f9' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginBottom : '10vh' }}>
                        <div style={{ 
                            fontFamily: 'Playfair Display, serif', 
                            color: 'black', 
                            fontSize: '2em', 
                            marginBottom: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                            padding: '10px', 
                            backgroundColor: 'white' 
                        }}>
                            Our Mission: Creating Safer Cities for Everyone
                        </div>
                        <div style={{ 
                            fontFamily: 'Arial, sans-serif', 
                            color: '#333', 
                            lineHeight: '1.6', 
                            maxWidth: '600px',
                            marginLeft : '2em'
                        }}>
                            At Urbansafe, we believe that safety is a fundamental right for every individual. Our mission is to transform urban spaces into secure environments where communities can thrive. By leveraging innovative technology and community-driven initiatives, we aim to empower citizens and local organizations to take an active role in promoting safety. Together, we can create neighborhoods that are not only safe but also vibrant and welcoming.
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginBottom : '10vh' }}>
                        <div style={{ 
                            fontFamily: 'Playfair Display, serif', 
                            color: 'black', 
                            fontSize: '2em', 
                            marginBottom: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                            padding: '10px', 
                            backgroundColor: 'white' 
                        }}>
                            Community Engagement: Building a Culture of Safety
                        </div>
                        <div style={{ 
                            fontFamily: 'Arial, sans-serif', 
                            color: '#333', 
                            lineHeight: '1.6', 
                            maxWidth: '600px',
                            marginLeft : '2em'
                        }}>
                            Safety is not just about systems and technology; it’s about people and relationships. At Urbansafe, we prioritize community engagement as a vital part of our approach. We organize workshops, seminars, and outreach programs to educate residents about safety measures, emergency preparedness, and crime prevention strategies. By fostering collaboration among residents, law enforcement, and local businesses, we cultivate a culture of safety that strengthens our communities and builds trust.                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', marginBottom : '10vh' }}>
                        <div style={{ 
                            fontFamily: 'Playfair Display, serif', 
                            color: 'black', 
                            fontSize: '2em', 
                            marginBottom: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                            padding: '10px', 
                            backgroundColor: 'white' 
                        }}>
                            Innovative Solutions for Urban Safety Challenges
                        </div>
                        <div style={{ 
                            fontFamily: 'Arial, sans-serif', 
                            color: '#333', 
                            lineHeight: '1.6', 
                            maxWidth: '600px',
                            marginLeft : '2em'
                        }}>
                            In an ever-evolving urban landscape, traditional safety measures may not be enough. Urbansafe is committed to exploring and implementing innovative solutions to address contemporary safety challenges. From smart surveillance systems to mobile safety apps, we harness technology to enhance urban safety. Our solutions are designed to be user-friendly, ensuring that everyone can participate in creating a safer environment. Join us as we explore new frontiers in urban safety, making our cities more secure for future generations.                        </div>
                    </div>
                </section>

                <div style={{ backgroundColor : 'rgb(249, 142, 251)', height : '8em', display : 'flex', justifyContent : 'space-around', alignItems : 'center' }}>
                    <div> 
                        <img src={ Image } style={{ height : '10vh', borderRadius : '50%' }}/>
                    </div>
                    <div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display : 'flex' }}>
                            <li style={{ padding: '1em' }}>
                            <a href="/" style={{ textDecoration: 'none', color: 'black' }}>
                                Home
                            </a>
                            </li>
                            <li style={{ padding: '1em' }}>
                            <a href="/crime" style={{ textDecoration: 'none', color: 'black' }}>
                                Crime Details
                            </a>
                            </li>

                            <li style={{ padding: '1em' }}>
                            <a href="/developers_page" style={{ textDecoration: 'none', color: 'black' }}>
                                Developer&#39;s Page
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
        </>
    );
}

export default MainPage;
