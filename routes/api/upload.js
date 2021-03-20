const router = require('express').Router()
const {checkToken} = require('../middlewares')


router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "user-token", "Origin", "Content-Type", "Accept"
  );
  next();
});

//cargar archivos solo si esta logeado 
router.post('/upload', async (req, res) => {
	
	if(req.files === null) {
        return res.status(400).json({msg: 'Archivo no subido'});
    }
    const file =  req.files.file;
	file.mv(`/var/www/vhosts/mpdchaco.com.ar/httpdocs/client/build/uploads/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
    

})


module.exports = router