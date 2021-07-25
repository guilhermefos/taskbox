import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as TaskStories from "./Task.stories";

const { Default, Pinned, Archived } = composeStories(TaskStories);

it("renders the default state of task", () => {
  const { container } = render(<Default />);

  expect(container.querySelector(".TASK_INBOX")).not.toBe(null);
});

it("renders the pinned state of task", () => {
  const { container } = render(<Pinned />);

  expect(container.querySelector(".TASK_PINNED")).not.toBe(null);
});

it("renders the archived state of task", () => {
  const { container } = render(<Archived />);

  expect(container.querySelector(".TASK_ARCHIVED")).not.toBe(null);
});
