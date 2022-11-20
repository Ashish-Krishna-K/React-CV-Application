import '../styles/Education.css'

const Education = (props) => {
    return (
        <div id="edu"> 
            <h2>Education:</h2> 
            <div id="education">
            {
                props.educations.map((item) => {
                    return (
                        <ul key={item.id}>
                            <button type="button" 
                            data-id={item.id} 
                            onClick={props.deleteEdu} 
                            />
                            <li>
                                <span className="align-end">Name: </span>
                                <span>{item.degree}</span>
                            </li>
                            <li>
                                <span className="align-end">School: </span>
                                <span>{item.school}</span>
                            </li>
                            <li>
                                <span className="align-end">Year of Graduation: </span>
                                <span>{item.graduationYear}</span>
                            </li>
                        </ul>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Education;