package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import net.minecraft.item.BlockItem;
import net.minecraft.item.Item;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitItems {
    public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, SidedBlocks.MOD_ID);
    public static final RegistryObject<BlockItem> BRICKS_OAK_PLANKS = ITEMS.register("bricks_oak_planks", ()->new BlockItem(InitBlocks.BRICKS_OAK_PLANKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> BRICKS_POLISHED_ANDESITE = ITEMS.register("bricks_polished_andesite", ()->new BlockItem(InitBlocks.BRICKS_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> BRICKS_WHITE_CONCRETE = ITEMS.register("bricks_white_concrete", ()->new BlockItem(InitBlocks.BRICKS_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> LAME_CONCRETE_POLISHED_ANDESITE = ITEMS.register("lame_concrete_polished_andesite", ()->new BlockItem(InitBlocks.LAME_CONCRETE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> LIGHT_GRAY_CONCRETE_WHITE_CONCRETE = ITEMS.register("light_gray_concrete_white_concrete", ()->new BlockItem(InitBlocks.LIGHT_GRAY_CONCRETE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> OAK_PLANKS_POLISHED_ANDESITE = ITEMS.register("oak_planks_polished_andesite", ()->new BlockItem(InitBlocks.OAK_PLANKS_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> POLISHED_ANDESITE_WHITE_CONCRETE = ITEMS.register("polished_andesite_white_concrete", ()->new BlockItem(InitBlocks.POLISHED_ANDESITE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> POLISHED_GRANITE_WHITE_CONCRETE = ITEMS.register("polished_granite_white_concrete", ()->new BlockItem(InitBlocks.POLISHED_GRANITE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STONE_BRICKS_LAME_CONCRETE = ITEMS.register("stone_bricks_lame_concrete", ()->new BlockItem(InitBlocks.STONE_BRICKS_LAME_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STONE_BRICKS_WHITE_CONCRETE = ITEMS.register("stone_bricks_white_concrete", ()->new BlockItem(InitBlocks.STONE_BRICKS_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = ITEMS.register("white_concrete_stripped_dark_oak_log", ()->new BlockItem(InitBlocks.WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> WHITE_CONCRETE_POLISHED_ANDESITE = ITEMS.register("white_concrete_polished_andesite", ()->new BlockItem(InitBlocks.WHITE_CONCRETE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
}
