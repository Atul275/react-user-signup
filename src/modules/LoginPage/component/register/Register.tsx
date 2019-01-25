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

    componentDidMount() {
        axios.post(`https://http://192.168.31.129/payroll/`)
            .then(res => {
                const store = res.data;
                this.setState({ store });
            });
    }

    register = (e: any) => {
        e.preventDefault();

        const store = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.emailId,
            contact: this.state.contact,
            password: this.state.password,
            confirmPass: this.state.confirmPass
        };

        axios.post(`https://http://192.168.31.129/payroll`, { store })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.emailId);
        console.log(this.state.contact);
        console.log(this.state.password);
        console.log(this.state.confirmPass);
    }

    //     this.setState({
    //     store: [
    //         ...this.state.store,
    //         this.state.firstName,
    //         this.state.lastName,
    //         this.state.emailId,
    //         this.state.contact,
    //         this.state.password,
    //         this.state.confirmPass
    //     ]
    // });
    // }

    handleChange = (e: any) => {
        this.setState({ firstName: e.target.value });
        this.setState({ lastName: e.target.value });
        this.setState({ emailId: e.target.value });
        this.setState({ contact: e.target.value });
        this.setState({ password: e.target.value });
        this.setState({ confirmPass: e.target.value });
    };

    // storeDetails() {
    //     return this.state.store.map((add: string, i: number) => {
    //         return (
    //             <div key={i}>
    //                 <li>{add}</li>
    //             </div>
    //         );
    //     });
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.register} className='register-container'>
                    <label htmlFor='firstName'>FirstName*</label><br />
                    <input
                        type='text'
                        name='firstName'
                        placeholder='Enter FirstName'
                        onChange={e => this.handleChange}
                        // value={this.state.firstName}
                        // onChange={e => this.setState({ firstName: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='lastName'>LastName*</label>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Enter LastName'
                        onChange={this.handleChange}
                        // value={this.state.lastName}
                        // onChange={e => this.setState({ lastName: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='emailId'>Email Id*</label>
                    <input
                        type='email'
                        name='emailId'
                        placeholder='Enter Email'
                        onChange={this.handleChange}
                        // value={this.state.emailId}
                        // onChange={e => this.setState({ emailId: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='contact'>Contact</label>
                    <input
                        type='text'
                        name='contact'
                        placeholder='Enter Contact'
                        onChange={this.handleChange}
                        // value={this.state.contact}
                        // onChange={e => this.setState({ contact: e.target.value })}
                        className='form-control'
                    />
                    <label htmlFor='password'>Password*</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        onChange={this.handleChange}
                        // value={this.state.password}
                        // onChange={e => this.setState({ password: e.target.value })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='confermPass'>Confirm Password*</label>
                    <input
                        type='password'
                        name='confirmPass'
                        placeholder='Enter Password'
                        onChange={this.handleChange}
                        // value={this.state.confirmPass}
                        // onChange={e => this.setState({ confirmPass: e.target.value })}
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
                {/* <section>{this.storeDetails()}</section> */}
            </div>
        );
    }
}