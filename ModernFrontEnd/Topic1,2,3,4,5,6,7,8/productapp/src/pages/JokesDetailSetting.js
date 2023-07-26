// import React, { Component } from "react";

// class JokesDetail extends Component {
//   render() {
//     console.log(this.props);
//     return <div>JokesDetail</div>;
//   }
// }

// export default JokesDetail;

import { useNavigate, useParams } from "react-router-dom";

const JokesDetailSetting = () => {
  const params = useParams();

  //   let navigate = useNavigate();
  console.log(params);

  return (
    <main>
      <h1>JokesDetailSetting : {params.jokes_id} | SETTING</h1>
      {/* <button onClick={() => navigate("/product")}>product page</button> */}
    </main>
  );
};

// export default withRouter(ProductDetail)
export default JokesDetailSetting;
