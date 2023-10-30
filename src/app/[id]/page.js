import { data } from "@/data/data";

export function generateStaticParams() {
  return data.map((item) => ({ id: String(item.id) }));
}

function JobDetails({ params }) {
  const {
    logo,
    logoBackground,
    company,
    website,
    postedAt,
    contract,
    position,
    location,
    apply,
    description,
    requirements,
    role,
  } = data.find((item) => String(item.id) === params.id);

  return (
    <>
      <h2>{position}</h2>
      <p>{description}</p>
    </>
  );
}

export default JobDetails;
