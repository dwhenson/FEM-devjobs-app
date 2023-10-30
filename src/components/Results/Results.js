import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";

function Results() {
  return (
    <ul>
      {data.map(
        ({
          id,
          logo,
          postedAt,
          contract,
          position,
          company,
          location,
          logoBackground = "transparent",
        }) => (
          <li key={id}>
            <Link href={String(id)}>
              <Image
                src={logo}
                alt={company}
                width={30}
                height={30}
                style={{ backgroundColor: logoBackground }}
              />
              <p>{postedAt}</p>
              <p>{contract}</p>
              <h2>{position}</h2>
              <p>{company}</p>
              <p>{location}</p>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}

export default Results;
