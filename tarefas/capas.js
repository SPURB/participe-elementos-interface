const fs = require('fs')
const sharp = require('sharp')

const file = process.env.npm_package_config_arquivo

const inputFolder = './capas/'
const outputFolder = './publicos/capas/'

// tamanhos das capas:
// consultas abertas: 800x450 (1x) / 1600x900 (2x)
// consultas encerradas: 122x68 (1x) / 244x136 (2x)
// placeholder: 40x40
const sizes = [
	{ 'width': 1600, 'height': 900, 'for': 1 }, // abertas, 2x
	{ 'width': 800, 'height': 450, 'for': 1 },  // abertas, 1x
	{ 'width': 244, 'height': 136, 'for': 2 },  // encerradas, 2x
	{ 'width': 122, 'height': 68, 'for': 2 },   // encerradas, 1x
	{ 'width': 40, 'height': 40, 'for': 3 }     // placeholder
]

let setup = dir => { !fs.existsSync(dir) && fs.mkdirSync(dir) }
setup(outputFolder)

let inputPath = file => `${ inputFolder }${ file }`

let createFile = ( input, size ) => {
	const file = input.replace(inputFolder, '')

	const extension = file.split('.').pop()
	const fileNoExtension = file.replace('.' + extension, '')

	if (size.for != 3) {
		sharp(input)
			.resize({ width: size.width, height: size.height, fit: sharp.fit.cover })
			.toFile(`${outputFolder}${fileNoExtension}_${size.width}w.${extension}`)
			.catch( err => {
				console.log(input)
				console.error(err)
			})

		sharp(input)
			.resize({ width: size.width, height: size.height, fit: sharp.fit.cover })
			.webp()
			.toFile(`${outputFolder}${fileNoExtension}_${size.width}w.webp`)
			.catch( err => {
				console.log(input)
				console.error(err)
			})
	}
	else if (size.for == 3) {
		sharp(input)
			.resize({ width: size.width, height: size.height, fit: sharp.fit.cover })
			.blur(5)
			.toFile(`${outputFolder}${fileNoExtension}_${size.width}w.${extension}`)
			.catch( err => {
				console.log(input)
				console.error(err)
			})

		sharp(input)
			.resize({ width: size.width, height: size.height, fit: sharp.fit.cover })
			.blur(5)
			.webp()
			.toFile(`${outputFolder}${fileNoExtension}_${size.width}w.webp`)
			.catch( err => {
				console.log(input)
				console.error(err)
			})
	}
}

if (file === 'default'){
	fs.readdir('./capas/', (err, arquivos) => {
		arquivos.forEach(arquivo => {
			sizes.forEach(size => createFile(inputPath(arquivo), size) )
		})
	})
	console.log(`
	Sucesso. Arquivos criados em '/publicos/capas/'
	Para alterar uma imagem específica será mais rápido executar:
	+------------------------------------------------------------+
	|                                                            |
	|   npm run capas --elemento:arquivo=NOME-DO-ARQUIVO.jpg     |
	|                                                            |
	+------------------------------------------------------------+
	`)
}

else { 
	sizes.forEach(size => createFile(inputPath(file), size))
	console.log(`
	Sucesso. Arquivos criados em '/publicos/capas/'
	Para compilar todas as imagens do diretório '/capas/' executar:
	+----------------------+
	|                      |
	|   npm run capas      |
	|                      |
	+----------------------+
	`)
}
