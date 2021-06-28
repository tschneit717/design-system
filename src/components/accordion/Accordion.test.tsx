import { Accordion } from "./Accordion";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Accordion ->", () => {
  Enzyme.configure({ adapter: new Adapter() });

  const ACCORDION_ITEMS = [
    {
      title: "Title 1",
      body: "Body 1",
    },
    {
      title: "Title 2",
      body: "Body 2",
    },
    {
      title: "Title 3",
      body: "Body 3",
    },
    {
      title: "Title 4",
      body: "Body 4",
    },
  ];

  const TEST_ID = "accordion-test-id";

  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  test("renders when title prop is provided", async () => {
    render(<Accordion testid={TEST_ID} accordionItems={ACCORDION_ITEMS} />);
  });

  test("renders the number of accordion items", async () => {
    render(<Accordion testid={TEST_ID} accordionItems={ACCORDION_ITEMS} />);

    expect(screen.getByTestId(TEST_ID).children.length).toEqual(4);
  });

  test("toggles the accordion item to open on click", async () => {
    render(<Accordion testid={TEST_ID} accordionItems={ACCORDION_ITEMS} />);

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(ACCORDION_ITEMS[1].title), leftClick);
    expect(screen.getByTitle(ACCORDION_ITEMS[1].title).classList).toHaveClass(
      "open"
    );
  });
});
