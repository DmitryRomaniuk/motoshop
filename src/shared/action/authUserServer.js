export default (values) => {
    const myHeaders = new Headers({ 'Content-Type': 'application/json' });

  /* eslint-disable no-console */
  // console.log(values);
    return fetch('/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: myHeaders,
        cache: 'default',
    })
    .then(res => res.json())
    .then(res => console.log(res));
  /* eslint-enable no-console */
};
