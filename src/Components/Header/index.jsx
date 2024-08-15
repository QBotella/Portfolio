import logo_linkedin from "../../assets/img/LinkedInicon.svg"
import logo_github from "../../assets/img/GitHubicon.svg"

function Header() {
    return (
        <div className="header">
            <h2>Portfolio de Quentin Botella</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/quentin-botella-5713a82a1/"><img src={logo_github} alt="logo de github" /></a></li>
                <li><a href="https://www.linkedin.com/in/quentin-botella-5713a82a1/"><img src={logo_linkedin} alt="logo de linkedin" /></a></li>
                </ul>
        </div>
    )
}

export default Header