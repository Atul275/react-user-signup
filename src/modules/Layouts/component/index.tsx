import * as React from 'react';
import { GlobalState } from 'src/model';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindDispatch } from 'src/app/utils/redux';
import { history } from 'src/store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import { disablePageScroll, enablePageScroll } from 'src/app/utils/uiHelpers';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { ErrorModal } from 'src/components';
// import * as cookie from 'src/app/utils/cookie';
import * as _ from 'lodash';
import 'basscss/css/basscss.css';
// import registerServiceWorker from 'src/registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

let notInclude = [
  ''
];

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: 'PayRoll' };
  }

  componentDidMount() {
    console.log(this.props, 'layouts');
  }
  
  renderErrorModal() {
    return (
      <div>
        <ErrorModal {...this.props} />
      </div>
    );
  }

  isAppBusy() {
    // let { app } = this.props;
    // app.isBusy ? disablePageScroll() : enablePageScroll();
    return false;
  }

  render() {
    const { children } = this.props, currentPath = history.location.pathname;
    const splitPath: string[] = currentPath.split('/');
    console.log(this.props, 'layouts');
    return (
      <MuiThemeProvider theme={theme}>  
        <ErrorModal {...this.props} />
        {/* <Toastify options={app.toast} handleClose={() => actions.handleToast({ open: false, message: '' })} /> */}
        {!_.includes(notInclude, splitPath[1])}
        <div className="col col-12">
          <div className="m2">{children}</div>
        </div>
      </MuiThemeProvider >
    );
  }
}

const selector: any = createSelector(
  (state: GlobalState) => state.app,
  (state: GlobalState) => state.payroll,
  (app, payroll) => ({ app, payroll }));

export default connect(selector, bindDispatch)(Layout);
