import * as React from 'react';
import { getSP } from '../../../pnpjsConfig';
import { IClickableCarouselProps } from './IClickableCarouselProps';

const ClickableCarousel = ({
  description,
  isDarkTheme,
  environmentMessage,
  hasTeamsContext,
  userDisplayName,
  context
}: IClickableCarouselProps): JSX.Element => {

  const sp = getSP(context);

  const getList = async (): Promise<unknown[]> => {
    const list = await sp.web.lists.getByTitle("/sites/Home/Lists/Clickable Carousel Images").items();
    console.log(list)
    return list
  }

  React.useEffect(() => {
    getList();
  }, []);


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
