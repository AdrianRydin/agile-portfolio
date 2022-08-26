import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import HoverCard from "./HoverCard";
import { TeamCardProps } from "../util/interface/TeamCardInterface";
import InfoCard from "./InfoCard";


function TeamCard(member: TeamCardProps) {
  return (
    <div className="teamCard">
      <img
        className="teamImage rounded-lg"
        src={member.props.image}
        alt="memberImage"
      />
      <div className="teamText px-3 py-2 flex flex-col text-white">
        <div className="teamRoleDiv flex items-center">
          <div className="teamLine bg-main-green"></div>
          <p className="teamRole pl-3">{member.props.role}</p>
        </div>
        <h1 className="teamName">
          {member.props.firstName} {member.props.lastName}
        </h1>
      </div>
      <HoverCard props={member.props} />
      <InfoCard props={member.props} />
    </div>
  );
}

export default TeamCard;
