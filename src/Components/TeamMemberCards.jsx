import TeamMemberCard from "./TeamMemberCard";

const TeamMemberCards = ({ employees, handleEmployeeSelectedClick, team }) => {
  return (
    <div className="card-collection">
      {employees.map((employee) => (
        <TeamMemberCard
          employee={employee}
          handleEmployeeSelectedClick={handleEmployeeSelectedClick}
          team={team}
        />
      ))}
    </div>
  );
};

export default TeamMemberCards;
