
function NewsArticle ({ article }) {
    return(
        <div>
            <h1>
                {article.title}
            </h1>

            <p>
                By {article.author}
            
                <a className="text-blue-400 underlined" href={article.url}>
                    {article.url}
                </a>
            </p>
        </div>
    )
}

export default NewsArticle;