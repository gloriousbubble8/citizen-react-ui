function comp2(){
    console.log("Component 2 rendered");
    return (<>
        <table>
            <thead>
                <tr>
                    <th>EmployeeID</th>
                    <th>EmployeeName</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bob Johnson</td>
                </tr>
            </tbody>
        </table>
    </>);
}

export default comp2;