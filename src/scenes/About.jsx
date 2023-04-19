import { useNavigate } from "react-router-dom"

export default function About () {
    const navigate = useNavigate()

    return (
        <>
        <h2>About</h2>
        <img src="https://picsum.photos/200/200" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem mollitia error quod libero rerum ducimus qui distinctio quaerat dignissimos. Illum, omnis. Qui iste quidem minus blanditiis esse. Exercitationem, sit esse.</p>
        <button onClick={ () => navigate("/") } > Go to Home</button>
        </>
    )
}