# Participe-elementos-interface
Repositório de ícones, favicon e capas do https://participe.gestaourbana.sp.gov.br

## Setup

```bash
git clone git@github.com:SPURB/participe-elementos-interface.git
cd participe-elementos-interface
npm i
```

___
## Seções
  - `editaveis/` -> arquivos abertos (illustrator)
  - `capas/` -> originais de capas de consultas públicas
  - `publicos/` -> arquivos públicos 
  - `plugins/` -> plugins para os editáveis  
  - `tarefas/` -> tarefas de automatizacao
___
## Favicon
### Como gerar um arquivo ico a partir de um png
#### Pré-requesitos: 
 - Adobe Photoshop CS6 
 - Arquivo 16x16px no formato `.png`
1. Baixar o plugin e verificar a versão (32 ou 64bits)
2. Colar o arquivo em `C:\Program Files\Adobe\Adobe Photoshop CS6 (64 Bit)\Plug-ins\File Formats` (windows) ou local equivalente 
3. Se a pasta não existir, ela deverá ser criada
4. Abrir o Photoshop e carregar o arquivo png
5. Salvar o arquivo como *ICO (Windows Icon) (`*.ICO`)*
___

## Ícones
### Como atualizar a webfont com os ícones do participe
> O participe utiliza webfont para renderizar os ícones. Veja abaixo o procedimento para atualizar a webgfont.
#### Pré-requisitos: 
- [nodejs](https://nodejs.org/en/)
- [figma](https://www.figma.com/)

1. Acesse a biblioteca de ícones do figma
https://www.figma.com/file/gl5QfVl6VtUe6JSTOUoa8JCZ/Participe-%C3%8Dcones?node-id=0%3A1. Mantenha esse arquivo

2. Do figma exporte os frames dos ícones para o diretório `editaveis/icones/`

3. Compile os svgs em webfont
```
npm run icons
```
A webfont com os ícones do participe estará criada em `publicos/icones/`.

___
## Capas

### Como gerar todas as versões de capas

> No site as seguintes larguras de imagens são utilizadas (em pixels): `1900`, `1300`, `1000`, `700`, `480`, `15`. 
> O procedimento também irá compilar as imagens, nos mesmos formatos e larguras, para `.webp`


#### Pré-requisitos:
- [nodejs](https://nodejs.org/en/)
- [git-fls](https://git-lfs.github.com/)
- Imagem da consulta com pelo menos 1900px de largura

#### Instruções:

1. Inclua a `NOVA-CAPA` no diretório `capas/`
2. Execute o comando alterando o parâmetro `arquivo`:

```bash
npm run capas --elemento:arquivo=NOVA-CAPA.jpg
```

ou compile todas as imagens do diretório `capas/`

```bash
npm run capas
```

Os arquivos estarão disponíveis em `publicos/capas/` 