package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import net.minecraft.item.BlockItem;
import net.minecraft.item.Item;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitItems {
    public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, SidedBlocks.MOD_ID);
    public static final RegistryObject<BlockItem> BRICKS_OAK_PLANKS = ITEMS.register("sided_bricks_oak_planks", ()->new BlockItem(InitBlocks.BRICKS_OAK_PLANKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> BRICKS_POLISHED_ANDESITE = ITEMS.register("sided_bricks_polished_andesite", ()->new BlockItem(InitBlocks.BRICKS_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> BRICKS_WHITE_CONCRETE = ITEMS.register("sided_bricks_white_concrete", ()->new BlockItem(InitBlocks.BRICKS_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> LIGHT_GRAY_CONCRETE_WHITE_CONCRETE = ITEMS.register("sided_light_gray_concrete_white_concrete", ()->new BlockItem(InitBlocks.LIGHT_GRAY_CONCRETE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> CLASSROOM_CONCRETE_POLISHED_ANDESITE = ITEMS.register("sided_classroom_concrete_polished_andesite", ()->new BlockItem(InitBlocks.CLASSROOM_CONCRETE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> OAK_PLANKS_POLISHED_ANDESITE = ITEMS.register("sided_oak_planks_polished_andesite", ()->new BlockItem(InitBlocks.OAK_PLANKS_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> POLISHED_ANDESITE_WHITE_CONCRETE = ITEMS.register("sided_polished_andesite_white_concrete", ()->new BlockItem(InitBlocks.POLISHED_ANDESITE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SANDSTONE_TOP_WHITE_CONCRETE = ITEMS.register("sided_sandstone_top_white_concrete", ()->new BlockItem(InitBlocks.SANDSTONE_TOP_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STONE_BRICKS_CLASSROOM_CONCRETE = ITEMS.register("sided_stone_bricks_classroom_concrete", ()->new BlockItem(InitBlocks.STONE_BRICKS_CLASSROOM_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STONE_BRICKS_WHITE_CONCRETE = ITEMS.register("sided_stone_bricks_white_concrete", ()->new BlockItem(InitBlocks.STONE_BRICKS_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STRIPPED_BIRCH_LOG_BRICKS = ITEMS.register("sided_stripped_birch_log_bricks", ()->new BlockItem(InitBlocks.STRIPPED_BIRCH_LOG_BRICKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STRIPPED_DARK_OAK_LOG_BRICKS = ITEMS.register("sided_stripped_dark_oak_log_bricks", ()->new BlockItem(InitBlocks.STRIPPED_DARK_OAK_LOG_BRICKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> WHITE_CONCRETE_POLISHED_ANDESITE = ITEMS.register("sided_white_concrete_polished_andesite", ()->new BlockItem(InitBlocks.WHITE_CONCRETE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = ITEMS.register("sided_white_concrete_stripped_dark_oak_log", ()->new BlockItem(InitBlocks.WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> CLASSROOM_CONCRETE_POLISHED_ANDESITE_POLISHED_ANDESITE_POLISHED_GRANITE = ITEMS.register("triple_classroom_concrete_polished_andesite_polished_andesite_polished_granite", ()->new BlockItem(InitBlocks.CLASSROOM_CONCRETE_POLISHED_ANDESITE_POLISHED_ANDESITE_POLISHED_GRANITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STRIPPED_BIRCH_LOG_BRICKS_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = ITEMS.register("triple_stripped_birch_log_bricks_white_concrete_stripped_dark_oak_log", ()->new BlockItem(InitBlocks.STRIPPED_BIRCH_LOG_BRICKS_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> STRIPPED_OAK_LOG_BRICKS_WHITE_CONCRETE_SANDSTONE_TOP = ITEMS.register("triple_stripped_oak_log_bricks_white_concrete_sandstone_top", ()->new BlockItem(InitBlocks.STRIPPED_OAK_LOG_BRICKS_WHITE_CONCRETE_SANDSTONE_TOP.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE = ITEMS.register("winedge_bricks_polished_andesite_polished_andesite", ()->new BlockItem(InitBlocks.BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
}