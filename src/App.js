import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Employees from "./Components/Employees";
import GroupedMembers from "./Components/GroupedMembers";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }
    ]
  );
  const [team, setTeam] = useState(localStorage.getItem("team") || "TeamB");
  const handleTeamSelectionChange = (event) => {
    setTeam(event.target.value);
  };
  const handleEmployeeSelectedClick = (event) => {
    const transformedEmployees = employees.map((employee) => {
      return +event.currentTarget.id === employee.id &&
        employee.teamName === team
        ? { ...employee, teamName: "" }
        : +event.currentTarget.id === employee.id && employee.teamName !== team
        ? { ...employee, teamName: team }
        : employee;
    });
    setEmployees(transformedEmployees);
  };
  useEffect(() => {
    localStorage.setItem("team", team);
  }, [team]);
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header
          membersCount={
            employees.filter((employee) => employee.teamName === team).length
          }
          team={team}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employees={employees}
                team={team}
                handleEmployeeSelectedClick={handleEmployeeSelectedClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
              />
            }
          />
          <Route
            path="/grouped"
            element={
              <GroupedMembers
                team={team}
                setTeam={setTeam}
                employees={employees}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
