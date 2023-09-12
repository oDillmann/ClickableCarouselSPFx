import * as React from 'react';
import { IClickableCarouselProps } from './IClickableCarouselProps';

const ClickableCarousel = ({
  description,
  isDarkTheme,
  environmentMessage,
  hasTeamsContext,
  userDisplayName,
}: IClickableCarouselProps): JSX.Element => {

  return (
    <>
      <h1>
        description {description}
      </h1>
      <h1>
        Is Dark Theme{isDarkTheme}
      </h1>
      <h1>
        Environment Message {environmentMessage}
      </h1>
      <h1>
        hasTeamsContext {hasTeamsContext}
      </h1>
      <h1>
        userDisplayName {userDisplayName}
      </h1>
    </>
  );
}
export default ClickableCarousel
