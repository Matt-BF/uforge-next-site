import stylesStatements from '../styles/Statements.module.css'

const Statements = () => {
    return (
        <div>
            <h1 className={stylesStatements.statementTitle}>Conquistas</h1>
            <div className={`${stylesStatements.container} ${stylesStatements.flex}`}>
                <img className={stylesStatements.statementImg} src="logo_foxes_peq.png" alt="FoxES" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur ea labore fuga vel vitae
                nihil corporis expedita quasi aperiam officia, odio iure, facere eligendi fugit nemo alias aliquam
                provident tempora repellat dolores repudiandae esse id voluptas? At deserunt neque sunt accusamus
                repudiandae corporis? Quam mollitia consequuntur officiis deserunt nostrum, architecto quaerat id
                numquam quidem et ipsa saepe cupiditate sit, consectetur culpa, ea harum labore fuga nihil. Libero
                repellendus nesciunt, magni deleniti reiciendis dolor praesentium debitis. Cupiditate ad commodi nihil,
                eligendi exercitationem delectus iste labore aliquid, est doloribus nemo consectetur sunt officiis
                repudiandae praesentium earum, porro eius aliquam placeat aspernatur.</p>
            </div>
        </div>

    )
}

export default Statements
