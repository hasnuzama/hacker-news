import User from "../components/user/User";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import Container from "../components/ui/Container";
import Loader from "../components/ui/Loader";
import UserBean from "../models/UserBean";
import UserService from "../services/UserService";
import ErrorPage from "./ErrorPage";

const UserPage: React.FC = (props) => {
  const { name } = useParams<{ name: string }>();
  const [user, setUser] = useState<UserBean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Get user details
  useEffect(() => {
    if (!name) {
      return;
    }
    setIsLoading(true);
    UserService.getUser(name).then((response) => {
      setUser(response as UserBean);
      setIsLoading(false);
    });
  }, [name]);

  return (
    <React.Fragment>
      <Container className="vertical">
        {isLoading &&
          ReactDOM.createPortal(
            <Loader />,
            document.getElementById("overlay") as Element
          )}
        {user && <User user={user as UserBean} />}
        {!user && !isLoading && <ErrorPage />}
      </Container>
    </React.Fragment>
  );
};

export default UserPage;
