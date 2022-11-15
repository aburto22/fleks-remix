import { json, redirect } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import Container from "~/components/Container";
import { getPeople, sortPeople } from "~/lib/people";
import type { TPerson, TSortOptions } from "~/types";
import MainLayout from "~/layouts/Main";

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const field = body.get("field");
  const order = body.get("order");

  if (typeof field !== "string" || typeof order !== "string") {
    return redirect("/");
  }

  const params = new URLSearchParams({ field, order });

  const url = `/?${params.toString()}`;

  return redirect(url);
};

const getLoaderData = async (searchParams: URLSearchParams) => {
  const field = searchParams.get("field");
  const order = searchParams.get("order");
  const people: TPerson[] = getPeople();

  if (!order || (order !== "asc" && order !== "dsc")) {
    const sortOptions: TSortOptions = { field: "none", order: "asc" };
    return { people, sortOptions };
  }

  if (
    !field ||
    (field !== "none" &&
      field !== "firstName" &&
      field !== "lastName" &&
      field !== "age")
  ) {
    const sortOptions: TSortOptions = { field: "none", order };
    return { people, sortOptions };
  }

  const sortOptions: TSortOptions = { field, order };
  const sortedPeople: TPerson[] = sortPeople(people, { field, order });

  return { people: sortedPeople, sortOptions };
};

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  return json(await getLoaderData(searchParams));
};

export type IndexLoaderData = Awaited<ReturnType<typeof getLoaderData>>;

export default function Index() {
  return (
    <MainLayout>
      <Container />
    </MainLayout>
  );
}
