// src/components/BlockDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlockDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Block Detail for Block ID: {id}</h2>
      <p>More information about block {id} goes here.</p>
    </div>
  );
};

export default BlockDetail;
