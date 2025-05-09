import React from 'react'

export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.centerContent}>
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/69/69906.png" 
                    alt="travel logo"
                    style={styles.logo}
                />
                <h1 style={styles.title}>My Travel Journal</h1>
            </div>
        </header>
    )
}

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        background: 'linear-gradient(to right, #F55A5A, #FF8C42, #FFD700)',
        display: 'flex',
        justifyContent: 'center', // center the container
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
    },
    centerContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px' // spacing between logo and title
    },
    logo: {
        height: '35px'
    },
    title: {
        fontSize: '1.5rem',
        color: 'white',
        margin: 0,
        fontWeight: 'bold'
    }
}
