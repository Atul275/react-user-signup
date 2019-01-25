import * as React from 'react';
import '../../../components/style.scss';

export default class HomePageView extends React.Component<any, any> {
    componentWillMount() {
        let { match: { params } }: any = this.props;
        console.log(params.id);
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}