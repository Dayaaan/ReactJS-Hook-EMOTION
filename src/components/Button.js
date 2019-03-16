import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        console.log(this.ref);
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        const { count } = this.state;
        return (
            <button onClick={this.handleClick} ref={button => this.button = button}>
                {this.props.name}
                ({count})
            </button>
        );
    }
}


export default Button;