class BlockType{

    static modelFile(){}

    static blockStateFile(){}

    static itemModelFile(){}

    static classFile(){}

    static type = '';

    static texturesNum = 0;

    static ops = [];

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

    static texturesNum = 2;

    static ops = ['1','2'];
}

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

function tripleModelFile(side1,side2,top1,top2,op){
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

function tripleBlockStateFile(block){
    return(
`{
  "variants": {
    "facing=north,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true
    },
    "facing=east,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=0,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n0",
      "uvlock": true,
      "x": 90
    },

    "facing=north,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true
    },
    "facing=east,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=90,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n90",
      "uvlock": true,
      "x": 90
    },

    "facing=north,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true
    },
    "facing=east,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=180,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n180",
      "uvlock": true,
      "x": 90
    },

    "facing=north,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true
    },
    "facing=east,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=270,side_rotation=0": {
      "model": "myxrsidedblocks:block/${block}_n270",
      "uvlock": true,
      "x": 90
    },


    "facing=north,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true
    },
    "facing=east,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=0,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e0",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true
    },
    "facing=east,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=90,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e90",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true
    },
    "facing=east,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=180,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e180",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true
    },
    "facing=east,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=270,side_rotation=90": {
      "model": "myxrsidedblocks:block/${block}_e270",
      "uvlock": true,
      "x": 90
    },


    "facing=north,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true
    },
    "facing=east,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=0,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s0",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true
    },
    "facing=east,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=90,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s90",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true
    },
    "facing=east,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=180,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s180",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true
    },
    "facing=east,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=270,side_rotation=180": {
      "model": "myxrsidedblocks:block/${block}_s270",
      "uvlock": true,
      "x": 90
    },

    "facing=north,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true
    },
    "facing=east,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=0,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w0",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true
    },
    "facing=east,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=90,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w90",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true
    },
    "facing=east,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=180,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w180",
      "uvlock": true,
      "x": 90
    },
  
    "facing=north,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true
    },
    "facing=east,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "y": 90
    },
    "facing=south,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "y": 180
    },
    "facing=west,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "y": 270
    },
    "facing=up,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 270
    },
    "facing=down,up_rotation=270,side_rotation=270": {
      "model": "myxrsidedblocks:block/${block}_w270",
      "uvlock": true,
      "x": 90
    }
  }
}`)
}

function tripleItemModel(side1,side2,top1,top2){
    return(
`{
  "parent": "myxrsidedblocks:block/${getPath(side1)}_${getPath(side2)}_${getPath(top1)}_${getPath(top2)}_n0"
}`);
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

function tripleBlockClass(block){
    return `package de.myxrcrs.sidedblocks.blocks;

public class ${toCamel(block)} extends TripleSidedBlock {
}`
}

const fs=require('fs');
const path=require('path');

const PACKAGE_PATH = path.join('src','main','java','de','myxrcrs','sidedblocks');
const RESOURCE_PATH = path.join('src','main','resources','assets','myxrsidedblocks');

function combineName(...args){
    return args.map(x=>getPath(x)).join('_');
}

function generate(blockType,...args){
    fs.writeFileSync(path.join(RESOURCE_PATH,'blockstates',`${getPath(block1)}_${getPath(block2)}.json`),SidedType.blockStateFile(`${getPath(block1)}_${getPath(block2)}`));
    for(let op of sidedOps){
        fs.writeFileSync(path.join(RESOURCE_PATH,'models/block/',`${getPath(block1)}_${getPath(block2)}_${op}.json`),SidedType.modelFile(block1,block2,op));
    }
    fs.writeFileSync(path.join(RESOURCE_PATH,'models','item',`${getPath(block1)}_${getPath(block2)}.json`),SidedType.itemModelFile(block1,block2));
    fs.writeFileSync(path.join(PACKAGE_PATH,'blocks',`${toCamel(`${getPath(block1)}_${getPath(block2)}`)}.java`),SidedType.classFile(`${getPath(block1)}_${getPath(block2)}`));
}

let blockList = JSON.parse(fs.readFileSync('blocklist.json'));

function exitSave(code){
    if(code==0)fs.writeFileSync('blocklist.json',JSON.stringify(blockList));
    process.exit(code);
}

const commands = {

    'add':(type,...args)=>{
        if(type=='sided'){
            let [block1,block2] = args;
            if(!(type&&block1&&block2))exitSave(1);
            blockList.blocks.push({type,block1,block2});
        }else if(type=='triple')
        exitSave(0);
    },

    'remove':(type,block1,block2)=>{
        if(!(type&&block1&&block2))exitSave(1);
        blockList.blocks.forEach((v,i,arr)=>{
            if(v.type==type&&v.block1==block1&&v.block2==block2){
                blockList.removed.push({...v});
                arr.splice(i,1);
                exitSave(0);
            }
        });
        exitSave(1);
    },

    'generate':()=>{
        let itemReg=[];
        let blockReg=[];
        blockList.removed.forEach((v)=>{
            try{
                if(v.type=='sided'){
                    fs.unlinkSync(path.join(RESOURCE_PATH,'blockstates',`${getPath(v.block1)}_${getPath(v.block2)}.json`));
                    SidedType.ops.forEach(op=>fs.unlinkSync(path.join(RESOURCE_PATH,'models/block/',`${getPath(v.block1)}_${getPath(v.block2)}_${op}.json`)));
                    fs.unlinkSync(path.join(RESOURCE_PATH,'models','item',`${getPath(v.block1)}_${getPath(v.block2)}.json`));
                    fs.unlinkSync(path.join(PACKAGE_PATH,'blocks',`${toCamel(`${getPath(v.block1)}_${getPath(v.block2)}`)}.java`));
                }
            }catch(e){
                console.warn(e.message);
            }
        });
        blockList.blocks.forEach((v)=>{
            if(v.type=='sided'){
                genSided(v.block1,v.block2);
                blockReg.push(blockReg(`${getPath(v.block1)}_${getPath(v.block2)}`));
                itemReg.push(blockItemReg(`${getPath(v.block1)}_${getPath(v.block2)}`));
            }else if(v.type=='triple'){

            }//TODO
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
    ${blockReg.join('\n    ')}
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
    ${itemReg.join('\n    ')}
}`
        );
        blockList.removed = [];
        exitSave(0);
    },
}

commands[process.argv[2]](...process.argv.slice(3));