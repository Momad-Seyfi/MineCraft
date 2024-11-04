// src/components/BlockDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlockDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2></h2>
      <p></p>
    </div>
  );
};

export default BlockDetail;
