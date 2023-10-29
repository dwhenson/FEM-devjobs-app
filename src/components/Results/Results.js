import Image from "next/image";
import { data } from "@/data/data";

async function Results() {
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
          </li>
        ),
      )}
    </ul>
  );
}

export default Results;
