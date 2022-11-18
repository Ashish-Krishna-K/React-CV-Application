import React from "react";

export class Experience extends React.Component {
    render() {

        const { experiences } = this.props;

        return (
            <div id="prof-Exp"> Professional Experience:
                {
                    experiences.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li>{item.title.text}</li>
                                <li>{item.company.text}</li>
                                <li>{item.years.text}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}