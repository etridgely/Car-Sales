import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { ADD_CAR_FEATURES } from '../actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} ADD_CAR_FEATURES={props.ADD_CAR_FEATURES} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    store: state.store
  }
}

export default connect (
  mapStateToProps, {ADD_CAR_FEATURES}
) (AdditionalFeatures);
