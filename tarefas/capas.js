const sharp = require('sharp')
const file = process.env.npm_package_config_arquivo

const inputFolder = './capas/'
const outputFolder = './publicos/capas/'
const sizes = [ 1900, 1300, 1000, 700, 480, 15 ]

let inputPath = file => `${ inputFolder }${ file }`
let createFile = ( input, width ) => {
    const file = input.replace(inputFolder, '')

    const extension = file.split('.').pop()
    const fileNoExtension = file.replace('.' + extension, '')

    sharp(input)
        .resize({ width: width })
        .toFile(`${outputFolder}${fileNoExtension}_${width}w.${extension}`)
        .catch( err => {
            throw new Error(err)
        })

    sharp(input)
        .resize({ width: width })
        .webp()
        .toFile(`${outputFolder}${fileNoExtension}_${width}w.webp`)
        .catch( err => {
            throw new Error(err)
        })
}

if (file === 'default'){
    const fs = require('fs')
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