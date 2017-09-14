// @flow

export default (values: { login: string }) => {
    const warnings = {};
    if (values.login && values.login.length < 8) {
        warnings.login = 'Login is so short...';
    }
    return warnings;
};
