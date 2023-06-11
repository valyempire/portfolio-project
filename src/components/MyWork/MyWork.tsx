import React from "react";
import { data } from "../../data/data";
import {
  WorkContainer,
  WorkItem,
  WorkButton,
  WorkImage,
  WorkInfo,
  WorkTitle,
  WorkButtonContainer,
} from "./MyWork.styles";

export const MyWork: React.FC = () => {
  const project = data;

  return (
    <WorkContainer>
      <div>
        <div>
          <p>Work</p>
          <p>Check out some of my recent work</p>
        </div>

        <div>
          {project.map((item) => (
            <WorkItem key={item.id}>
              <WorkImage backgroundImage={item.image} />
              <WorkInfo>
                <WorkTitle>{item.name}</WorkTitle>
                <WorkButtonContainer>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WorkButton>Code</WorkButton>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <WorkButton>Live</WorkButton>
                  </a>
                </WorkButtonContainer>
              </WorkInfo>
            </WorkItem>
          ))}
        </div>
      </div>
    </WorkContainer>
  );
};
