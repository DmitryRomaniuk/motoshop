// @flow
import React from 'react';
import { connect } from 'react-redux';
import ShoppingTable from '../ShoppingTable';
import { choiceItem } from '../../action/user';


type Props = {
  authData: Object,
    shoppingCart: Object,
    onChoiceItem: Function,
}

const Protected = ({ authData, shoppingCart, onChoiceItem }: Props) => (
  <div className="container" >
    <div className="row">
      <h2 className="col-12 text-center">
        {`Welcome ${authData.get('name')}`}
      </h2>
      <br />
      <div className="col-12 text-center">
        Make an appointment at the service station:
      </div>
      <ShoppingTable
        shoppingCart={shoppingCart}
        onChoiceItem={onChoiceItem}
      />
    </div>
  </div>
);

const mapStateToProps = state => ({
    authData: state.user.get('data'),
    shoppingCart: state.user.getIn(['data', 'shoppingCart']),
});

const mapDispatchToProps = {
    onChoiceItem: choiceItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
