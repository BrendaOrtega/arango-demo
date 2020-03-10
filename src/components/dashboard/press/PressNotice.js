import React, { Component } from 'react';
import './PressNotice.css'

class PressNotice extends Component {
    constructor(props) {
        super(props);
        this.noticeUrl = props.noticeUrl;
        this.imageUrl = props.imageUrl;
        this.name = props.name;
        this.noticeTitle = props.noticeTitle;
        this.noticePaper = props.noticePaper;
        this.noticeMonth = props.noticeMonth;
        this.noticeYear = props.noticeYear;
        this.noticeId = props.noticeId;
    }

    handleRemove(noticeId, name) {
        this.props.removeNotice(noticeId, name);
    }

    render() {
        return(
            <div className="PressNotice">
                <div className="pressConta">
                    <div className="imageShow">
                        <img src={this.imageUrl} alt="noticia1"/><br/>
                        <a href={this.noticeUrl}><p>{this.noticeUrl}</p></a>
                    </div>
                    <div className="noteContent">                        
                        <h6>{this.noticeTitle}</h6>
                        <p style={{margin: "3px"}}>{this.noticePaper}</p>
                        <span>{this.noticeMonth} {this.noticeYear}</span>
                    <div className="Buttons">
                        <button className="btn_press" onClick={() => this.handleRemove(this.noticeId, this.name)}><span uk-icon="icon: close; ratio: 2"></span></button>
                        
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PressNotice;