import * as React from 'react';

import { CreateButton } from './';

import { Label } from '../';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            wrapper: {
                width: '90%'
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Label text={'NEW TASK'} />
                <div>bla bla bla</div>
                <CreateButton handleCreateTask={this.props.handleCreateTask}/>
            </div>
        );
    }
}

export default Product;