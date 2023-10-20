import React from 'react';
import { CardImg } from 'reactstrap';
import myAvatar from '../../assets/myAvatar.png';
const Avatar = () => {
    return (
        <CardImg
            style={{ height: '200px', width: '200px' }}
            src={myAvatar}
            alt="my avatar"
            className="rounded-circle img-fluid"
        />
    );
};

export default Avatar;
