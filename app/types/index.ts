import type { getPeople } from "~/lib/people";

export type TPerson = ReturnType<typeof getPeople>[number];

export type TSortOptions = {
  field: "none" | "firstName" | "lastName" | "age";
  order: "asc" | "dsc";
};
