import { skills, description } from "../../utils/";

export const HomeSkills = () => {
  const displaySkills = () => {
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
      <CategoriesContainer>{displaySkills()}</CategoriesContainer>
    </SkillsContainer>
  );
};
