import { useState } from "react";

const GroupedMembers = ({ team, setTeam, employees }) => {
  const getGroupedMembers = (teamToGroup, employees, team) => {
    const filteredMembers = employees.filter((e) => e.teamName === teamToGroup);
    const members = {
      team: teamToGroup,
      members: filteredMembers,
      collapsed: teamToGroup === team ? false : true
    };
    return members;
  };
  const teams = ["TeamA", "TeamB", "TeamC", "TeamD"].map((e) =>
    getGroupedMembers(e, employees, team)
  );
  const [groupedMembers, setGroupedMembers] = useState(teams);
  const handleTeamClick = (event) => {
    const transformedGroups = groupedMembers.map((e) =>
      e.team === event.target.id ? { ...e, collapsed: !e.collapsed } : e
    );
    setGroupedMembers(transformedGroups);
    setTeam(event.target.id);
  };

  return (
    <div className="container">
      {groupedMembers.map((e) => (
        <div key={e.team} style={{ cursor: "pointer" }} className="card mp-4">
          <h4
            id={e.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            Team Name: {e.team}
          </h4>
          <div
            id={`collapse_${e.team}`}
            className={e.collapsed ? "collapse" : ""}
          >
            {e.members.map((member) => (
              <div className="mt-2">
                <h5 className="card-title mt-2">
                  Full Name: {member.fullName}
                </h5>
                <p>Designation: {member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupedMembers;
