import styles from "../css/FineDustItem.module.css";

interface DustData {
  districtName: string;
  moveName: string;
  itemCode: string;
  issueGbn: string;
  sn: number;
  issueDate: string;
  issueTime: string;
  issueVal: number;
  clearDate: string;
  clearTime: string;
  clearVal: number;
}

export default function FineDustItem({ dustData }: any) {
  const 미세먼지색 = (dust: number) => {
    if (dust <= 30) {
      return "#0000F5";
    } else if (dust <= 80) {
      return "#75FB4C";
    } else if (dust <= 120) {
      return "#FFFF54";
    } else if (dust <= 200) {
      return "#ED702D";
    } else if (dust <= 300) {
      return "#DD3528";
    }
  };

  return (
    <div className={styles.dust_item}>
      {dustData
        ? dustData.items.map((data: DustData, index: number) => (
            <div key={index} style={{ position: "relative" }}>
              <div className={styles.dust_detail}>
                <div className={styles.dust_addr}>
                  <p>{data.districtName}</p>&nbsp;
                  <p>{data.moveName}</p>
                </div>

                <div className={styles.dust_data}>
                  <h1>
                    미세먼지 항목 : <span>{data.itemCode}</span>
                  </h1>
                  <h1>
                    경보단계 : <span>{data.issueGbn}</span>
                  </h1>
                  <h1>
                    미세먼지 경보 현황 : <span>{data.sn}</span>
                  </h1>
                </div>

                <div className={styles.dust}>
                  <div className={styles.dust_issue}>
                    <div>
                      <h1>발령일 : {data.issueDate}</h1>
                      <p>발령시간 : {data.issueTime}</p>
                      <p>발령농도 : {data.issueVal}ug/m3</p>
                    </div>
                    <div
                      style={{
                        background: "#E5E6EC",
                        width: "200px",
                        height: "20px",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background: `${미세먼지색(data.issueVal)}`,
                          width: `${data.issueVal}px`,
                          height: "100%",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.dust_clear}>
                    <div>
                      <h1>해체일 : {data.clearDate}</h1>
                      <p>해체시간 : {data.clearTime}</p>
                      <p>해체농도 : {data.clearVal}ug/m3</p>
                    </div>

                    <div
                      style={{
                        background: "#E5E6EC",
                        width: "200px",
                        height: "20px",
                        borderRadius: "20px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background: `${미세먼지색(data.clearVal)}`,
                          width: `${data.clearVal}px`,
                          height: "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
