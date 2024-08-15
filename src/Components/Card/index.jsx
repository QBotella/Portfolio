function Card({card}) {
    return (
        <article>
        <h1>{card.name}</h1>;
        <p>{card.description}</p>;
        <span>{card.TechUse}</span>;
        <a href={card.UrlGithub}>lien vers le répositorie GitHub</a>
        </article>
    )
}

export default Card