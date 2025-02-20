import Article from "./Article";
function ArticleList(props) {
    const { articles } = props;
    return (
        <>
            {
                articles.map(article => <Article title={article.title} text={article.text} />)
            }
        </>
    )
}

export default ArticleList;