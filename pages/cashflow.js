import React from 'react';

export const getStaticProps = async () => {
  // Call an external API endpoint to get industry categories
  const res = await fetch(
    'https://fmpcloud.io/api/v4/standard_industrial_classification/all?apikey=59a33b575e6d2dcd95caf8ed2877fc10'
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

const Cashflow = (props) => {
  // TODO Rate limit 10 calls per second

  const requiredExchangeOnly = props.data.filter(
    (item) => item.industryTitle === 'REAL ESTATE'
  );
  const companyIds = requiredExchangeOnly.map((o) => o.symbol);
  const res = companyIds.map(
    (ticker) =>
      `https://fmpcloud.io/api/v3/cash-flow-statement/${ticker}?limit=120&apikey=59a33b575e6d2dcd95caf8ed2877fc10`
  );

  return (
    <>
      {/* {console.log(props.data)} */}
      {console.log(res)}
    </>
  );
};

export default Cashflow;
