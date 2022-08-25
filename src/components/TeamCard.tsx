import TeamCardInterface from "../util/interface/TeamCardInterface"
function TeamCard(member : TeamCardInterface) {
    return (
        <div className="teamCard">
            <img className="teamImage" src="./img/felix.jpg" alt="memberImage" />
            <div className="teamText p-6 flex flex-col text-white">

            <div className="teamRoleDiv flex items-center">
            <div className="teamLine bg-main-green"></div>
            <p className="teamRole pl-3">{member.role}</p>
            </div>
            <h1 className="teamName">{member.firstName} {member.lastName}</h1>
            </div>
        </div>
    )
}


export default TeamCard