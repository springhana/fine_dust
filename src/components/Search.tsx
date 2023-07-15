import { useEffect, useState } from "react";
import styles from "../css/Search.module.css";
export const Search = ({ totalCount, numOfRows, fineDustSearch }: any) => {
  const [page, setPage] = useState([]);
  const [PM, setPM] = useState("PM10");
  const [year, setYear] = useState(new Date().getFullYear());
  const [pageNum, setPageNum] = useState("1");

  useEffect(() => {
    const page: any = Math.ceil(totalCount / numOfRows);
    const pageArray: any = [];
    for (let i = 1; i < page + 1; i++) {
      pageArray.push(i);
    }
    setPage(pageArray);
  }, [totalCount, numOfRows]);

  const SearchOnClick = () => {
    fineDustSearch(PM, year, pageNum);
  };

  return (
    <div>
      <div className={styles.search}>
        <div className={styles.search_input}>
          <div>PM: {PM}</div>
          <div>Year: {year}</div>
          <div>Page: {pageNum}</div>
        </div>
      </div>

      <div>
        <div className={styles.info}>
          <div style={{ padding: "0 8px" }}>PM</div>
          <select
            name="PM"
            id="PM"
            onChange={(e: any) => {
              setPM(e.target.value);
            }}
            className={styles.select}
          >
            <option value="PM10">PM10</option>
            <option value="PM25">PM25</option>
          </select>
          <div style={{ padding: "0 20px" }}></div>
          <div style={{ padding: "0 8px" }}>년도</div>
          <select
            name="Year"
            id="Year"
            onChange={(e: any) => {
              setYear(e.target.value);
            }}
            className={styles.select}
          >
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className={styles.page}>
          {page.map((page: any) => (
            <div
              onClick={(e: any) => {
                setPageNum(e.target.textContent);
              }}
              key={page}
            >
              {page}
            </div>
          ))}
        </div>

        <button onClick={SearchOnClick} className={styles.searchBtn}>
          검색
        </button>
      </div>
    </div>
  );
};
