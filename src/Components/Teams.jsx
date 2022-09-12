const Teams = ({ team, handleTeamSelectionChange }) => {
  return (
    <select
      className="form-select form-select-lg"
      value={team}
      onChange={handleTeamSelectionChange}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};

export default Teams;
