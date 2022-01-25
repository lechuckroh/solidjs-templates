import { renderToString } from "solid-js/web";

describe("Test the server", () => {
  it("should render in the server", () => {
    const html = renderToString(() => (
      <div title="Welcome to Jest">text content</div>
    ));
    expect(html).toBe(
      `<div data-hk="0" title="Welcome to Jest">text content</div>`
    );
  });
});
