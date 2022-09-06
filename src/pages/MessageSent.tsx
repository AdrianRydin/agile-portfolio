import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function MessageSent() {
    const navigate = useNavigate()
    setTimeout(() => {
        toast.success('You will be redirected in 5 Seconds to main page')
    }, 1000)
    setTimeout(() => {
        navigate("/")
    }, 6000)
    return(
        <div className="flex flex-col mt-32">
            <div className="wrapper">
                <h1 className="text-white headline-font text-3xl text-center">Message Sent</h1>
                <p className="text-white text-center text-xl pt-3">Your message have been sent to the employee, they will contact you as soon as possible</p>
            </div>
            <Link to="/">
                <button className=" text-2xl color-purp text-center block mx-auto">GO BACK</button>
            </Link>
        </div>
    )
}

export default MessageSent