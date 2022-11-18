import React from "react";

export class General extends React.Component {
    render() {

        const { name, email, phone } = this.props.genInfo;
        return (
            <div id="general">
                <div>{name}</div>
                <div>{email}</div>
                <div>{phone}</div>
            </div>
        )
    }
}