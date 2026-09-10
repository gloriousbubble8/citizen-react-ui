function Comp5() {
  const employees = [
    {
      id: 1,
      name: "Ravi Kumar",
      role: "Software Engineer",
      department: "Backend",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      role: "UI Designer",
      department: "Frontend",
    },
    { id: 3, name: "Vikram Singh", role: "QA Engineer", department: "Testing" },
    {
      id: 4,
      name: "Priya Patel",
      role: "Product Manager",
      department: "Product",
    },
    {
      id: 5,
      name: "Arjun Reddy",
      role: "DevOps Engineer",
      department: "Infrastructure",
    },
    {
      id: 6,
      name: "Sneha Iyer",
      role: "Frontend Developer",
      department: "Frontend",
    },
    {
      id: 7,
      name: "Karan Mehta",
      role: "Backend Developer",
      department: "Backend",
    },
    {
      id: 8,
      name: "Divya Nair",
      role: "Business Analyst",
      department: "Product",
    },
    {
      id: 9,
      name: "Rohan Gupta",
      role: "Database Administrator",
      department: "Infrastructure",
    },
    { id: 10, name: "Neha Verma", role: "UX Researcher", department: "Design" },
    {
      id: 11,
      name: "Aditya Joshi",
      role: "Full Stack Developer",
      department: "Engineering",
    },
    {
      id: 12,
      name: "Pooja Desai",
      role: "HR Manager",
      department: "Human Resources",
    },
    {
      id: 13,
      name: "Siddharth Rao",
      role: "Security Engineer",
      department: "Infrastructure",
    },
    {
      id: 14,
      name: "Meera Krishnan",
      role: "Technical Lead",
      department: "Backend",
    },
    {
      id: 15,
      name: "Aman Chopra",
      role: "Mobile Developer",
      department: "Frontend",
    },
    {
      id: 16,
      name: "Kavya Menon",
      role: "Scrum Master",
      department: "Product",
    },
    {
      id: 17,
      name: "Nikhil Bansal",
      role: "Cloud Architect",
      department: "Infrastructure",
    },
    {
      id: 18,
      name: "Ritu Agarwal",
      role: "Data Analyst",
      department: "Analytics",
    },
    {
      id: 19,
      name: "Varun Kapoor",
      role: "Support Engineer",
      department: "Testing",
    },
    {
      id: 20,
      name: "Ishita Malhotra",
      role: "Marketing Coordinator",
      department: "Marketing",
    },
  ];

  return (
    <>
      <textarea
        name="message"
        placeholder="Enter your message here..."
        style={{
          padding: "10px",
          width: "100%",
          height: "100px",
          boxSizing: "border-box",
          marginBottom: "10px",
        }}
      ></textarea>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Role</th>
            <th>Employee Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {employee.id}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {employee.name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {employee.role}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {employee.department}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Comp5;
