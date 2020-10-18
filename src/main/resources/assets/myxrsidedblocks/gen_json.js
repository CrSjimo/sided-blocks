let ops=['1n','1s','1e','1w','1u','1d','2n','2s','2e','2w'];

function modelFile(block1,block2,op){
    return(
`{
  "parent": "myxrsidedblocks:block/sided${op}",
  "textures": {
    "main": "minecraft:block/${block1}",
    "side": "minecraft:block/${block2}"
  }
}`);
}

function blockStateFile(abbr){
    return(
`{
  "variants": {
    "facing=north,twoside=false": {
      "model": "myxrsidedblocks:block/${abbr}_1n"
    },
    "facing=east,twoside=false": {
      "model": "myxrsidedblocks:block/${abbr}_1e"
    },
    "facing=south,twoside=false": {
      "model": "myxrsidedblocks:block/${abbr}_1s"
    },
    "facing=west,twoside=false": {
      "model": "myxrsidedblocks:block/${abbr}_1w"
    },
    "facing=up,twoside=false": {
      "model": "myxrsidedblocks:block/${abbr}_1u"
    },
    "facing=down,twoside=false": {
      "model": "myxrsidedblocks:block/${abbr}_1d"
    },
    "facing=north,twoside=true": {
      "model": "myxrsidedblocks:block/${abbr}_2n"
    },
    "facing=east,twoside=true": {
      "model": "myxrsidedblocks:block/${abbr}_2e"
    },
    "facing=south,twoside=true": {
      "model": "myxrsidedblocks:block/${abbr}_2s"
    },
    "facing=west,twoside=true": {
      "model": "myxrsidedblocks:block/${abbr}_2w"
    }
  }
}`)
}

function itemModel(abbr1,abbr2){
    return(
`{
  "parent": "myxrsidedblocks:block/${abbr1}_${abbr2}_1n"
}`);
}

const fs=require('fs');

function genJson(block1,block2){
    let abbr1 = block1.split('_').map(s=>s[0]).join('');
    let abbr2 = block2.split('_').map(s=>s[0]).join('');
    fs.writeFileSync(`blockstates/${block1}_${block2}.json`,blockStateFile(`${abbr1}_${abbr2}`));
    for(let op of ops){
        fs.writeFileSync(`models/block/${abbr1}_${abbr2}_${op}.json`,modelFile(block1,block2,op));
    }
    fs.writeFileSync(`models/item/${block1}_${block2}.json`,itemModel(abbr1,abbr2));
}

genJson(process.argv[2],process.argv[3]);