package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import net.minecraft.item.BlockItem;
import net.minecraft.item.Item;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitItems {
    public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, SidedBlocks.MOD_ID);
    public static final RegistryObject<BlockItem> SIDED_BRICKS_OAK_PLANKS = ITEMS.register("sided_bricks_oak_planks", ()->new BlockItem(InitBlocks.SIDED_BRICKS_OAK_PLANKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_BRICKS_POLISHED_ANDESITE = ITEMS.register("sided_bricks_polished_andesite", ()->new BlockItem(InitBlocks.SIDED_BRICKS_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_BRICKS_WHITE_CONCRETE = ITEMS.register("sided_bricks_white_concrete", ()->new BlockItem(InitBlocks.SIDED_BRICKS_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_LIGHT_GRAY_CONCRETE_WHITE_CONCRETE = ITEMS.register("sided_light_gray_concrete_white_concrete", ()->new BlockItem(InitBlocks.SIDED_LIGHT_GRAY_CONCRETE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_CLASSROOM_CONCRETE_POLISHED_ANDESITE = ITEMS.register("sided_classroom_concrete_polished_andesite", ()->new BlockItem(InitBlocks.SIDED_CLASSROOM_CONCRETE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_OAK_PLANKS_POLISHED_ANDESITE = ITEMS.register("sided_oak_planks_polished_andesite", ()->new BlockItem(InitBlocks.SIDED_OAK_PLANKS_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_POLISHED_ANDESITE_WHITE_CONCRETE = ITEMS.register("sided_polished_andesite_white_concrete", ()->new BlockItem(InitBlocks.SIDED_POLISHED_ANDESITE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_SANDSTONE_TOP_WHITE_CONCRETE = ITEMS.register("sided_sandstone_top_white_concrete", ()->new BlockItem(InitBlocks.SIDED_SANDSTONE_TOP_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_STONE_BRICKS_CLASSROOM_CONCRETE = ITEMS.register("sided_stone_bricks_classroom_concrete", ()->new BlockItem(InitBlocks.SIDED_STONE_BRICKS_CLASSROOM_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_STONE_BRICKS_WHITE_CONCRETE = ITEMS.register("sided_stone_bricks_white_concrete", ()->new BlockItem(InitBlocks.SIDED_STONE_BRICKS_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_STRIPPED_BIRCH_LOG_BRICKS = ITEMS.register("sided_stripped_birch_log_bricks", ()->new BlockItem(InitBlocks.SIDED_STRIPPED_BIRCH_LOG_BRICKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_STRIPPED_DARK_OAK_LOG_BRICKS = ITEMS.register("sided_stripped_dark_oak_log_bricks", ()->new BlockItem(InitBlocks.SIDED_STRIPPED_DARK_OAK_LOG_BRICKS.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_WHITE_CONCRETE_POLISHED_ANDESITE = ITEMS.register("sided_white_concrete_polished_andesite", ()->new BlockItem(InitBlocks.SIDED_WHITE_CONCRETE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SIDED_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = ITEMS.register("sided_white_concrete_stripped_dark_oak_log", ()->new BlockItem(InitBlocks.SIDED_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> TRIPLE_CLASSROOM_CONCRETE_POLISHED_ANDESITE_POLISHED_ANDESITE_POLISHED_GRANITE = ITEMS.register("triple_classroom_concrete_polished_andesite_polished_andesite_polished_granite", ()->new BlockItem(InitBlocks.TRIPLE_CLASSROOM_CONCRETE_POLISHED_ANDESITE_POLISHED_ANDESITE_POLISHED_GRANITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> TRIPLE_STRIPPED_BIRCH_LOG_BRICKS_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = ITEMS.register("triple_stripped_birch_log_bricks_white_concrete_stripped_dark_oak_log", ()->new BlockItem(InitBlocks.TRIPLE_STRIPPED_BIRCH_LOG_BRICKS_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> TRIPLE_STRIPPED_OAK_LOG_BRICKS_WHITE_CONCRETE_SANDSTONE_TOP = ITEMS.register("triple_stripped_oak_log_bricks_white_concrete_sandstone_top", ()->new BlockItem(InitBlocks.TRIPLE_STRIPPED_OAK_LOG_BRICKS_WHITE_CONCRETE_SANDSTONE_TOP.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> WINEDGE_BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE = ITEMS.register("winedge_bricks_polished_andesite_polished_andesite", ()->new BlockItem(InitBlocks.WINEDGE_BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
    public static final RegistryObject<BlockItem> SLAB_POLISHED_ANDESITE_WHITE_CONCRETE_WHITE_CONCRETE = ITEMS.register("slab_polished_andesite_white_concrete_white_concrete", ()->new BlockItem(InitBlocks.SLAB_POLISHED_ANDESITE_WHITE_CONCRETE_WHITE_CONCRETE.get(),new Item.Properties().group(SidedBlocks.ITEM_GROUP)));
}