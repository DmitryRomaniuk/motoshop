import { push } from 'react-router-redux';
import { login } from './user';

export default values => (dispatch) => {
    const myHeaders = new Headers({ 'Content-Type': 'application/json' });

  /* eslint-disable no-console */
  // console.log(values);
    return fetch('/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: myHeaders,
        credentials: 'include',
        cache: 'default',
    })
    .then(res => res.json())
    .then((res) => {
        localStorage.setItem('token', res);
        dispatch(login(values));
        dispatch(push('/home'));
    });
  /* eslint-enable no-console */
};
