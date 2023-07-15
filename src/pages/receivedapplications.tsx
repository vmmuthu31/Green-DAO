import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GETLOAN } from './BlockchainServices';
import { useAccount } from 'wagmi';
import { format } from 'date-fns';

const Header = dynamic(() => import('./components/Header'), {
  ssr: false,
});

function getdateformat(number: any) {
  const millisec = number * 1000;
  const date = new Date(millisec);
  return date;
}

const Receivedapplications = () => {
  const [field, setField] = useState([]);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    async function fetchData() {
      if (isConnected && address === '0x3907bAdE047531158c97c8C51b95c72a51E5e37e') {
        const res = await GETLOAN();
        console.log('rest', res);
        setField(res);
      }
    }
    fetchData();
  }, [address, isConnected]);
  console.log(field);

  function getdate(datas: any) {
    const test = getdateformat(datas);
    const year = test?.getFullYear();
    return year;
  }

  return (
    <div className='text-center bg-[#140506]'>
      <Header />
      <h1 className='text-center text-3xl mt-20 font-bold py-10 bg-[#140506] text-green-700'>
        Received Application
      </h1>
      <div className='nadula md:ml-80 overflow-x-auto max-w-screen-md'>
        <table className='md:table-fixed w-full'>
          <tr className='md:space-x-3 border-white border-2 md:text-2xl text-green-300'>
            <th className='p-5'>Farmer Name</th>
            <th className='p-5'>Aadhaar Number</th>
            <th className='p-5'>Amount of loan</th>
            <th className='p-5'>Reason for Loan</th>
            <th className='p-5'>Status</th>
            <th className='p-5'>Applied At</th>
          </tr>
          {field?.map((data: any, index) => (
            <tr className='border-white md:text-lg border-2' key={index}>
              <td>{data[0]}</td>
              <td>{parseInt(data[1])}</td>
              <td>{parseInt(data[2])}</td>
              <td>{data[3]}</td>
              <td>{data[4] == true ? 'approved' : 'unapproved'}</td>
              <td>2023</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Receivedapplications;
