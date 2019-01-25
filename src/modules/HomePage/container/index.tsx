import * as React from 'react';
import { GlobalState } from 'src/model';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindDispatch } from 'src/app/utils/redux';
import HomePageView from '../component';

class HomePage extends React.Component<any> {
  render() {
    return (
      <div>
      <HomePageView
        {...this.props}
      />
      </div>
    );
  }
}

const selector: any = createSelector(
  (state: GlobalState) => state.app,
  (state: GlobalState) => state.payroll,
  (app, payroll) => ({ app, payroll })
);

export default connect(
  selector,
  bindDispatch
)(HomePage);
