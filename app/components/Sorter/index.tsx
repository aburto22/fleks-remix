import { useLoaderData } from "@remix-run/react";
import type { IndexLoaderData } from "~/routes";

function Sorter() {
  const { sortOptions } = useLoaderData<IndexLoaderData>();

  return (
    <form
      className="flex flex-col items-center justify-center max-w-md py-8 mx-auto mt-4 mb-8 rounded-lg shadow-lg"
      method="post"
      action="?index"
    >
      <p className="mr-2 font-bold text-center">Sort By:</p>
      <div className="flex flex-col flex-wrap justify-center gap-1 mb-2 sm:flex-row sm:gap-3">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="none"
            data-testid="none-field"
            defaultChecked={sortOptions.field === "none"}
          />
          None
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="firstName"
            data-testid="firstName-field"
            defaultChecked={sortOptions.field === "firstName"}
          />
          First name
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="lastName"
            data-testid="lastName-field"
            defaultChecked={sortOptions.field === "lastName"}
          />
          Last Name
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="age"
            data-testid="age-field"
            defaultChecked={sortOptions.field === "age"}
          />
          Age
        </label>
      </div>
      <p className="mt-2 mr-2 font-bold text-center">Order By:</p>
      <select data-testid="order" name="order" defaultValue={sortOptions.order}>
        <option value="asc" data-testid="asc-order">
          Ascending
        </option>
        <option value="dsc" data-testid="dsc-order">
          Descending
        </option>
      </select>
      <button
        type="submit"
        className="flex px-8 py-2 mt-4 font-semibold text-white transition-colors border-2 rounded-full bg-fleks-dark border-fleks-dark hover:bg-white hover:text-fleks-dark"
      >
        Sort
      </button>
    </form>
  );
}

export default Sorter;
