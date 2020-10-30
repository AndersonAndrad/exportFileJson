import React, {useState} from 'react';
import exportFromJson from 'export-from-json'; 

export default function Main() {
  const [type, setType] = useState('');
  const [nameFile, setNameFile] = useState('');

  function fileName(name: string){
    setNameFile(name)
  }

  function fileType(type: string){
    setType(type);
  }

  const data = [
    {
      "id":"1",
      "name":"Anderson",
      "email":"test@outlook.com",
      "active":true,
  },
    {
      "id":"1",
      "name":"Anderson",
      "email":"test@outlook.com",
      "active":true,
  },
    {
      "id":"1",
      "name":"Anderson",
      "email":"test@outlook.com",
      "active":true,
  }
  ]
  
  // function download(t1 :string, t2: string, t3: string){
  //   console.log(t1)
  //   console.log(t2)
  //   console.log(t3)
  // }

  function download(data: object, fileName: string, exportType: any){
    if(fileName != null || undefined && exportType != null || undefined)
    exportFromJson({data, fileName, exportType})
  }

  // "txt" | "json" | "csv" | "xls" | "xml"
  
  return (
    <div>
     <label>deseja fazer download das informacoes ?</label>
     <button onClick={() => download(data, nameFile, type)}>download</button>
     
     <br/>

     <label>File name</label>
     <input type="text" onChange={(event) => fileName(event.target.value)}/>
     
     <br/>
     
     <label>File type</label>
     <select onChange={  (event) => fileType( event.target.value)} >
        <option ></option>
        <option value="txt">txt</option>
        <option value="json">json</option>
        <option value="csv">csv</option>
        <option value="xls">xls</option>
        <option value="xml">xml</option>
     </select>
    </div>
  );
}



// document.body.addEventListener('click', (e) => {
//   if (e.target === $data) {
//     $data.setAttribute('contenteditable', 'true')
//   } else {
//     $data.setAttribute('contenteditable', 'false')
//   }
// })
// function download (exportType) {
//   const fileName = $fileName.value
//   const data = JSON.parse($data.innerText)
//   window.exportFromJSON({ data, fileName, exportType })
// }
