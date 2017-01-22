import * as React from 'react';

export class CreateSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div>NEW TASK</div>
                <Wish />
            </section>
        );
    }
}