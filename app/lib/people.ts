import people from "~/data/data.json";
import type { TPerson, TSortOptions } from "~/types";

const getAge = (date: Date): number => {
  const now = new Date();
  const baseYears = now.getFullYear() - date.getFullYear() - 1;
  const birthdayPassedThisYear =
    date.getMonth() < now.getMonth() ||
    (date.getMonth() === now.getMonth() && date.getDate() <= now.getDate());
  return birthdayPassedThisYear ? baseYears + 1 : baseYears;
};

export const getPeople = () =>
  people.map((person) => ({
    ...person,
    age: getAge(new Date(person.birthday)),
  }));

type NameLike = {
  firstName: string;
  lastName: string;
};

export const getName = <T extends NameLike>(person: T): string =>
  `${person.firstName} ${person.lastName}`;

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-uk", {
    day: "numeric",
    month: "long",
  });

export const sortPeople = (
  people: TPerson[],
  { field, order }: TSortOptions
): TPerson[] => {
  if (field === "none") {
    return getPeople();
  }

  return people.slice(0).sort((a, b) => {
    if (a[field] < b[field]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[field] > b[field]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};
