import * as React from 'react';

export default class Forgot extends React.Component<{}> {
    public render() {
        return (
            <div className='row justify-content-center'>
                <form className='w-10 p-5 d-inline-block bg-success'>
                    <input type='email' placeholder='Please enter an eamil' />
                    <h1>
                        <button className='btn bg-light'>Submit</button>
                    </h1>
                    <h1 className='row justify-content-center'>
                        <a href='/' className='text-white'>BACK TO LOGIN</a>
                    </h1>
                </form>
            </div>
        );
    }
}