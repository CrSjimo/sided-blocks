function blockItemReg(block){
    return `public static final RegistryObject<BlockItem> ${block.toUpperCase()} = ITEMS.register("${block}", ()->new BlockItem(InitBlocks.${block.toUpperCase()}.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));`
}
function toCamel(block){
    return block.split('_').map(word=>word[0].toUpperCase()+word.slice(1)).join('');
}
function blockReg(block){
    return `public static final RegistryObject<Block> ${block.toUpperCase()} = BLOCKS.register("${block}", ${toCamel(block)}::new);`
}

const fs = require('fs');

fs.readdirSync('blockstates').forEach((file)=>{
    console.log(blockReg(file.split('.')[0]));
});
console.log('\n');
fs.readdirSync('blockstates').forEach((file)=>{
    console.log(blockItemReg(file.split('.')[0]));
});