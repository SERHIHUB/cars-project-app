import { Container } from "../shared/components/Container/Container";
import { useSelector } from "react-redux";
import css from "./UserProfileComponent.module.css";
import { selectCurrentUser } from "../../redux/users/selectors";

export const UserProfileComponent = () => {
  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);

  return (
    <Container>
      {/* ???????????????????????????????????????????????????? */}
      <div>
        {/* {currentUser.avatar && <img src={currentUser.avatar} />} */}

        {/* <img
          src={`https://car-project-db.onrender.com/upload/1728670281047-audi.jpg`}
        /> */}
        <img src={`http://localhost:3000/upload/1728822613843-dodge.jpg`} />
      </div>
      <p>{`name: ${currentUser.name}`}</p>
      <p>{`email: ${currentUser.email}`}</p>
      <p>{`status: ${currentUser.role}`}</p>
      <p>{`thema: ${currentUser.thema}`}</p>
      <p>{`avatar: ${currentUser.avatarURL}`}</p>
    </Container>
  );
};
