import { monthArr } from "../constants";

export default function Overview() {

  return (
    <div className="dsp-flex">
      <div style={{marginLeft:"4rem"}} className="bg-w">
        <div className="fw900 mar-l8 f-head">Overview</div>
        <div className="mar-l8 clr-db">Monthly Earning</div>
        <div className="dsp-flex monthly-container">
          {monthArr.map((item) => {
            return (
              <div key={item.name} className="single-month">
                <div style={{height:item.val, background:item.bg,borderRadius:"8px"}}></div>
                <div className="text-center">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="customers bg-w">
          <div className="fw900 mar-l8 f-head">Customers</div>
          <div className="mar-l8 clr-db">Customers that buy product</div>
          <div className="center-data" style={{marginTop:"15px"}}>
          <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{"--value":"65"}}></div>
          </div>
      </div>
    </div>
  );
}
