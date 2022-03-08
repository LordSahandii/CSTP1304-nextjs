function StudentRow(props){
    return(
        <>
            <tr><td>Name:</td><td>{props.firstName}</td></tr>
            <tr><td>LastName:</td><td>{props.lastName}</td></tr>
            <tr><td>Program</td><td>{props.program}</td></tr>
        </>
    )
}