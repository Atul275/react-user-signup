import * as React from 'react';
import { User } from '../../../../model/index';
import axios from 'axios';

export default class Register extends React.Component<{}, User> {
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            contact: "",
            password: "",
            confirmPass: "",
            store: []
        };
    }

    register = (e: any) => {
        e.preventDefault();

      this.setState({
       store: [
            ...this.state.store,
            this.state.firstName,
            this.state.lastName,
            this.state.emailId,
            this.state.contact,
            this.state.password,
            this.state.confirmPass
         ]
        });
    }
    
    storeDetails() {
        return this.state.store.map((add: string, i: number) => {
            return (
                <div key={i}>
                    <li>{add}</li>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.register(e)} className='register-container'>
                    <label htmlFor='firstName'>FirstName*</label><br />
                    <input
                        type='text'
                        placeholder='Enter FirstName'
                        value={this.state.firstName}
                        onChange={e => this.setState({ firstName: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='lastName'>LastName*</label>
                    <input
                        type='text'
                        placeholder='Enter LastName'
                        value={this.state.lastName}
                        onChange={e => this.setState({ lastName: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='emailId'>Email Id*</label>
                    <input
                        type='email'
                        placeholder='Enter Email'
                        value={this.state.emailId}
                        onChange={e => this.setState({ emailId: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='contact'>Contact</label>
                    <input
                        type='text'
                        placeholder='Enter Contact'
                        value={this.state.contact}
                        onChange={e => this.setState({ contact: e.target.value })}
                        className='form-control'
                    />
                    <label htmlFor='password'>Password*</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='confermPass'>Confirm Password*</label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        value={this.state.confirmPass}
                        onChange={e => this.setState({ confirmPass: e.target.value })}
                        required
                        className='form-control'
                    />
                    <br />
                    <div className='row justify-content-center'>
                        <button className='btn bg-primary w-75 text-white '>Register</button>
                    </div>
                    <h1 className='row justify-content-center'>
                        <a href='/'>BACK TO LOGIN</a>
                    </h1>
                </form>
                <section>{this.storeDetails()}</section>
            </div>
        );
    }
}
