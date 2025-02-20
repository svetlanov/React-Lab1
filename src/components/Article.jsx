function Article(props) {
    const { text, title } = props

    return (
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
   }

export default Article;