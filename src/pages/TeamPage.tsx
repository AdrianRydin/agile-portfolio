import TeamCard from "../components/TeamCard";
import { teamMember } from "../util/member";

function TeamPage() {
  return (
    <div className="wrapper">
        <h1 className="color-white text-7xl p-0 headline-font text-center md:text-left select-none">THE TEAM</h1>
        <h2 className="color-main-green pb-10 underline-font text-center md:text-left select-none">Click to interact</h2>
      <div className="flex flex-col md:justify-center md:flex-row md:flex-wrap gap-16">
        {Object.values(teamMember).map((member, index) => {
          return <TeamCard props={member} />;
        })}
      </div>
    </div>
  );
}
export default TeamPage;
