import React, { useEffect, useState } from 'react';
import Helpers from '../../../helpers/helpers.js';
import TableBody from './subComponents/TableBody.jsx';

const ComparisonModal = (props) => {

  const {isOpen, closeModal, currentProductCharacteristics, currentProductName, cardInfo, cardName} = props;

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
                <th className='right'>{currentProductName || 'no product name'}</th>
              </tr>
            </thead>
            <TableBody
              productCharacteristics={currentProductCharacteristics}
              cardInfo={cardInfo}
            />
          </table>
        </div>
      </section>
    </div>
  )
};

export default ComparisonModal;