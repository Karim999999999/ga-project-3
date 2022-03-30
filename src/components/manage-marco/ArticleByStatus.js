import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleByStatus = () => {
  const { status } = useParams();
  return <div>ArticleByStatus {status}</div>;
};

export default ArticleByStatus;
