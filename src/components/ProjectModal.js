import { useContext } from 'react';
import { Container, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';


const ProjectModal = ({ images, modal, setModal, slideIndex }) => {
    const theme = useContext(ThemeContext);
    return (
        <Modal isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader>
                <Button
                    close
                    onClick={() => setModal(!modal)}
                    style={{
                        backgroundColor: theme.darkTeal,
                        borderColor: 'white',
                        margin: '0.5rem',
                    }}
                />
            </ModalHeader>
            <ModalBody>
                <img src={images[slideIndex].image} alt={'Email Manager'} />
                <Container
                    className="description-container"
                    style={{
                        boxShadow: `0 0 13px   ${theme.darkTeal}`,
                    }}
                >
                    <h6 className="d-flex align-items-center text-center">
                        {images[slideIndex].description}
                    </h6>
                </Container>
            </ModalBody>
        </Modal>
    );
};

export default ProjectModal;
