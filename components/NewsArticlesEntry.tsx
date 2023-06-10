
import { NewsArticle } from "@/models/NewsArticles";
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from "../assets/images/newspaper.png"
import styles from "../styles/NewsArticle.module.css"

interface NewsArticlesEntryProps{
    article : NewsArticle,
}

const NewsArticlesEntry = ({article : {title, description, url, urlToImage}} : NewsArticlesEntryProps) => {
    
    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined

    return ( 
        <a href={url}>
            <Card className="h-100">
                <Image
                    src={validImageUrl || placeholderImage}
                    width={500}
                    height={200}
                    alt="News article image"
                    className={`card-img-top ${styles.image}`}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    
                </Card.Body>
            </Card>
        </a>
    );
}
 
export default NewsArticlesEntry;