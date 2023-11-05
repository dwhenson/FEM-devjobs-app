import styles from "./Search.module.css";
import Button from "@/components/Button";

function Search({
  position,
  setPosition,
  location,
  setLocation,
  fullTimeOnly,
  setFullTimeOnly,
  updateResults,
}) {
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        updateResults();
      }}>
      <div>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
        <label htmlFor="position">Search by position</label>
      </div>
      <div>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label htmlFor="location">Search by location</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="fulltime-only"
          checked={fullTimeOnly}
          onChange={(event) => setFullTimeOnly(event.target.checked)}
        />
        <label htmlFor="fulltime-only">
          <strong>Full Time Only</strong>
        </label>
        <Button>search</Button>
      </div>
    </form>
  );
}

export default Search;
