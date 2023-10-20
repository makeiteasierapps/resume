import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import AboutMe from './AboutMe';
import Avatar from './Avatar';

const AboutMeAndAvatar = () => {
    const theme = useContext(ThemeContext);
    return (
        <div
            style={{
                backgroundColor: theme.lightBlue,
                color: theme.deepPurple,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                minHeight: '700px',
            }}
        >
            <div style={{ width: '40%' }}>
                <AboutMe />
            </div>
            <div style={{ width: '20%' }}>
                <Avatar />
            </div>
        </div>
    );
};

export default AboutMeAndAvatar;
