import React from 'react';
import InputForm from "./component/RegistrationForm";

class App extends React.Component {

    handleSubmit = (values) => {
        // console.log('values:', values)
        window.alert(JSON.stringify(values));
    };

    initialValues = {
        name: undefined,
    };

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <InputForm
                    //We have to pass method to prop onSubmit but in Component we get this prop as handleSubmit(doesn't matter what name do you pass to prop)
                    onSubmit={this.handleSubmit}
                    initialValues={this.initialValues}
                />
            </div>
        );
    }
}

export default App;
