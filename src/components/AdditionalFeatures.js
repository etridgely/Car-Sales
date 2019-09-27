import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addCarFeatures } from '../actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addCarFeatures={props.addCarFeatures} />
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
  mapStateToProps, { addCarFeatures }
) (AdditionalFeatures);
