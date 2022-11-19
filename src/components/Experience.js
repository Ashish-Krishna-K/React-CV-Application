import React from "react";
import '../styles/Experience.css'

export class Experience extends React.Component {
    render() {

        const { experiences, deleteMethod } = this.props;
        return (
            <div id="experience"> 
                <h2>Professional Experience:</h2>
                <div  id="prof-Exp">
                {
                    experiences.map((item) => {
                        return (
                            <ul key={item.id}>
                                <button type="button" 
                                data-id={item.id} 
                                onClick={deleteMethod}
                                />
                                <li>
                                    <span className="align-end">Job Title: </span> 
                                    <span>{item.title.text}</span>
                                </li>
                                <li>
                                    <span className="align-end">Company Name: </span>
                                    <span>{item.company.text}</span>
                                </li>
                                <li>
                                    <span className="align-end">Years worked at this role: </span>
                                    <span>{item.years.text}</span>
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