import { groupByCategory } from "./filter";

describe("groupByCategory", () => {
  it("should transform data by group to dictionary", () => {
    const mockData = [
      {
        id: "1",
        name: "Auto",
        category: "GF",
      },
      {
        id: "2",
        name: "Jame",
        category: "PLX",
      },
      {
        id: "3",
        name: "Great",
        category: "ASG",
      },
      {
        id: "4",
        name: "New",
        category: "ASG",
      },
      {
        id: "5",
        name: "Theng",
        category: "GF",
      },
    ];

    const result = groupByCategory(mockData);

    expect(result).toEqual(
      expect.objectContaining({
        GF: [
          {
            id: "1",
            name: "Auto",
            category: "GF",
          },
          {
            id: "5",
            name: "Theng",
            category: "GF",
          },
        ],
        PLX: [
          {
            id: "2",
            name: "Jame",
            category: "PLX",
          },
        ],
        ASG: [
          {
            id: "3",
            name: "Great",
            category: "ASG",
          },
          {
            id: "4",
            name: "New",
            category: "ASG",
          },
        ],
      })
    );
  });
});
