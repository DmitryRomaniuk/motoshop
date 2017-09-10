// @flow
import React from 'react';
import { connect } from 'react-redux';

type Props = {
  authData: Object,
}

const Admin = ({ authData }: Props) => (
  <div className="container" >
    <div className="row col-12 text-center">
      {`Welcome admin user: ${authData.name}. You must be logged in as an admin if you are seeing this page.`}
    </div>
  </div>);

export default connect(state => ({ authData: state.user.get('data').toJS() }))(Admin);
