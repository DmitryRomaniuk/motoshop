// @flow

import React from 'react';

export default ({ input, label, placeholder, type, id, meta: { touched, error, warning } }: {
    input: Object, label: string, type: string, meta: Object, placeholder: string, id: string
}) => (
  <div>
    <label className="col-12 text-center" htmlFor={id}>
      {label}
    </label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className="form-control" id={id} />
      {touched && ((error && <span> {error} </span>) || (warning && <span> {warning} </span>))}
    </div>
  </div>);
