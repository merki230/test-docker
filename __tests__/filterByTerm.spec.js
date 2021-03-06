import { filterByTerm } from '../filterByTerm';
describe("Filter function", () => {
    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
    ];
    const output = [{ id: 3, url: "https://www.link3.dev" }];

    test("it should filter by a search term (link)", () => {
        expect(filterByTerm(input, "link")).toEqual(output);
    });
    test("it should filter by a search term (Link)", () => {
        expect(filterByTerm(input, "LINK")).toEqual(output);
    });
    test("it should filter by a search term (null)", () => {
        expect(() => { filterByTerm(input, null) }).toThrow(/cannot be empty/);
    });
});
