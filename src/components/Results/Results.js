import Image from "next/image";
import Link from "next/link";
import styles from "./Results.module.css";

function Results({ results }) {
  return (
    <ul role="list" className={styles.results}>
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
