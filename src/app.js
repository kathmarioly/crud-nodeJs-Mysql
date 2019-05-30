const color = require('colors');
const express = require('express');
const app = express();


//SETTINGS:
app.set('port', process.env.PORT || 3000); //Si existe un puerto en el sistemo operativo, lo usa, de lo contrario va con el 3000



app.listen(app.get('port'), ()=>{
    console.log('Server on Port 4000'.red)
})

/*app.listen(4000, () =>{
    console.log('Server on Port 4000'.red)
});
*/