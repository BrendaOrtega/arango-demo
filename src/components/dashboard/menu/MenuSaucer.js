import React, { Component } from 'react';

class MenuSaucer extends Component {
    constructor(props) {
        super(props);
        this.saucerName = props.saucerName;
        this.saucerPrice = props.saucerPrice;
        this.saucerCategory = props.saucerCategory;
        this.saucerId = props.saucerId;
    }

    handleRemove(saucerId) {
        this.props.removeSaucer(saucerId);
    }

    render() {
        return(
            <div className="MenuSaucer">
                <table className="uk-table">
                    <tbody>
                        <tr>
                            <td>{this.saucerName}</td>
                            <td>{this.saucerPrice}</td>
                            <td>{this.saucerCategory}</td>
                            <td><span 
                            onClick={() => this.handleRemove(this.saucerId)} uk-icon="icon: close"></span></td>
                            <td><span uk-icon="icon: pencil"></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MenuSaucer;