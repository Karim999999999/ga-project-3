import React from 'react';
import articles from '../../../../../ga-project-3-api/db/data';
import { getArticlesByStatusAndUserId } from '../../../api/articles';

function ArticlesTable() {
  const [tableData, setTableData] = React.useState(null);
  React.useEffect(() => {
    const getData = async () => {
      const articles = await getArticlesByStatusAndUserId();
      setTableData(articles);
    };

    getData();
  }, []);

  console.log('ARTICLES ARE', tableData);

  return (
    <div className="table-and-cotroller">
      <h1> Articles </h1>
      <button></button>
      <button></button>
      <button></button>
      {articles.map((article) => (
        <div className="card" key={article.title}>
          <div className="title">
            <h1>{article.title}</h1>
          </div>
          <div className="date"></div>
          <div className="viewbutton"></div>
        </div>
      ))}
    </div>
  );
}
export default ArticlesTable;
