const axios = require ('axios');

axios.get("https://api-dolar-argentina.herokuapp.com/api/dolaroficial")
.then(function(resp){
    console.log(resp.data.fecha);
    console.log(resp.data.compra);
    console.log(resp.data.venta);
})
.catch(function(err){
    console.log(err);
})