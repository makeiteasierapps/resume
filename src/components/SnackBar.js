import React from 'react';
import { Alert } from 'reactstrap';

const MySnackBar = ({ open, handleClose, message, severity }) => {
    return (
        <div>
            <Alert color={severity} isOpen={open} toggle={handleClose}>
                {message}
            </Alert>
        </div>
    );
};

export default MySnackBar;
