import { skills, description } from "../../utils/";
import {
  CategoryContainer,
  SkillsContainer,
  SkillsList,
  SkillItem,
  Description,
  CategoriesContainer,
} from "./HomeSkills.styles";

export const HomeSkills = () => {
  const renderSkills = () => {
    return skills.map((category, index) => (
      <CategoryContainer key={index}>
        <h3>{category.category}</h3>
        <SkillsList>
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </CategoryContainer>
    ));
  };

  return (
    <SkillsContainer>
      <Description>{description}</Description>
      <CategoriesContainer>{renderSkills()}</CategoriesContainer>
    </SkillsContainer>
  );
};