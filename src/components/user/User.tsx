import classes from "./User.module.css";
import Utils from "../../helpers/Utils";
import UserBean from "../../models/UserBean";
import Container from "../ui/Container";

const User: React.FC<{ user: UserBean }> = (props) => {
  return (
    <Container className="vertical">
      <div className={classes["user-card"]}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/avatar.png`}
            alt="Avatar"
          />
        </div>
        <div>
          <h3>{props.user.id}</h3>
          <p>Karma: {props.user.karma}</p>
          <p>Created: {Utils.time2TimeAgo(props.user.created)}</p>
          {props.user.about && (
            <p
              dangerouslySetInnerHTML={{
                __html: `About : ${props.user.about}`,
              }}
            ></p>
          )}
          <p>
            Submissions:{" "}
            {props.user.submitted ? props.user.submitted.length : 0}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default User;
