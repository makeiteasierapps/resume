import { useState } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const Project = ({
    title,
    description,
    images,
    videoUrl = null,
    githubUrl,
    hostedUrl,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = images.map((image, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover',
                    }}
                />
                <CarouselCaption
                    captionText={description}
                    captionHeader={title}
                />
            </CarouselItem>
        );
    });

    return (
        <Card>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride={null}
                style={{ width: '70vw', height: '500px' }}
            >
                <CarouselIndicators
                    items={images}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
            {videoUrl && (
                <video width="320" height="240" controls>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{description}</CardText>
                <Button href={githubUrl}>Github</Button>
                {hostedUrl && <Button href={hostedUrl}>Live Demo</Button>}
            </CardBody>
        </Card>
    );
};

export default Project;
