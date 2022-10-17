import React from 'react'

const serviceDetails = ({data}) => {
  return (
    
    <h2>{data.title}</h2>
  );
};

export default serviceDetails;

export async function getServerSideProps({params}) {
    const res = await fetch (`${process.env.BASE_URL}posts/${params.id}`);
    const data = await res.json();

    return {props: {data} };
}