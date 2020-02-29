import React, { Component } from 'react';
import './MenuSaucer.css'

class MenuSaucer extends Component {
    constructor(props) {
        super(props);
        this.saucerName = props.saucer.saucerName;
        this.saucerNameEn = props.saucer.saucerNameEn;
        this.saucerPrice = props.saucer.saucerPrice;
        this.saucerCategory = props.saucer.saucerCategory;
        this.saucerCategoryEn = props.saucer.saucerCategoryEn;
        this.saucerId = props.saucer.saucerId;
    }

    handleRemove(saucerId) {
        this.props.removeSaucer(saucerId);
    }

    render() {
        return(
            <div className="MenuSaucer">
                <tr className="tr-table">
                    <td>{this.saucerName}</td>
                    <td>{this.saucerNameEn}</td>
                    <td>${this.saucerPrice}.00</td>
                    <td>{this.saucerCategory}</td>
                    <td>{this.saucerCategoryEn}</td>
                    <td><span 
                    onClick={() => this.handleRemove(this.saucerId)} uk-icon="icon: close"></span></td>
                    <td><span
                    onClick={()=>this.props.onOpenModalEdit(this.saucerId)} uk-icon="icon: pencil"></span></td>
                </tr>
            </div>
        )
    }
}

export default MenuSaucer;