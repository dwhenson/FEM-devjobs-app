import Image from "next/image";
import Button from "@/components/Button";
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
      <Image
        src={logo}
        alt={company}
        width={30}
        height={30}
        style={{ backgroundColor: logoBackground }}
      />
      <p>{company}</p>
      <p>{website}</p>
      <Button>Company Site</Button>

      <p>{postedAt}</p>
      <p>{contract}</p>
      <h2>{position}</h2>
      <p>{location}</p>
      <Button>Apply Now</Button>

      <p>{description}</p>

      <h3>Requirements</h3>
      <p>{requirements.content}</p>

      <h3>What You Will Do</h3>
      <p>{role.content}</p>
      <ol role="list">
        {role.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <h3>{position}</h3>
      <p>{company}</p>
      <Button>Apply Now</Button>
    </>
  );
}

export default JobDetails;
