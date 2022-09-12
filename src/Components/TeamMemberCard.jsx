import femaleProfile from "../../public/img/femaleProfile.jpg";
import maleProfile from "../../public/img/maleProfile.jpg";

const TeamMemberCard = ({ team, employee, handleEmployeeSelectedClick }) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={employee.teamName === team ? "standout card" : "card"}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeSelectedClick}
    >
      {employee.gender === "female" ? (
        <img className="card-img-top" src={femaleProfile} alt="" />
      ) : (
        <img className="card-img-top" src={maleProfile} alt="" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">Designation: {employee.designation}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
