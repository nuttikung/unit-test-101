type CategoryBase = {
  category: string;
};

export const groupByCategory = <T extends CategoryBase>(
  data: T[]
): Record<string, T[]> => {
  return data.reduce((acc: Record<string, T[]>, item: T) => {
    acc[item.category] = [...(acc[item.category] ?? []), item];
    return acc;
  }, {});
};
