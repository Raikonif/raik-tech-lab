export const isPublished = (publishDate: Date, draft: boolean) => {
  return !draft && publishDate < new Date();
};

export const sortByPublishDateDesc = <
  T extends { data: { publishDate: Date } },
>(
  entries: T[],
) => {
  return entries.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
};
