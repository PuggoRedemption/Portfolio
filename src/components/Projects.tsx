import Card from "react-bootstrap/Card";
import Image from "../assets/Shardrun.jpg";

//https://siyahas.itch.io/shardrun

// Project Cards
export default function Projects() {
    return (
        <Card className="bg-dark mx-auto text-white project-card">
            <a href="https://siyahas.itch.io/shardrun" target="_blank" rel="noopener noreferrer">
                <Card.Img src={Image}/>
                <Card.ImgOverlay className="card-overlay d-flex flex-column">
                    <Card.Title className="align-items-center mx-auto mt-auto card-title">ShardRun</Card.Title>
                    <Card.Text className="align-items-center mx-auto mb-auto card-text">Test Details</Card.Text>
                </Card.ImgOverlay>
            </a>
        </Card>
    );
}