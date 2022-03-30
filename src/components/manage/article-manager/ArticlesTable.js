import React from 'react';
import { getArticlesByStatusAndUserId } from '../../../api/articles';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function ArticlesTable() {
  const [tableData, setTableData] = React.useState([]);
  const { status } = useParams();
  React.useEffect(() => {
    const getData = async () => {
      const articles = await getArticlesByStatusAndUserId(status);
      setTableData(articles);
    };

    getData();
  }, [status]);

  console.log('ARTICLES ARE', tableData);

  function handleForm(articleId) {
    if (location.pathname === '/manage/articles/status/draft') {
      return `/manage/article/${articleId}/draftForm`;
    }
    if (location.pathname === '/manage/articles/status/editor') {
      return `/manage/article/${articleId}/senttoeditorForm`;
    }
    if (location.pathname === '/manage/articles/status/published') {
      return `/manage/article/${articleId}/publishedForm`;
    }
    if (location.pathname === '/manage/articles/status/review') {
      return `/manage/article/${articleId}/reviewForm`;
    }
  }

  return (
    <div className="table-and-controller">
      <h1> Table title </h1>
      <div className="table-controller">
        <Link className="button" to="/manage/articles/status/draft">
          DRAFTS
        </Link>
        <Link className="button" to="/manage/articles/status/editor">
          SENT TO EDITOR
        </Link>
        <Link className="button" to="/manage/articles/status/published">
          PUBLISHED
        </Link>
        <Link className="button" to="/manage/articles/status/review">
          REVIEW
        </Link>
      </div>

      {!tableData ? (
        <h1>...Loading</h1>
      ) : (
        <div className="table">
          {tableData.map((article) => (
            <div className="table-card" key={article.title}>
              <div className="table-item" id="title">
                <h1>{article.title}</h1>
              </div>
              <div className="table-item" id="date"></div>
              <p>{article.createdAt}</p>
              <p>{article.status}</p>
              <div className="table-item" id="viewbutton">
                <Link className="button" to={handleForm(article._id)}>
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ArticlesTable;
