const required = value => (value ? undefined : 'Required field');
const minLength4 = minimalLength(4);
const maxLength = value => maximalLength(12)(value);
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minNumber = value => (value < 18 ? 'Sorry, you must be at least 18 years old' : undefined);

const noSpecialSymbols = value => value && /[!@#$%^&*()]/g.test(value) ? 'Field can\'t contain special symbols' : undefined;

function minimalLength(minValue) {
    return function (value) {
        return (value.length > minValue ? undefined : `Must be ${minValue} characters or more`)
    }
}

function maximalLength(maxValue) {
    return function (value) {
        return (value.length < maxValue ? undefined : `Must be not more then ${maxValue} characters`)
    }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function uniqueEmail(values) {
    return sleep(2000)
        .then(
            () => {
                if (values.email === 'mail')
                    throw {email: `Email ${values.email} is already registered`}
            }
        )
}

export {required, minLength4, maxLength, number, noSpecialSymbols, minNumber, uniqueEmail};
