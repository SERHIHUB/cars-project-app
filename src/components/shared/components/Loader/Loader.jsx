import { ColorRing } from "react-loader-spinner";
import { Container } from "../Container/Container";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <Container className={css.container}>
      <div className={css.loader}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </Container>
  );
};
