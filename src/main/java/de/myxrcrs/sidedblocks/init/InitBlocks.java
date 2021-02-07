package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import de.myxrcrs.sidedblocks.blocks.*;
import net.minecraft.block.Block;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitBlocks {
    public static final DeferredRegister<Block> BLOCKS = new DeferredRegister<>(ForgeRegistries.BLOCKS, SidedBlocks.MOD_ID);
    public static final RegistryObject<Block> SIDED_BRICKS_CLASSROOM_CONCRETE = BLOCKS.register("sided_bricks_classroom_concrete", SidedBricksClassroomConcrete::new);
    public static final RegistryObject<Block> SIDED_BRICKS_OAK_PLANKS = BLOCKS.register("sided_bricks_oak_planks", SidedBricksOakPlanks::new);
    public static final RegistryObject<Block> SIDED_BRICKS_POLISHED_ANDESITE = BLOCKS.register("sided_bricks_polished_andesite", SidedBricksPolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_BRICKS_QUARTZ_BLOCK_BOTTOM = BLOCKS.register("sided_bricks_quartz_block_bottom", SidedBricksQuartzBlockBottom::new);
    public static final RegistryObject<Block> SIDED_BRICKS_WHITE_CONCRETE = BLOCKS.register("sided_bricks_white_concrete", SidedBricksWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_LIGHT_GRAY_CONCRETE_WHITE_CONCRETE = BLOCKS.register("sided_light_gray_concrete_white_concrete", SidedLightGrayConcreteWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_CLASSROOM_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("sided_classroom_concrete_polished_andesite", SidedClassroomConcretePolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_OAK_PLANKS_POLISHED_ANDESITE = BLOCKS.register("sided_oak_planks_polished_andesite", SidedOakPlanksPolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_POLISHED_ANDESITE_QUARTZ_BLOCK_BOTTOM = BLOCKS.register("sided_polished_andesite_quartz_block_bottom", SidedPolishedAndesiteQuartzBlockBottom::new);
    public static final RegistryObject<Block> SIDED_POLISHED_ANDESITE_WHITE_CONCRETE = BLOCKS.register("sided_polished_andesite_white_concrete", SidedPolishedAndesiteWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_SANDSTONE_TOP_WHITE_CONCRETE = BLOCKS.register("sided_sandstone_top_white_concrete", SidedSandstoneTopWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_STONE_BRICKS_CLASSROOM_CONCRETE = BLOCKS.register("sided_stone_bricks_classroom_concrete", SidedStoneBricksClassroomConcrete::new);
    public static final RegistryObject<Block> SIDED_STONE_BRICKS_WHITE_CONCRETE = BLOCKS.register("sided_stone_bricks_white_concrete", SidedStoneBricksWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_STRIPPED_BIRCH_LOG_BRICKS = BLOCKS.register("sided_stripped_birch_log_bricks", SidedStrippedBirchLogBricks::new);
    public static final RegistryObject<Block> SIDED_STRIPPED_DARK_OAK_LOG_BRICKS = BLOCKS.register("sided_stripped_dark_oak_log_bricks", SidedStrippedDarkOakLogBricks::new);
    public static final RegistryObject<Block> SIDED_WHITE_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("sided_white_concrete_polished_andesite", SidedWhiteConcretePolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = BLOCKS.register("sided_white_concrete_stripped_dark_oak_log", SidedWhiteConcreteStrippedDarkOakLog::new);
    public static final RegistryObject<Block> TRIPLE_CLASSROOM_CONCRETE_POLISHED_ANDESITE_POLISHED_ANDESITE_POLISHED_GRANITE = BLOCKS.register("triple_classroom_concrete_polished_andesite_polished_andesite_polished_granite", TripleClassroomConcretePolishedAndesitePolishedAndesitePolishedGranite::new);
    public static final RegistryObject<Block> TRIPLE_CLASSROOM_CONCRETE_POLISHED_ANDESITE_STRIPPED_DARK_OAK_LOG_STRIPPED_DARK_OAK_LOG = BLOCKS.register("triple_classroom_concrete_polished_andesite_stripped_dark_oak_log_stripped_dark_oak_log", TripleClassroomConcretePolishedAndesiteStrippedDarkOakLogStrippedDarkOakLog::new);
    public static final RegistryObject<Block> TRIPLE_WHITE_CONCRETE_POLISHED_ANDESITE_STRIPPED_DARK_OAK_LOG_STRIPPED_DARK_OAK_LOG = BLOCKS.register("triple_white_concrete_polished_andesite_stripped_dark_oak_log_stripped_dark_oak_log", TripleWhiteConcretePolishedAndesiteStrippedDarkOakLogStrippedDarkOakLog::new);
    public static final RegistryObject<Block> TRIPLE_WHITE_CONCRETE_POLISHED_ANDESITE_WHITE_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("triple_white_concrete_polished_andesite_white_concrete_polished_andesite", TripleWhiteConcretePolishedAndesiteWhiteConcretePolishedAndesite::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_CLASSROOM_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("winedge_bricks_classroom_concrete_polished_andesite", WinedgeBricksClassroomConcretePolishedAndesite::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_OAK_PLANKS_STRIPPED_OAK_LOG = BLOCKS.register("winedge_bricks_oak_planks_stripped_oak_log", WinedgeBricksOakPlanksStrippedOakLog::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE = BLOCKS.register("winedge_bricks_polished_andesite_polished_andesite", WinedgeBricksPolishedAndesitePolishedAndesite::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_QUARTZ_BLOCK_BOTTOM_QUARTZ_BLOCK_BOTTOM = BLOCKS.register("winedge_bricks_quartz_block_bottom_quartz_block_bottom", WinedgeBricksQuartzBlockBottomQuartzBlockBottom::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_STRIPPED_BIRCH_LOG_STRIPPED_DARK_OAK_LOG = BLOCKS.register("winedge_bricks_stripped_birch_log_stripped_dark_oak_log", WinedgeBricksStrippedBirchLogStrippedDarkOakLog::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_WHITE_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("winedge_bricks_white_concrete_polished_andesite", WinedgeBricksWhiteConcretePolishedAndesite::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_WHITE_CONCRETE_SANDSTONE_TOP = BLOCKS.register("winedge_bricks_white_concrete_sandstone_top", WinedgeBricksWhiteConcreteSandstoneTop::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_WHITE_CONCRETE_STRIPPED_OAK_LOG = BLOCKS.register("winedge_bricks_white_concrete_stripped_oak_log", WinedgeBricksWhiteConcreteStrippedOakLog::new);
    public static final RegistryObject<Block> WINEDGE_STONE_BRICKS_CLASSROOM_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("winedge_stone_bricks_classroom_concrete_polished_andesite", WinedgeStoneBricksClassroomConcretePolishedAndesite::new);
    public static final RegistryObject<Block> WINEDGE_STONE_BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE = BLOCKS.register("winedge_stone_bricks_polished_andesite_polished_andesite", WinedgeStoneBricksPolishedAndesitePolishedAndesite::new);
    public static final RegistryObject<Block> SLAB_POLISHED_ANDESITE_POLISHED_ANDESITE_WHITE_CONCRETE = BLOCKS.register("slab_polished_andesite_polished_andesite_white_concrete", SlabPolishedAndesitePolishedAndesiteWhiteConcrete::new);
    public static final RegistryObject<Block> SLAB_POLISHED_ANDESITE_WHITE_CONCRETE_WHITE_CONCRETE = BLOCKS.register("slab_polished_andesite_white_concrete_white_concrete", SlabPolishedAndesiteWhiteConcreteWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_WHITE_CONCRETE_LIGHT_GRAY_CONCRETE = BLOCKS.register("sided_white_concrete_light_gray_concrete", SidedWhiteConcreteLightGrayConcrete::new);
    public static final RegistryObject<Block> TRIPLE_POLISHED_ANDESITE_STONE_BRICKS_POLISHED_ANDESITE_STONE_BRICKS = BLOCKS.register("triple_polished_andesite_stone_bricks_polished_andesite_stone_bricks", TriplePolishedAndesiteStoneBricksPolishedAndesiteStoneBricks::new);
}