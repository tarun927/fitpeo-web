export default function Overview() {
  const monthArr = [
      {name:"Jan",val:"40%",bg:"#eae8e8"},
      {name:"Feb",val:"50%",bg:"#eae8e8"},
      {name:"Mar",val:"90%",bg:"#eae8e8"},
      {name:"Apr",val:"70%",bg:"#eae8e8"},
      {name:"May",val:"40%",bg:"#eae8e8"},
      {name:"Jun",val:"50%",bg:"#eae8e8"},
      {name:"Jul",val:"40%",bg:"#eae8e8"},
      {name:"Aug",val:"100%",bg:"#5931ea"},
      {name:"Sep",val:"70%",bg:"#eae8e8"},
      {name:"Oct",val:"60%",bg:"#eae8e8"},
      {name:"Nov",val:"50%",bg:"#eae8e8"},
      {name:"Dec",val:"40%",bg:"#eae8e8"},
  ];
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
