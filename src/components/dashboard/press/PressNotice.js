import React, { Component } from 'react';
import './PressNotice.css'

class PressNotice extends Component {
    constructor(props) {
        super(props);
        this.noticeUrl = props.noticeUrl;
        this.imageUrl = props.imageUrl;
        this.noticeTitle = props.noticeTitle;
        this.noticePaper = props.noticePaper;
        this.noticeMonth = props.noticeMonth;
        this.noticeYear = props.noticeYear;
        this.noticeId = props.noticeId;
    }

    handleRemove(noticeId) {
        this.props.removeNotice(noticeId);
    }

    render() {
        return(
            <div className="PressNotice">
                <div className="pressConta">
                    <div className="imageShow">
                        <img src={this.imageUrl} alt="noticia1"/><br/>
                        <a href={this.noticeUrl}><h6>{this.noticeUrl}</h6></a>
                    </div>
                    <div className="noteContent">                        
                        <h4>{this.noticeTitle}</h4>
                        <p>{this.noticePaper}</p>
                        <span>{this.noticeMonth} {this.noticeYear}</span>
                    <div className="Buttons">
                        <button className="btn_press"><span uk-icon="icon: close; ratio: 2"></span></button>
                        <button className="btn_press"><span uk-icon="icon: pencil; ratio: 2"></span></button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PressNotice;