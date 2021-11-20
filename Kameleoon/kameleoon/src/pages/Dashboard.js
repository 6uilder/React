import React, {Fragment} from "react";
import Inp from "../components/Inp";
import Table from "../components/Table";

export const Dashboard = ({dataAll, onCreate, siteAll}) => {


  return (
    <Fragment>
      <h1>dashboard</h1>
      <Inp onCreate={onCreate}/>
      {/* {найденоИНФО ? 
      <Table database={database}/> :
      <div>
        <p>Your search did not match any results.</p>
        <button>Reset</button>
      </div>} */}
      <Table dataAll={dataAll} siteAll={siteAll} />
    </Fragment>
  )
}