import React from "react";

export class Education extends React.Component {
    render() {

        const { educations } = this.props;

        return (
            <div id="education"> Education: 
                {
                    educations.map((item) => {
                        return (
                            <ul key={item.id}>
                                <li>{item.title.text}</li>
                                <li>{item.school.text}</li>
                                <li>{item.graduation.text}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}