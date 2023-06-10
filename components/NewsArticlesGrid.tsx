import { NewsArticle } from "@/models/NewsArticles";
import NewsArticlesEntry from "./NewsArticlesEntry";
import { Row, Col } from "react-bootstrap";

interface NewsArticlesGridProps{
    articles: NewsArticle[],
}

const NewsArticlesGrid = ({articles} : NewsArticlesGridProps) => {
    return (
        // <Row xs={1} sm={2} xl={3} className="g-4">
        //     {articles.map(article => (
        //         <Col key={article.url}>
        //             <NewsArticlesEntry article={article}/>
        //         </Col>
        //     ))}
        // </Row>
        <Row xs={1} sm={2} xl={3} className="g-4">
        {articles.map(article => (
            <Col key={article.url}>
                <NewsArticlesEntry article={article}/>
            </Col>
        ))}

        </Row>
    );
}
 
export default NewsArticlesGrid;