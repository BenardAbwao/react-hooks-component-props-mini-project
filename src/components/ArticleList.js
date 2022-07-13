import Article from "./Article";

function ArticleList(props){
    const articles = props.posts.map(post => (
      <Article
        key = {post.id}
        date = {post.date}
        preview = {post.preview}
        title = {post.title}
      />
      
    ));
    return <main>{articles}</main>
}

export default ArticleList;