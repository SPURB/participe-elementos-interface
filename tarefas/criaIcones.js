const webfontsGenerator = require('webfonts-generator')
const fs = require('fs')
const pathIcones = 'editaveis/icones/'
//const destino = 'publicos/icones'
const destino = '../participe/src/assets/icones'
const nomeFonte = 'participe'

fs.readdir(pathIcones, (err, data) => {
	if (err) throw err;
	let svgs = data.filter(d => d.slice(-4) === '.svg') // apenas svgs
	let svgsWithPaths = svgs.map(index => pathIcones + index) // concatena paths 

	webfontsGenerator({
		files: svgsWithPaths,
		dest: destino,
		fontName: nomeFonte,
		html: false,
	}, function(error) {
		if (error) {
			console.log('Errrrrroou!', error);
		} else {
			console.log(`Feito! Parabéns. Arquivos da fonte no diretório ${destino}`);
		}
	})
})
