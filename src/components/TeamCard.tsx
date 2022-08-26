import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import TeamCardInterface from "../util/interface/TeamCardInterface";

interface TeamCardProps {
  props: TeamCardInterface;
}

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
      <div className="teamBackground flex-col justify-around z-50 absolute bg-50 w-full h-4/5 p-3">
        <p className="text-center text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className="flex flex-wrap  py-3 justify-center cursor-pointer">
          <CircularProgress
            value={member.props.html}
            size="60px"
            thickness="7px"
            color="#6FCF97;"
          >
            <CircularProgressLabel className="color-main-green">
              HTML
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={member.props.css}
            size="60px"
            thickness="7px"
            color="#6FCF97;"
          >
            <CircularProgressLabel className="color-main-green">
              CSS
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={member.props.uiUx}
            size="60px"
            thickness="7px"
            color="#6FCF97;"
          >
            <CircularProgressLabel className="color-main-green">
              UX/UI
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={member.props.react}
            size="60px"
            thickness="7px"
            color="#6FCF97;"
          >
            <CircularProgressLabel className="color-main-green">
              React
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={member.props.typescript}
            size="60px"
            thickness="7px"
            color="#6FCF97;"
          >
            <CircularProgressLabel className="color-main-green">
              TS
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={member.props.node}
            size="60px"
            thickness="7px"
            color="#6FCF97;"
          >
            <CircularProgressLabel className="color-main-green">
              Node
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
