import { useState } from "react";
import "./App.css";

export function TwitterFollowCard({
  formatUserName,
  userName,
  children,
  initialIsFollowing
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="perfil"
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
