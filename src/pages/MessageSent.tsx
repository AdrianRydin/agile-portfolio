import { Link, useNavigate } from "react-router-dom"

function MessageSent() {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/")
    }, 5000)
    return(
        <div className="flex flex-col mt-32">
            <div className="wrapper">
                <h1 className="text-white title text-3xl text-center">MESSAGE SENT</h1>
                <p className="text-white text-center text-xl pt-3">Your message has been sent to the selected employee.</p>
                <p className="text-white text-center text-xl pt-3">They will contact you as soon as possible</p>
            </div>
            <Link to="/">
                <button className="title color-purp text-center block mx-auto drop-shadow-2xl shadow-white">GO BACK</button>
            </Link>
        </div>
    )
}

export default MessageSent