import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  const src = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;
  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={src} alt="" style={{ width: "80%" }} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
