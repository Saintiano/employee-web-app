

import React from 'react';
import * as XLSX from 'xlsx';
import Employees from '../../types/employee_types';

const FileInput: React.FC = () =>   {

  const [data, setData] = React.useState<Employees[] | [] | any>([]);

  const handleFileUpload = (e:any) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {

            if (!event.target) return;
            const workbook = XLSX.read(event.target.result, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet);

            setData(sheetData);

        };

        reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} className="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
      {data && (
        <div>
          <h2 className='mr-20 mb-6'>Imported Data:</h2>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {
            data.map((data: Employees, index: number)=>{
                return data.Image === undefined && data.Skills === undefined ?
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kindly, upload the excel document in the format directed in the Read Me file</h5>:
                <a  key={index} href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`${data.Image}`} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.Name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: {data.Skills}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date: {data.Date}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {data.Location}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rate: ${data.Rate}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: {data.Status}</p>
                            </div>
                        </a>
            })
          }
        </div>
      )}
    </div>
  );
}

export default FileInput;