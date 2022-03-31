import React from 'react';
import { Link } from 'react-router-dom';

const TableData = ({ tableData }) => {
  return (
    <div className='table-and-controller'>
      <>
        <div className='table container container-main'>
          <ul>
            <li>
              <Link to='/manage/articles/draft'>Draft</Link>
            </li>
            <li>
              <Link to='/manage/articles/out-to-publish'>Out to publish</Link>
            </li>
            <li>
              <Link to='/manage/articles/published'>Published</Link>
            </li>
            <li>
              <Link to='/manage/articles/review'>Review</Link>
            </li>
          </ul>

          {tableData.map(({ _id, title, createdAt, status }) => (
            <div className='table-card' key={_id}>
              <div className='table-item' id='title'>
                <h2>{title}</h2>
              </div>
              <div className='table-item' id='date'></div>
              <p>{createdAt}</p>
              <p>{status}</p>
              <div className='table-item' id='viewbutton'>
                <Link
                  className='button'
                  to={`/manage/articles/${_id}/${status}`}
                >
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default TableData;
