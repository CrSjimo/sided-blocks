package de.myxrcrs.sidedblocks.init;

import de.myxrcrs.sidedblocks.SidedBlocks;
import de.myxrcrs.sidedblocks.blocks.*;
import net.minecraft.block.Block;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class InitBlocks {
    public static final DeferredRegister<Block> BLOCKS = new DeferredRegister<>(ForgeRegistries.BLOCKS, SidedBlocks.MOD_ID);
    public static final RegistryObject<Block> BRICKS_OAK_PLANKS = BLOCKS.register("bricks_oak_planks", BricksOakPlanks::new);
    public static final RegistryObject<Block> BRICKS_POLISHED_ANDESITE = BLOCKS.register("bricks_polished_andesite", BricksPolishedAndesite::new);
    public static final RegistryObject<Block> BRICKS_WHITE_CONCRETE = BLOCKS.register("bricks_white_concrete", BricksWhiteConcrete::new);
    public static final RegistryObject<Block> LAME_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("lame_concrete_polished_andesite", LameConcretePolishedAndesite::new);
    public static final RegistryObject<Block> LIGHT_GRAY_CONCRETE_WHITE_CONCRETE = BLOCKS.register("light_gray_concrete_white_concrete", LightGrayConcreteWhiteConcrete::new);
    public static final RegistryObject<Block> OAK_PLANKS_POLISHED_ANDESITE = BLOCKS.register("oak_planks_polished_andesite", OakPlanksPolishedAndesite::new);
    public static final RegistryObject<Block> POLISHED_ANDESITE_WHITE_CONCRETE = BLOCKS.register("polished_andesite_white_concrete", PolishedAndesiteWhiteConcrete::new);
    public static final RegistryObject<Block> POLISHED_GRANITE_WHITE_CONCRETE = BLOCKS.register("polished_granite_white_concrete", PolishedGraniteWhiteConcrete::new);
    public static final RegistryObject<Block> STONE_BRICKS_LAME_CONCRETE = BLOCKS.register("stone_bricks_lame_concrete", StoneBricksLameConcrete::new);
    public static final RegistryObject<Block> STONE_BRICKS_WHITE_CONCRETE = BLOCKS.register("stone_bricks_white_concrete", StoneBricksWhiteConcrete::new);
    public static final RegistryObject<Block> WHITE_CONCRETE_STRIPPED_DARK_OAK_LOG = BLOCKS.register("white_concrete_stripped_dark_oak_log", WhiteConcreteStrippedDarkOakLog::new);
    public static final RegistryObject<Block> WHITE_CONCRETE_POLISHED_ANDESITE = BLOCKS.register("white_concrete_polished_andesite", WhiteConcretePolishedAndesite::new);
}
