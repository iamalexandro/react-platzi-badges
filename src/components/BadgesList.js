import React from "react";

import "./styles/BadgesList.css";

class BadgeList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <img
                  src={badge.avatarUrl}
                  alt="Badga Avatar"
                  className="BadgesListItem__avatar"
                />
                <div className="BadgesListItem__container-y">
                  <p className="no-margin">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <div className="BadgesListItem__container-x">
                    <img
                      style={{ width: "22px", marginRight: "4px" }}
                      src="https://cdn.icon-icons.com/icons2/836/PNG/128/Twitter_icon-icons.com_66803.png"
                      alt=""
                    />
                    <p className="no-margin BadgesListItem__twitter">
                      @{badge.twitter}
                    </p>
                  </div>
                  <p className="no-margin">{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
