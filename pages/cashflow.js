import React from 'react';

export const getStaticProps = async () => {
  // Call an external API endpoint to get industry categories
  const res = await fetch(
    'https://fmpcloud.io/api/v4/standard_industrial_classification/all?apikey=048b96c988fc220d4ce4b00d09b34261'
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

const Cashflow = (props) => {
  // TODO Rate limit 10 calls per second

  const requiredExchangeOnly =
    props && props.data.filter((item) => item.industryTitle === 'REAL ESTATE');
  const companyIds = requiredExchangeOnly.map((o) => o.symbol);
  const res = companyIds.map(
    (ticker) =>
      `https://fmpcloud.io/api/v3/cash-flow-statement/${ticker}?limit=120&apikey=048b96c988fc220d4ce4b00d09b34261`
  );

  // console.log(res);
  console.log(res);

  return <>{/* {console.log(props.data)} */}</>;
};

export default Cashflow;
