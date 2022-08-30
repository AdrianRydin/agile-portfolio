import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { TeamCardProps } from "../util/interface/TeamCardInterface";

function HoverCard(member: TeamCardProps) {
  function toggleDiv() {
    document
      .getElementById(`${member.props.firstName}`)
      ?.classList.toggle("hidden");
  }
  return (
    <div className="teamBackground opacity-100 lg:opacity-0 flex-col justify-around z-50 absolute bg-50 w-full h-4/5 p-3">
      <p className="text-center text-white select-none">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
      <div
        onClick={() => toggleDiv()}
        className="flex flex-wrap  py-3 justify-center cursor-pointer select-none"
      >
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
  );
}

export default HoverCard;
