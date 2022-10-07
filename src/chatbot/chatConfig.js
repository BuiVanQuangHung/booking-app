import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";

const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to find?", {
      widget: "PlaceOption",
    }),
  ],
  ...LearningOptions,
  ...LinkList,
  widgets: [
    {
      widgetName: "PlaceOption",
      props: {
        options: [
          {
            text: "A beautiful place with beach",
            url: "https://www.facebook.com/",
            id: 1,
          },
          {
            text: "Classic place",
            url: "https://www.facebook.com/",
            id: 2,
          },
          {
            text: "Bearing the mark of history",
            url: "https://www.facebook.com/",
            id: 3,
          },
        ],
      },
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Links",
      props: {
        options: [
          {
            text: "A beautiful place with beach",
            url: "https://www.facebook.com/",
            id: 1,
          },
          {
            text: "Classic place",
            url: "https://www.facebook.com/",
            id: 2,
          },
          {
            text: "Bearing the mark of history",
            url: "https://www.facebook.com/",
            id: 3,
          },
        ],
      },
      widgetFunc: (props) => <LinkList {...props} />,
    },
  ],
};
export default config;
