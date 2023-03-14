const collator = new Intl.Collator('en-US', { sensitivity: 'base' });

export const getSortedByName = (listPerson) => {
  if (listPerson.length === 0) return [];
  return listPerson.sort((a, b) => collator.compare(a.name, b.name));
};
