import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories";

const { Default, WithPinnedTasks, Loading, Empty } = composeStories(
  TaskListStories
);

it("renders unpinned tasks at the start of the list", () => {
  const { container } = render(<Default />);

  expect(
    container.querySelector('.list-item:nth-child(1) input[value="Task 1"]')
  ).not.toBe(null);
});

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});

it("renders the loading state of the tasks list", () => {
  const { container } = render(<Loading />);

  expect(container.querySelector(".loading-item")).not.toBe(null);
});

it("renders the empty state of the tasks list", () => {
  const { container } = render(<Empty />);

  expect(container.querySelector(".wrapper-message")).not.toBe(null);
});
