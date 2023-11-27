const http = require('http')

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const apiReq = http.request(options, (apiRes)=>{
    apiRes.on('data', (data)=>{
        console.log("DATA:", data.toString());
    })
})

apiReq.on('error', (err)=>{
    console.log('Error :', err);
})

apiReq.end()
