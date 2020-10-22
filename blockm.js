let ops=['1n','1s','1e','1w','1u','1d','2n','2s','2e','2w'];

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

function sidedModelFile(block1,block2,op){
    return(
`{
  "parent": "myxrsidedblocks:block/sided${op}",
  "textures": {
    "main": "${joinResourcePath(getNamespace(block1),'block',getPath(block1))}",
    "side": "${joinResourcePath(getNamespace(block2),'block',getPath(block2))}"
  }
}`);
}

function sidedBlockStateFile(block){
    return(
`{
  "variants": {
    "facing=north,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1n"
    },
    "facing=east,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1e"
    },
    "facing=south,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1s"
    },
    "facing=west,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1w"
    },
    "facing=up,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1u"
    },
    "facing=down,twoside=false": {
      "model": "myxrsidedblocks:block/${block}_1d"
    },
    "facing=north,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2n"
    },
    "facing=east,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2e"
    },
    "facing=south,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2s"
    },
    "facing=west,twoside=true": {
      "model": "myxrsidedblocks:block/${block}_2w"
    }
  }
}`)
}

function sidedItemModel(block1,block2){
    return(
`{
  "parent": "myxrsidedblocks:block/${getPath(block1)}_${getPath(block2)}_1n"
}`);
}

function toCamel(block){
    return block.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join('');
}

function sidedBlockClass(block){
    return `package de.myxrcrs.sidedblocks.blocks;

public class ${toCamel(block)} extends SidedBlock {
}`
}

function sidedBlockItemReg(block){
    return `public static final RegistryObject<BlockItem> ${block.toUpperCase()} = ITEMS.register("${block}", ()->new BlockItem(InitBlocks.${block.toUpperCase()}.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));`
}

function sidedBlockReg(block){
    return `public static final RegistryObject<Block> ${block.toUpperCase()} = BLOCKS.register("${block}", ${toCamel(block)}::new);`
}

const fs=require('fs');
const path=require('path');

const PACKAGE_PATH = path.join('src','main','java','de','myxrcrs','sidedblocks');
const RESOURCE_PATH = path.join('src','main','resources','assets','myxrsidedblocks');

function genSided(block1,block2){
    // let block1 = block1.split('_').map(s=>s[0]).join('');
    // let block2 = block2.split('_').map(s=>s[0]).join('');
    fs.writeFileSync(path.join(RESOURCE_PATH,'blockstates',`${getPath(block1)}_${getPath(block2)}.json`),sidedBlockStateFile(`${getPath(block1)}_${getPath(block2)}`));
    for(let op of ops){
        fs.writeFileSync(path.join(RESOURCE_PATH,'models/block/',`${getPath(block1)}_${getPath(block2)}_${op}.json`),sidedModelFile(block1,block2,op));
    }
    fs.writeFileSync(path.join(RESOURCE_PATH,'models','item',`${getPath(block1)}_${getPath(block2)}.json`),sidedItemModel(block1,block2));
    fs.writeFileSync(path.join(PACKAGE_PATH,'blocks',`${toCamel(`${getPath(block1)}_${getPath(block2)}`)}.java`),sidedBlockClass(`${getPath(block1)}_${getPath(block2)}`));
}

let blockList = JSON.parse(fs.readFileSync('blocklist.json'));

function exitSave(code){
    fs.writeFileSync('blocklist.json',JSON.stringify(blockList));
    process.exit(code);
}

const commands = {

    'add':(type,block1,block2)=>{
        blockList.blocks.push({type,block1,block2});
        exitSave(0);
    },

    'remove':(type,block1,block2)=>{
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
                fs.unlinkSync(path.join(RESOURCE_PATH,'blockstates',`${getPath(v.block1)}_${getPath(v.block2)}.json`));
                ops.forEach(op=>fs.unlinkSync(path.join(RESOURCE_PATH,'models/block/',`${getPath(v.block1)}_${getPath(v.block2)}_${op}.json`)));
                fs.unlinkSync(path.join(RESOURCE_PATH,'models','item',`${getPath(v.block1)}_${getPath(v.block2)}.json`));
                fs.unlinkSync(path.join(PACKAGE_PATH,'blocks',`${toCamel(`${getPath(v.block1)}_${getPath(v.block2)}`)}.java`));
            }catch(e){
                console.warn(e.message);
            }
        });
        blockList.blocks.forEach((v)=>{
            if(v.type=='sided'){
                genSided(v.block1,v.block2);
                blockReg.push(sidedBlockReg(`${getPath(v.block1)}_${getPath(v.block2)}`));
                itemReg.push(sidedBlockItemReg(`${getPath(v.block1)}_${getPath(v.block2)}`));
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