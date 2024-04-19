import React,{useState} from "react";
import './Home.css';
function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    const [patients, setPatients] = useState([]);

    const addPatient = (name, age, gender, condition) => {
        const newPatient = {
            id: Math.floor(Math.random() * 1000), // Dummy ID generation
            name: name,
            age: age,
            gender: gender,
            condition: condition
        };
        setPatients([...patients, newPatient]);
    };

    const searchPatient = (keyword) => {
        return patients.filter(patient => patient.name.toLowerCase().includes(keyword.toLowerCase()));
    };

    const handleSubmitAddPatient = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const gender = event.target.gender.value;
        const condition = event.target.condition.value;
        addPatient(name, age, gender, condition);
        event.target.reset();
    };

    const handleSubmitSearchPatient = (event) => {
        event.preventDefault();
        const searchInput = event.target.searchInput.value.toLowerCase();
        const searchResult = searchPatient(searchInput);
        setPatients(searchResult); // You can do something with the search result here
        event.target.reset();
    };
    return (
        <div>
            <header>
                <h1>Healthcare Data Management System</h1>
            </header>
            <div className="container">
                <h2>Patient Information</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.condition}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Add New Patient</h2>
                <form onSubmit={handleSubmitAddPatient}>
                    <input type="text" id="name" placeholder="Name" required />
                    <input type="text" id="age" placeholder="Age" required />
                    <input type="text" id="gender" placeholder="Gender" required />
                    <input type="text" id="condition" placeholder="Condition" required />
                    <input type="submit" value="Add Patient" />
                </form>
                <h2>Search Patient</h2>
                <form onSubmit={handleSubmitSearchPatient}>
                    <input type="text" id="searchInput" placeholder="Search by Name" />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <button onClick={handleClick}>Logout</button>
        </div>
          
    )
}
export default Home;