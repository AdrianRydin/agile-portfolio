import { CloseButton } from "@chakra-ui/close-button";
import { TeamCardProps } from "../util/interface/TeamCardInterface";

function InfoCard(member: TeamCardProps) {
  function toggleDiv() {
    document
      .getElementById(`${member.props.firstName}`)
      ?.classList.toggle("hidden");
  }
  return (
    <div
      id={member.props.firstName}
      className="hidden clickableDiv absolute w-full h-full rounded-lg bg-main-blue z-50 p-3 border-none"
    >
      <CloseButton
        color="white"
        onClick={() => toggleDiv()}
        className="absolute right-0 top-0"
      />
      <p className="color-main-green">HTML</p>
      <p className="text-xs pb-2 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, modi?
      </p>
      <p className="color-main-green">CSS</p>
      <p className="text-xs pb-2 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, modi?
      </p>
      <p className="color-main-green">UX/UI</p>
      <p className="text-xs pb-2 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, modi?
      </p>
      <p className="color-main-green">React</p>
      <p className="text-xs pb-2 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, modi?
      </p>
      <p className="color-main-green">TypeScript</p>
      <p className="text-xs pb-2 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, modi?
      </p>
      <p className="color-main-green">Node.js</p>
      <p className="text-xs pb-2 text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, modi?
      </p>
    </div>
    // HMMMM
  );
}

export default InfoCard;
