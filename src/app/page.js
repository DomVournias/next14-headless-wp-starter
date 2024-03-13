import Image from "next/image";

export const metadata = {
  title: "Testing Environment",
  description: "Testing description",
  alternates: {
    canonical: "https://example.com",
    languages: {
      "el-EL": "https:/example.com",
    },
  },
};

export default async function Home() {
  //* Fetches the WP data
  const res = await fetchHomeSections();

  const sections = res.data.sectionCategory.sections.nodes;

  //* Gets every section by slug
  // const getSectionBySlug = (slug) => {
  //   const section = sections.find((item) => item.slug === slug);

  //   return section[slug];
  // };
  return (
    <>
      <h2>Hello world!</h2>
      <div>{res.JSON.stringify()}</div>
    </>
  );
}
