import portrait from "../../assets/img/moi.jpeg"

function About_me() {
    return (
        <div className="about">
            <div className="about_me">
            <h1>Quentin Botella</h1>
            <h2>Développeur Web Fullstack junior</h2>
            <p>Développeur web avec un parcours atypique, j’ai commencé ma carrière dans la conduite d'engins viticoles 
                dans les vignobles de Pessac-Leognan avant de me reconvertir avec passion en tant que développeur Fullstack, 
                grâce a une formation chez Openclasserooms 
            </p>
            </div>
                 <img src={portrait} alt="Photo de Quentin Botella" />
        </div>
    )
}

export default About_me