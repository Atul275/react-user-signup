import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { UserLogin } from '../../../../model/index';
import { PostData } from '../../container/PostData';

export default class Login extends React.Component<UserLogin, any> {
    public static defaultProps: Partial<UserLogin> = {
    };

    state: any = {
        username: "",
        password: "",
        redirectToReferrer: false
    };

    onLogin(e: React.FormEvent<HTMLButtonElement>): void {
        const { username, password, value }: any = e.target;
        this.setState({
            [username]: value,
            [password]: value
        });
        if (this.state.username && this.state.password) {
            PostData('onLogin', this.state).then((result: any) => {
                let responseJson = result;
                if (responseJson.userData) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
            });
        }
        
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/welcome'} />);
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/login'} />);
        }

        return (
            <div>
                <div className='row justify-content-center'>
                    <div className='jumbotron bg-primary text-white'>
                        <b className='display-4'>Hello</b>
                        <p>World.!</p>
                    </div>
                </div>

                <div className='card card-container'>
                    <form onClick={e => this.onLogin}>
                        <h2 className='row justify-content-center lg-5'>Log-in</h2>

                        <label />
                        <input
                            type="email"
                            name="username"
                            placeholder="Username"
                            onChange={this.state.username}
                            className='form-control'
                        />

                        <label />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.state.password}
                            className='form-control'
                        /><br />
                        <div className='row justify-content-center'>
                            <button className='btn bg-primary w-75 text-white '>Sign In</button>
                        </div>
                        <h2>
                            <a href='forgot' className='row justify-content-center'>Forgot Password?</a>
                        </h2>
                        <h2>
                            <a href='welcome' className='row justify-content-center'>Click Me</a>
                        </h2>
                        <h2>
                            <a href='register' className='row justify-content-center'>Create Account</a>
                        </h2>
                    </form>
                </div>
            </div >
        );
    }
}
