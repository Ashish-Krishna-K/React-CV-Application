import '../styles/Experience.css'

const Experience = (props) => {
    return (
        <div id="experience"> 
            <h2>Professional Experience:</h2>
            <div id="prof-Exp">
            {
                props.experiences.map((item) => {
                    return (
                        <ul key={item.id}>
                            <button type="button" 
                            data-id={item.id} 
                            onClick={props.deleteExp}
                            />
                            <li>
                                <span className="align-end">Job Title: </span> 
                                <span>{item.job}</span>
                            </li>
                            <li>
                                <span className="align-end">Company Name: </span>
                                <span>{item.company}</span>
                            </li>
                            <li>
                                <span className="align-end">Years worked at this role: </span>
                                <span>{item.yearsWorked}</span>
                            </li>
                        </ul>
                    )
                })
            }
            </div>
        </div>
    )
}


export default Experience;