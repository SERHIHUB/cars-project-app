import { Container } from "../shared/components/Container/Container";
import { useSelector } from "react-redux";
import css from "./UserProfileComponent.module.css";
import { selectCurrentUser } from "../../redux/users/selectors";

export const UserProfileComponent = () => {
  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);

  return (
    <Container>
      <div>{currentUser.avatarURL && <img src={currentUser.avatarURL} />}</div>
      <p>{`name: ${currentUser.name}`}</p>
      <p>{`email: ${currentUser.email}`}</p>
      <p>{`status: ${currentUser.role}`}</p>
      <p>{`thema: ${currentUser.thema}`}</p>
    </Container>
  );
};
