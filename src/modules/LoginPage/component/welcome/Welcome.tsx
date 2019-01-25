import * as React from 'react';

export default class Welcome extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1 className='row justify-content-center'>Welcome to Login User?</h1>
                <h1 className='row justify-content-center'>
                    <a href='/' className='text-white'>BACK TO LOGIN</a>
                </h1>
            </div>
        );
    }
}