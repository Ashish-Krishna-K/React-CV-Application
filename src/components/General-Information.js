import React from "react";

import '../styles/General-Information.css'

export class General extends React.Component {
    render() {

        const { name, email, phone } = this.props.genInfo;
        return (
            <div id="general">
                <h2>{name}</h2>
                <div id="space-this">
                    <span>{email}</span>
                    <span>{phone}</span>
                </div>
            </div>
        )
    }
}