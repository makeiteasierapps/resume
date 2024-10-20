import React from 'react';
import { useParams } from 'react-router-dom';
import backEndWithNode from '../assets/badges/Backend_with_Node.png';
import dataStructures from '../assets/badges/Data_Structure_and_Algorithms_with_Python.png';
import devOps from '../assets/badges/DevOps_Course_Certificate.png';
import frontEndWeb from '../assets/badges/Front_End_Web_and_Mobile_Development.png';
import frontendHonors from '../assets/badges/frontend_honors.png';
import fullstackHonors from '../assets/badges/fullstack_honors.png';
import javascriptFundamentals from '../assets/badges/JavaScript_Fundamentals.png';
import mseDevOps from '../assets/badges/mseDevOps.png';
import reactCourse from '../assets/badges/React_Course_Certificate.png';
import reactNative from '../assets/badges/React_Native.png';
import sqlDataModeling from '../assets/badges/SQL_and_Data_Modeling_with_Python.png';
import webDevFundamentals from '../assets/badges/Web-Dev-fundamentals.png';
const Certification = () => {
    const { certId } = useParams(); // Extract the dynamic part of the URL

    // Placeholder: you can use certId to fetch data or match with local data
    const certifications = {
        cert1: { title: "Backend With Node", image: backEndWithNode },
        cert2: { title: "Data Structure and Algorithms with Python", image: dataStructures },
        cert3: { title: "DevOps Course", image: devOps },
        cert4: { title: "Front End Web and Mobile Development", image: frontEndWeb },
        cert5: { title: "Frontend Honors", image: frontendHonors },
        cert6: { title: "Fullstack Honors", image: fullstackHonors },
        cert7: { title: "JavaScript Fundamentals", image: javascriptFundamentals },
        cert8: { title: "MSE DevOps", image: mseDevOps },
        cert9: { title: "React Course", image: reactCourse },
        cert10: { title: "React Native", image: reactNative },
        cert11: { title: "SQL and Data Modeling with Python", image: sqlDataModeling },
        cert12: { title: "Web Development Fundamentals", image: webDevFundamentals },
    };

    const cert = certifications[certId] || { title: "Unknown Certification", description: "No description available." };

    return (
        <div style={{ width: '100%', backgroundColor: 'red', height: '100%' }}>
            <h1>{cert.title}</h1>
            <img src={cert.image} alt={cert.title} />
        </div>
    );
};

export default Certification;
