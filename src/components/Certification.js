import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Certification.scss';
import backEndWithNode from '../assets/badges/Backend_with_Node.png';
import dataStructures from '../assets/badges/Data_Structure_and_Algorithms_with_Python.png';
import devOps from '../assets/badges/DevOps_Course_Certificate.png';
import javascriptFundamentals from '../assets/badges/JavaScript_Fundamentals.png';
import reactCourse from '../assets/badges/React_Course_Certificate.png';
import reactNative from '../assets/badges/React_Native.png';
import sqlDataModeling from '../assets/badges/SQL_and_Data_Modeling_with_Python.png';
import webDevFundamentals from '../assets/badges/Web-Dev-fundamentals.png';
const Certification = () => {
    const { certId } = useParams();

    const certifications = {
        backendWithNode: { title: 'Backend With Node', image: backEndWithNode },
        dataStructures: {
            title: 'Data Structure and Algorithms with Python',
            image: dataStructures,
        },
        devOpsCourse: { title: 'DevOps Course', image: devOps },
        javascriptFundamentals: {
            title: 'JavaScript Fundamentals',
            image: javascriptFundamentals,
        },
        frontEndWebWithReact: { title: 'React Course', image: reactCourse },
        reactNative: { title: 'React Native', image: reactNative },
        sqlDataModeling: {
            title: 'SQL and Data Modeling with Python',
            image: sqlDataModeling,
        },
        webDevFundamentals: {
            title: 'Web Development Fundamentals',
            image: webDevFundamentals,
        },
    };

    const cert = certifications[certId] || {
        title: 'Unknown Certification',
        description: 'No description available.',
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <img
                src={cert.image}
                alt={cert.title}
                className="img-fluid certification-image"
            />
        </div>
    );
};

export default Certification;
