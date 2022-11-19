import React from "react";
import '../styles/Education.css'

export class Education extends React.Component {
    render() {

        const { educations, deleteMethod } = this.props;

        return (
            <div id="edu"> 
                <h2>Education:</h2> 
                <div id="education">
                {
                    educations.map((item) => {
                        return (
                            <ul key={item.id}>
                                <button type="button" data-id={item.id} onClick={deleteMethod}></button>
                                <li>
                                    <span className="align-end">Name: </span>
                                    <span>{item.title.text}</span>
                                </li>
                                <li>
                                    <span className="align-end">School: </span>
                                    <span>{item.school.text}</span>
                                </li>
                                <li>
                                    <span className="align-end">Year of Graduation: </span>
                                    <span>{item.graduation.text}</span>
                                </li>
                            </ul>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}