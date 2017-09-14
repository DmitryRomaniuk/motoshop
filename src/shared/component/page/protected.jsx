// @flow
import React from 'react';
import { connect } from 'react-redux';

type Props = {
  authData: Object,
}

const Protected = ({ authData }: Props) => (
  <div className="container" >
    <div className="row col-12 text-center">
      {`This is a protected page, you must be logged in if you are seeing this. Welcome ${authData.name}`}
    </div>
  </div>
);
export default connect(state => ({ authData: state.user.get('data').toJS() }))(Protected);
