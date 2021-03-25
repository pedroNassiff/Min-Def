const router = require('express').Router()
const {checkToken} = require('../middlewares')
const { Noticias, Bibliotecas } = require('../../db')


router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
	"multipart/form-data",
    "user-token", "Origin", "Content-Type", "Accept"
  );
  next();
});

router.get('/getNoticia', async (req, res) => {
  const noticias = await Noticias.findAll()
  res.status(200).send({
    noticias: noticias,
    ok:true
  });
})

router.get('/getBiblioteca', async (req, res) => {
  const biblioteca = await Bibliotecas.findAll()
  res.status(200).send({
    biblioteca: biblioteca,
    ok:true
  });
})

router.post('/uploadBiblioteca', async (req, res) => {
	
	if(req.files.file === null) {
        return res.status(400).json({msg: 'Archivo no subido'});
  }
	const file =  req.files.file;
	file.mv(`/var/www/vhosts/mpdchaco.com.ar/httpdocs/client/build/uploads/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		
		//grabo en db
		const bibliotecas = Bibliotecas.create({
		  fileurl: `https://mpdchaco.com.ar/uploads/${file.name}`,
		  nombre:  req.body.nombre,
		  categoria:  req.body.categoria
		})
		if(bibliotecas){
		  res.status(200).send({
			msg: 'se guardo correctamente',
			ok:true
		  });
		}else{
		  res.status(200).send({
			msg: 'problemas al guardar',
			ok: false
		  });
		}
		
  });
})


router.post('/uploadNoticia', async (req, res) => {
	
	if(req.files.img === null) {
        return res.status(400).json({msg: 'Archivo no subido'});
  	}
	const file =  req.files.img;
	file.mv(`/var/www/vhosts/mpdchaco.com.ar/httpdocs/client/build/noticias/${file.name}`, err => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		
		//grabo en db
		const noticias = Noticias.create({
		  img: `https://mpdchaco.com.ar/noticias/${file.name}`,
		  title:  req.body.title,
		  description:  req.body.description,
		  meta:  req.body.meta
		})
		if(noticias){
		  res.status(200).send({
			msg: 'se guardo correctamente',
			ok:true
		  });
		}else{
		  res.status(200).send({
			msg: 'problemas al guardar',
			ok: false
		  });
		}
		
  });
})

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