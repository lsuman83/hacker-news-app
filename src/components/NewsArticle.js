
function NewsArticle ({ article }) {
    return(
        <div>
            <h1 className='font-medium'>
                {article.title}
            </h1>

            <p>
                <span className='italic'>by {article.author}</span>
                <br></br>
                <a className="text-blue-400 underlined" href={article.url}>
                    {article.url}
                </a>
            </p>
        </div>
    )
}

export default NewsArticle;