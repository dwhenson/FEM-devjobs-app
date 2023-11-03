import Image from "next/image";
import Link from "next/link";

function Results({ results }) {
  return (
    <ul>
      {results.map(
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
