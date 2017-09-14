// @flow

import { SubmissionError } from 'redux-form';

export default (values: { login: string, password: string }) => {
  // console.log(values);
  // eslint-disable-next-line no-control-regex
    const expr = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!values.login) {
        return new SubmissionError({
            username: 'login is empty',
            _error: 'Fill the form, please!',
        });
    } else if (!expr.test(values.login)) {
        return new SubmissionError({
            username: 'email is incorrect',
            _error: 'Fill the form, please!',
        });
    } else if (!values.password) {
        return new SubmissionError({
            username: 'password is empty',
            _error: 'Fill the form, please!',
        });
    } else if (values.password.length < 8) {
        return new SubmissionError({
            username: 'Must be 8 characters or more',
            _error: 'Fill the form, please!',
        });
    }
    return 'submited';
};
