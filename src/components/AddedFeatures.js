import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';
import { REMOVE_CAR_FEATURES } from '../actions/index';


const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} REMOVE_CAR_FEATURES={props.REMOVE_CAR_FEATURES}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    car: state.car
  };
};


export default connect (
  mapStatetoProps,
    { REMOVE_CAR_FEATURES }
) (AddedFeatures);