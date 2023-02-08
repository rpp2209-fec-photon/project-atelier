import React, { useEffect, useState } from 'react';
import Helpers from '../../../helpers/helpers.js';
import TableBody from './subComponents/TableBody.jsx';

const ComparisonModal = (props) => {

  const {isOpen, closeModal, currentProductMetadata, currentProductInfo, cardMetadata, cardName} = props;

  const className = isOpen ? 'modal show' : 'modal hide';

  return (
    <div className={className} onClick={closeModal}>
      <section className='modal-main'>
        <div className='modal-header'>
          <h5>Comparing</h5>
        </div>
        <div className='modal-body'>
          <table>
            <thead>
              <tr>
                <th className='left'>{cardName}</th>
                <th></th>
                <th className='right'>{currentProductInfo ? currentProductInfo.name : 'name'}</th>
              </tr>
            </thead>
            <TableBody
              productMetadata={currentProductMetadata}
              cardMetadata={cardMetadata}
            />
          </table>
        </div>
      </section>
    </div>
  )
};

export default ComparisonModal;