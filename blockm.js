function combineOp(...args){
    if(args.length==1)return args[0];
    let a = [];
    for(let x of args[0]){
        for(let y of args[1]){
            a.push(x+y);
        }
    }
    return combineOp(a,...args.slice(2));
}

class BlockType{

    static modelFile(){}

    static blockStateFile(){}

    static itemModelFile(){}

    static classFile(){}

    static type = '';

    static ops = [];

    static argNames = [];

}

class SidedType extends BlockType{

    static modelFile(block1,block2,op){
        return(
`{
  "parent": "myxrsidedblocks:block/sided_${op}",
  "textures": {
    "main": "${joinResourcePath(getNamespace(block1),'block',getPath(block1))}",
    "side": "${joinResourcePath(getNamespace(block2),'block',getPath(block2))}"
  }
}`);
    }
    
    static blockStateFile(block){
        return(
`{
  "variants": {
    "facing=north,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1",
      "uvlock": true
    },
    "facing=east,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1",
      "y": 90,
      "uvlock": true
    },
    "facing=south,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1",
      "y": 180,
      "uvlock": true
    },
    "facing=west,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1",
      "y": 270,
      "uvlock": true
    },
    "facing=up,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1",
      "x": 270,
      "uvlock": true
    },
    "facing=down,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1",
      "x": 90,
      "uvlock": true
    },
    "facing=north,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2",
      "uvlock": true
    },
    "facing=east,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2",
      "y": 90,
      "uvlock": true
    },
    "facing=south,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2",
      "y": 180,
      "uvlock": true
    },
    "facing=west,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2",
      "y": 270,
      "uvlock": true
    }
  }
}`)
    }
    
    static itemModelFile(block1,block2){
        return(
`{
  "parent": "myxrsidedblocks:block/${getPath(block1)}_${getPath(block2)}_1"
}`);
    }

    static classFile(block){
        return `package de.myxrcrs.sidedblocks.blocks;

public class ${toCamel(block)} extends SidedBlock {
}`
    }

    static type = 'sided';

    static argNames = ['block1','block2'];

    static ops = ['1','2'];
}

class TripleType extends BlockType{

    static modelFile(side1,side2,top1,top2,op){
        return(
`{
  "parent": "myxrsidedblocks:block/triple_sided_${op}",
  "textures": {
    "side1": "${joinResourcePath(getNamespace(side1),'block',getPath(side1))}",
    "side2": "${joinResourcePath(getNamespace(side2),'block',getPath(side2))}",
    "top1": "${joinResourcePath(getNamespace(top1),'block',getPath(top1))}",
    "top2": "${joinResourcePath(getNamespace(top2),'block',getPath(top2))}"
  }
}`);
    }

    static blockStateFile(block){
        return(
`{
  "variants": {
    "facing=north,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 180
    },
    "facing=north,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 180
    },
    "facing=north,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 180
    },
    "facing=north,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 180
    },
    "facing=north,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 180
    },
    "facing=north,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 180
    },
    "facing=north,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 180
    },
  
    "facing=north,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 90
    },
    "facing=east,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 90,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 90,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 90,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 0
    },
    "facing=down,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 180
    }
  }
}`)
    }

    static itemModelFile(side1,side2,top1,top2){
        return(
`{
  "parent": "myxrsidedblocks:block/${getPath(side1)}_${getPath(side2)}_${getPath(top1)}_${getPath(top2)}_e0"
}`);
    }

    static classFile(block){
        return `package de.myxrcrs.sidedblocks.blocks;

public class ${toCamel(block)} extends TripleSidedBlock {
}`
    }

    static type = 'triple';

    static argNames = ['side1','side2','top1','top2'];

    static ops = combineOp(['n','e','s','w'],['0','90','180','270']);
}

class WindowEdge extends BlockType{}

const BLOCK_TYPES = {
    sided: SidedType,
    triple: TripleType,
};

function joinResourcePath(ns,...path){
    let str = '';
    if(ns){
        str+=(ns+':');
    }
    str+=path.join('/');
    return str;
}

function getNamespace(str){
    let li =  str.split(':');
    if(li.length==1)return '';
    else return li[0];
}

function getPath(str){
    return str.split(':').pop();
}


function toCamel(block){
    return block.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join('');
}

function blockItemReg(block){
    return `public static final RegistryObject<BlockItem> ${block.toUpperCase()} = ITEMS.register("${block}", ()->new BlockItem(InitBlocks.${block.toUpperCase()}.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));`
}

function blockReg(block){
    return `public static final RegistryObject<Block> ${block.toUpperCase()} = BLOCKS.register("${block}", ${toCamel(block)}::new);`
}

const fs=require('fs');
const path=require('path');

const PACKAGE_PATH = path.join('src','main','java','de','myxrcrs','sidedblocks');
const RESOURCE_PATH = path.join('src','main','resources','assets','myxrsidedblocks');

function combineName(...args){
    return args.map(x=>getPath(x)).join('_');
}

