import { UserProps } from "../../Types/user";
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom";
import classe from "./User.module.css"

const User = ({
    login,
    avatar_url,
    location,
    followers,
    following
}: UserProps) => {
    return (
        <div className={classe.Content_User}>

            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>

            {location && (
                <p className={classe.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )
            }
            <div className={classe.card_User}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classe.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo</p>
                    <p className={classe.number}>{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </div>
    )
}
export default User;
