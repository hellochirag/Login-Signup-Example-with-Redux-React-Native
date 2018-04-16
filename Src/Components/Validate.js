export const required = value => value ? undefined : 'This Field is Required';

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;

export const minValue18 = minValue(18);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

export const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;

export const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined;

export const pass = value =>
    value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[a-zA-Z0-9]{8,}$/i.test(value)?
        'Invalid Password' :undefined;
