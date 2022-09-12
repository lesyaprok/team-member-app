import TeamMemberCards from "./TeamMemberCards";
import Teams from "./Teams";

const Employees = ({
  employees,
  team,
  handleEmployeeSelectedClick,
  handleTeamSelectionChange
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams
            team={team}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <TeamMemberCards
            employees={employees}
            team={team}
            handleEmployeeSelectedClick={handleEmployeeSelectedClick}
          />
        </div>
      </div>
    </main>
  );
};

export default Employees;
