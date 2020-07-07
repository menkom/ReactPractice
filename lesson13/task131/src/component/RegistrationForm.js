import React from 'react';
import {Field, reduxForm} from "redux-form";
import {
    maxLength,
    minLength4,
    minNumber,
    noSpecialSymbols,
    number,
    required,
    uniqueEmail
} from "./validation";
import InputField from "./InputField";

class RegistrationForm extends React.Component {

    render() {
        console.log('this.props:', this.props);
        const {handleSubmit} = this.props;
        return (
            //We have to pass method to prop onSubmit but in Component we get this prop as handleSubmit
            <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    label="Name"
                    type="text"
                    component={InputField}
                    placeholder="name"
                />
                <Field
                    name="surname"
                    label="Surname"
                    type="text"
                    component={InputField}
                    placeholder="surname"
                />
                <Field
                    name="username"
                    label="Username"
                    type="text"
                    component={InputField}
                    validate={[required, minLength4, maxLength, noSpecialSymbols]}
                    placeholder="username"
                />
                <Field
                    name="email"
                    label="Email"
                    type="text"
                    // component="input"
                    component={InputField}
                    validate={[required]}
                    placeholder="email"
                />
                <Field
                    name="age"
                    label="Age"
                    type="text"
                    // component="input"
                    component={InputField}
                    validate={[required, number, minNumber]}
                    placeholder="age"
                />
                <Field
                    name="gender"
                    label="Gender"
                    component="select"
                    // component={InputField}
                    validate={required}
                    placeholder="gender"
                />
                <Field
                    name="tos"
                    label="Agree with terms and conditions"
                    type="checkbox"
                    // component="checkbox"
                    component={InputField}
                    // validate={required}
                    placeholder="gender"
                />
                <button type='submit'>Ok</button>
                <button type='clear'>Clear</button>
            </form>
        )
    }
}

export default reduxForm(
    {
        form: 'simpleForm',
        asyncValidate: uniqueEmail,
        asyncChangeFields: ['email']
    }
)(RegistrationForm);