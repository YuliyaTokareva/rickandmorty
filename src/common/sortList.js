const collator = new Intl.Collator('en-US', { sensitivity: 'base' });

export const getSortedByName = (listPerson) => {
  return listPerson.sort((a, b) => collator.compare(a.name, b.name));
};
