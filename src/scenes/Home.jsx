import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();

    return(
        <>
        <h1>Home</h1>
        <img src="https://picsum.photos/200/200" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis repellat consectetur! Consequatur eligendi nulla maiores minus sint rem impedit modi dolor doloremque qui incidunt voluptatem, ea magnam dolorum facere?</p>
        <button onClick={ () => navigate("/about") }>About</button>
        </>
    )
}