import Sorter from "../Sorter";
import { getName } from "~/lib/people";
import Person from "../Person";
import { useLoaderData } from "@remix-run/react";
import type { IndexLoaderData } from "~/routes/index";

function Table() {
  const { people } = useLoaderData<IndexLoaderData>();

  return (
    <main className="max-w-xl p-4 pb-8 mx-auto">
      <Sorter />
      <table className="w-full">
        <thead className="border-b border-fleks-dark">
          <tr>
            <th className="py-2 text-sm font-bold uppercase">Name</th>
            <th className="py-2 text-sm font-bold uppercase">Birthday</th>
            <th className="py-2 text-sm font-bold uppercase">Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <Person key={getName(person)} person={person} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
