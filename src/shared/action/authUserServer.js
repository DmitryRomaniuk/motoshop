import { push } from 'react-router-redux';

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
        dispatch(push('/home'));
    });
  /* eslint-enable no-console */
};
