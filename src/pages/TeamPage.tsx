import TeamCard from "../components/TeamCard";
import { teamMember } from "../util/member";

function TeamPage() {
  return (
    <div className="wrapper">
      <p id="teamDiv" className="title text-white text-center lg:text-left">THE TEAM</p>
      <p className="color-main-green small-text mb-10 text-center lg:text-left">
        Click to interact
      </p>
      <div className="flex flex-col md:justify-center md:flex-row md:flex-wrap gap-16">
        {Object.values(teamMember).map((member, index) => {
          return <TeamCard props={member} />;
        })}
      </div>
    </div>
  );
}
export default TeamPage;
