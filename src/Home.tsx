import { fetchDust } from "./Api/fineDust";
import { useState, useEffect } from "react";
import FineDustItem from "./components/FineDustItem";
import styles from "./css/Home.module.css";
import { Search } from "./components/Search";

export default function Home() {
  const [dustData, setDustData] = useState<any>(null);
  const [Loading, setLoading] = useState(false);
  const [PM, setPM] = useState("PM10");
  const [year, setYear] = useState(new Date().getFullYear());
  const [pageNum, setPageNum] = useState("1");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDust(PM, year, pageNum);
      setDustData(data.response.body);
      setLoading(true);
    };

    fetchData();
  }, [PM, year, pageNum]);

  const fineDustSearch = (PM: string, Year: number, Page: string) => {
    setPM(PM);
    setYear(Year);
    setPageNum(Page);
  };

  return (
    <div className={styles.Home}>
      {Loading ? (
        <>
          <h1 className={styles.title}>미세먼지</h1>
          <div className={styles.search}>
            <Search
              totalCount={dustData.totalCount}
              numOfRows={dustData.numOfRows}
              fineDustSearch={fineDustSearch}
            />
          </div>
          <div className={styles.Home_fine}>
            <FineDustItem dustData={dustData} />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}
