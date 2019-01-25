export interface GlobalState {
    app: App;
    layout_distributor: Layout;
    payroll: PayRoll;
}
export interface App {
    isBusy: boolean;
}
export interface Layout {
    isVerified: boolean;
}
export interface PayRoll {
    isLogin: boolean;
}

export interface UserLogin {
    username: string;
    password: string;
    redirectToReferrer: boolean;
}

export interface User {
    firstName: string;
    lastName: string;
    emailId: string;
    contact: string;
    password: string;
    confirmPass: string;
    store: Array<string>;
}