package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import de.myxrcrs.sidedblocks.blocks.*;
import net.minecraft.block.Block;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitBlocks {
    public static final DeferredRegister<Block> BLOCKS = new DeferredRegister<>(ForgeRegistries.BLOCKS, SidedBlocks.MOD_ID);
    public static final RegistryObject<Block> SIDED_BRICKS_OAK_PLANKS = BLOCKS.register("sided_bricks_oak_planks", SidedBricksOakPlanks::new);
    public static final RegistryObject<Block> SIDED_BRICKS_POLISHED_ANDESITE = BLOCKS.register("sided_bricks_polished_andesite", SidedBricksPolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_BRICKS_WHITE_CONCRETE = BLOCKS.register("sided_bricks_white_concrete", SidedBricksWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_LIGHT_GRAY_CONCRETE_WHITE_CONCRETE = BLOCKS.register("sided_light_gray_concrete_white_concrete", SidedLightGrayConcreteWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_CLASSROOM_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("sided_classroom_concrete_polished_andesite", SidedClassroomConcretePolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_OAK_PLANKS_POLISHED_ANDESITE = BLOCKS.register("sided_oak_planks_polished_andesite", SidedOakPlanksPolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_POLISHED_ANDESITE_WHITE_CONCRETE = BLOCKS.register("sided_polished_andesite_white_concrete", SidedPolishedAndesiteWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_SANDSTONE_TOP_WHITE_CONCRETE = BLOCKS.register("sided_sandstone_top_white_concrete", SidedSandstoneTopWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_STONE_BRICKS_CLASSROOM_CONCRETE = BLOCKS.register("sided_stone_bricks_classroom_concrete", SidedStoneBricksClassroomConcrete::new);
    public static final RegistryObject<Block> SIDED_STONE_BRICKS_WHITE_CONCRETE = BLOCKS.register("sided_stone_bricks_white_concrete", SidedStoneBricksWhiteConcrete::new);
    public static final RegistryObject<Block> SIDED_STRIPPED_BIRCH_LOG_BRICKS = BLOCKS.register("sided_stripped_birch_log_bricks", SidedStrippedBirchLogBricks::new);
    public static final RegistryObject<Block> SIDED_STRIPPED_DARK_OAK_LOG_BRICKS = BLOCKS.register("sided_stripped_dark_oak_log_bricks", SidedStrippedDarkOakLogBricks::new);
    public static final RegistryObject<Block> SIDED_WHITE_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("sided_white_concrete_polished_andesite", SidedWhiteConcretePolishedAndesite::new);
    public static final RegistryObject<Block> SIDED_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = BLOCKS.register("sided_white_concrete_stripped_dark_oak_log", SidedWhiteConcreteStrippedDarkOakLog::new);
    public static final RegistryObject<Block> TRIPLE_CLASSROOM_CONCRETE_POLISHED_ANDESITE_POLISHED_ANDESITE_POLISHED_GRANITE = BLOCKS.register("triple_classroom_concrete_polished_andesite_polished_andesite_polished_granite", TripleClassroomConcretePolishedAndesitePolishedAndesitePolishedGranite::new);
    public static final RegistryObject<Block> TRIPLE_STRIPPED_BIRCH_LOG_BRICKS_WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = BLOCKS.register("triple_stripped_birch_log_bricks_white_concrete_stripped_dark_oak_log", TripleStrippedBirchLogBricksWhiteConcreteStrippedDarkOakLog::new);
    public static final RegistryObject<Block> TRIPLE_STRIPPED_OAK_LOG_BRICKS_WHITE_CONCRETE_SANDSTONE_TOP = BLOCKS.register("triple_stripped_oak_log_bricks_white_concrete_sandstone_top", TripleStrippedOakLogBricksWhiteConcreteSandstoneTop::new);
    public static final RegistryObject<Block> WINEDGE_BRICKS_POLISHED_ANDESITE_POLISHED_ANDESITE = BLOCKS.register("winedge_bricks_polished_andesite_polished_andesite", WinedgeBricksPolishedAndesitePolishedAndesite::new);
    public static final RegistryObject<Block> SLAB_POLISHED_ANDESITE_WHITE_CONCRETE_WHITE_CONCRETE = BLOCKS.register("slab_polished_andesite_white_concrete_white_concrete", SlabPolishedAndesiteWhiteConcreteWhiteConcrete::new);
}