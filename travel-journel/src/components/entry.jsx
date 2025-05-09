import React from "react"
import Eiffel_logo from '../assets/pexels-suissounet-1530259.jpg'
import TajMahal from '../assets/tajmahal.jpg'
import GreatWall from '../assets/greatwall.jpg'
import StatueOfLiberty from '../assets/statueofliberty.jpg'


export default function MainContent() {
    const places = [
        {
            name: "Eiffel Tower",
            country: "France",
            image: Eiffel_logo,
            mapLink: "https://www.google.com/maps?q=Eiffel+Tower,+Paris",
            description: "The Eiffel Tower is one of the most iconic landmarks in the world, located in the heart of Paris. Built in 1889, it stands at 300 meters and offers breathtaking views of the city."
        },
        {
            name: "Taj Mahal",
            country: "India",
            image: TajMahal,
            mapLink: "https://www.google.com/maps?q=Taj+Mahal,+India",
            description: "Located in Agra, the Taj Mahal is a UNESCO World Heritage site and a symbol of love. This ivory-white marble mausoleum attracts millions of visitors every year."
        },
        {
            name: "Great Wall of China",
            country: "China",
            image: GreatWall,
            mapLink: "https://www.google.com/maps?q=Great+Wall+of+China",
            description: "Stretching over 13,000 miles, the Great Wall is an ancient series of fortifications built to protect Chinese empires. It's one of the New Seven Wonders."
        },
        {
            name: "Statue of Liberty",
            country: "USA",
            image: StatueOfLiberty,
            mapLink: "https://www.google.com/maps?q=Statue+of+Liberty,+New+York",
            description: "Gifted by France to the U.S., the Statue of Liberty stands as a symbol of freedom. Located in New York Harbor, it has welcomed immigrants since 1886."
        }
    ]

    return (
        <main style={styles.main}>
            {places.map((place, index) => (
                <div style={styles.card} key={index}>
                    <img src={place.image} alt={place.name} style={styles.image} />
                    <div style={styles.details}>
                        <div style={styles.location}>
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/684/684908.png" 
                                alt="marker" 
                                style={styles.marker}
                            />
                            <span style={styles.country}>{place.country}</span>
                            <a 
                                href={place.mapLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={styles.mapLink}
                            >
                                View on Google Maps
                            </a>
                        </div>
                        <h2 style={styles.placeName}>{place.name}</h2>
                        <p style={styles.description}>{place.description}</p>
                    </div>
                </div>
            ))}
        </main>
    )
}

const styles = {
    main: {
        backgroundColor: '#fdfdfd',
        padding: '100px 20px 40px',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        margin: '40px auto',
        maxWidth: '1000px',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
    },
   image: {
    width: '300px',
    height: '200px',     // Set a fixed height
    objectFit: 'cover',  // Ensures image is cropped to fit
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
},
    details: {
        padding: '1.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '0.75rem',
        fontSize: '0.95rem',
        color: '#555',
    },
    marker: {
        width: '20px',
        height: '20px',
    },
    country: {
        fontWeight: '600',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    mapLink: {
        marginLeft: 'auto',
        color: '#F55A5A',
        textDecoration: 'none',
        fontWeight: '500',
    },
    placeName: {
        fontSize: '2rem',
        margin: '0.5rem 0',
        fontWeight: '700',
        color: '#2b2b2b',
    },
    description: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#444',
    }
}
