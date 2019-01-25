import * as React from 'react';
import LayoutContainer from './modules/Layouts/container';

export default class App extends React.Component {
  public render() {
    return (
      <div className='w-100 p-5 d-inline-block bg-primary'>
        <LayoutContainer />
      </div>
    );
  }
}