import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IClickableCarouselProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
}
