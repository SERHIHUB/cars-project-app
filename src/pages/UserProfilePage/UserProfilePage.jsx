import { UserProfileComponent } from "../../components/UserProfileComponent/UserProfileComponent";
import css from "./UserProfilePage.module.css";
import { Section } from "../../components/shared/components/Section/Section";

export const UserProfilePage = () => {
  return (
    <Section>
      <UserProfileComponent />
    </Section>
  );
};
