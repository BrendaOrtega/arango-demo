import React, { Component } from 'react';

class PressNotice extends Component {
    constructor(props) {
        super(props);
        this.noticeTitle = props.noticeTitle;
        this.noticePaper = props.noticePaper;
        this.noticeImage = props.noticeImage;
        this.noticeId = props.noticeId;
    }

    handleRemove(noticeId) {
        this.props.removeNotice(noticeId);
    }

    render() {
        return(
            <div className="PressNotice">
                <table className="uk-table">
                    <tbody>
                        <tr>
                            <td>{this.noticeTitle}</td>
                            <td>{this.noticePaper}</td>
                            <td>{this.noticeImage}</td>
                            <td><span 
                            onClick={() => this.handleRemove(this.noticeId)} uk-icon="icon: close"></span></td>
                            <td><span uk-icon="icon: pencil"></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PressNotice;