function generate(blockType,...args){
    fs.writeFileSync(path.join(RESOURCE_PATH,'blockstates',`${combineName(...args)}.json`),blockType.blockStateFile(combineName(...args)));
    for(let op of blockType.ops){
        fs.writeFileSync(path.join(RESOURCE_PATH,'models/block/',`${combineName(...args)}_${op}.json`),blockType.modelFile(...args,op));
    }
    fs.writeFileSync(path.join(RESOURCE_PATH,'models','item',`${combineName(...args)}.json`),blockType.itemModelFile(...args));
    fs.writeFileSync(path.join(PACKAGE_PATH,'blocks',`${toCamel(combineName(...args))}.java`),blockType.classFile(combineName(...args)));
}

function remove(blockType,...args){
    try{
        fs.unlinkSync(path.join(RESOURCE_PATH,'blockstates',`${combineName(...args)}.json`));
        blockType.ops.forEach(op=>fs.unlinkSync(path.join(RESOURCE_PATH,'models/block/',`${combineName(...args)}_${op}.json`)));
        fs.unlinkSync(path.join(RESOURCE_PATH,'models','item',`${combineName(...args)}.json`));
        fs.unlinkSync(path.join(PACKAGE_PATH,'blocks',`${toCamel(combineName(...args))}.java`));
    }catch(e){
        console.warn(`\u001b[33mWARN-filesystem-errno\u001b[0m ${e.message}`);
    }
}

let blockList = JSON.parse(fs.readFileSync('blocklist.json'));

function exitSave(code){
    if(code==0)fs.writeFileSync('blocklist.json',JSON.stringify(blockList,undefined,2));
    process.exit(code);
}

function checkArgs(Type,args){
    if(args.length<Type.argNames.length)return false;
    return true;
}

function argsToBlock(Type,args){
    let block = {type: Type.type};
    Type.argNames.forEach((p,i)=>{
        block[p] = args[i];
    });
    return block;
}

function compareArgsWithBlock(Type,args,block){
    let flag=true;
    Type.argNames.forEach((p,i)=>{
        if(block[p]!=args[i])flag=false;
    });
    if(!flag)return false;
    return true;
}

function blockToArgs(Type,block){
    let args = [];
    Type.argNames.forEach((p)=>{
        args.push(block[p]);
    });
    return args;
}

const commands = {

    'add':(type,...args)=>{
        let Type = BLOCK_TYPES[type];
        if(!Type)exitSave(1);
        if(!checkArgs(Type,args))exitSave(1);
        blockList.blocks.push(argsToBlock(Type,args));
        exitSave(0);
    },

    'remove':(type,...args)=>{
        let Type = BLOCK_TYPES[type];
        if(!Type)exitSave(1);
        if(!checkArgs(Type,args))exitSave(1);
        blockList.blocks.forEach((v,i,arr)=>{
            if(v.type==type && compareArgsWithBlock(Type,args,v)){
                blockList.removed.push({...v});
                arr.splice(i,1);
                exitSave(0);
            }
        });
        exitSave(1);
    },

    'generate':()=>{
        let itemRegList=[];
        let blockRegList=[];
        blockList.removed.forEach((v)=>{
            let Type = BLOCK_TYPES[v.type];
            if(!Type)console.warn(`WARN-unrecognized-type '${v.type}'.`);
            remove(Type,...blockToArgs(Type,v));
        });
        blockList.blocks.forEach((v)=>{
            let Type = BLOCK_TYPES[v.type];
            if(!Type)console.warn(`WARN-unrecognized-type '${v.type}'.`);
            generate(Type,...blockToArgs(Type,v));
            blockRegList.push(blockReg(combineName(...blockToArgs(Type,v))));
            itemRegList.push(blockItemReg(combineName(...blockToArgs(Type,v))));
            //TODO
        });
        fs.writeFileSync(path.join(PACKAGE_PATH,'init','InitBlocks.java'),
`package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import de.myxrcrs.sidedblocks.blocks.*;
import net.minecraft.block.Block;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitBlocks {
    public static final DeferredRegister<Block> BLOCKS = new DeferredRegister<>(ForgeRegistries.BLOCKS, SidedBlocks.MOD_ID);
    ${blockRegList.join('\n    ')}
}`
        );
        fs.writeFileSync(path.join(PACKAGE_PATH,'init','InitItems.java'),
`package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import net.minecraft.item.BlockItem;
import net.minecraft.item.Item;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitItems {
    public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, SidedBlocks.MOD_ID);
    ${itemRegList.join('\n    ')}
}`
        );
        blockList.removed = [];
        exitSave(0);
    },
    'ls':(type)=>{
        blockList.blocks.forEach((v)=>{
            if(!type||v.type==type){
                console.table(v);
            }
        });
    },
    'sort':()=>{
        blockList.blocks.sort((a,b)=>{
            let _f=(x,y)=>x>y?1:x==y?0:-1;
            if(a.type==b.type){
                let Type=BLOCK_TYPES[a.type];
                if(!Type){
                    console.warn(`WARN-unrecognized-type '${v.type}'.`);
                    return 0;
                }
                for(let p of Type.argNames){
                    if(a[p]==b[p])continue;
                    return _f(a[p],b[p]);
                }
                return 0;
            }else{
                return _f(Object.keys(BLOCK_TYPES).indexOf(a.type),Object.keys(BLOCK_TYPES).indexOf(b.type));
            }
        });
        exitSave(0);
    }
}

commands[process.argv[2]](...process.argv.slice(3));