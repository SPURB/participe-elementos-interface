# Participe-elementos-interface

Repositório de ícones, favicon e capas do https://participe.gestaourbana.sp.gov.br

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
> O participe utiliza webfont para renderizar os ícones. Veja abaixo o procedimento para atualizar. 
#### Pré-requisitos: 
- [nodejs](https://nodejs.org/en/)
- [figma](https://www.figma.com/)

1. Clone este projeto 
`git clone https://github.com/SPURB/participe-elementos-interface.git`

2. Instale as depenências do node na pasta raiz deste repositório

```
cd participe-elementos-interface
npm install
```

3. Acesse a biblioteca de ícones do figma
https://www.figma.com/file/gl5QfVl6VtUe6JSTOUoa8JCZ/Participe-%C3%8Dcones?node-id=0%3A1

4. Do figma exporte os frames dos ícones para o diretório `editaveis/icones`  

5. Compile os svgs em webfont
```
# na raiz do projeto
npm run icons
```
Se tudo der certo a font com os ícones do participe estará criada em `publicos/icones`.

___
## Capas

### Como gerar todas as versões de capas
Procedimento para criar capas para home do participe. 

#### Pré-requisitos:
- [nodejs](https://nodejs.org/en/)
- [git-fls](https://git-lfs.github.com/)
- Imagem da consulta com pelo menos 1900px de largura

#### Instruções:

1. Inclua a `NOVA-CAPA` no diretório `/capas/`
2. Execute o comando alterando o parâmetro `arquivo`:

```bash
npm run capas --elemento:arquivo=NOVA-CAPA.jpg
```

ou compile todas as imagens do diretório `/capas/`

```bash
npm run capas
```

Serão criadas no diretório `publicos/capas/`. Serão criadas imagens com as seguintes larguras (em pixels): `1900`,
`1300`, `1000`, `700`, `480`, `15`

O comando também irá criar, nos mesmos formatos e larguras, imagens do tipo `.webp`

