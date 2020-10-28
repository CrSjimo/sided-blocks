package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.DirectionalBlock;
import net.minecraft.block.material.Material;
import net.minecraft.item.BlockItemUseContext;
import net.minecraft.state.BooleanProperty;
import net.minecraft.state.StateContainer;
import net.minecraft.util.Direction;

public class SidedBlock extends DirectionalBlock {

    public static final BooleanProperty TWO_SIDE = BooleanProperty.create("twoside");

    public SidedBlock(){
        super(Block.Properties.create(Material.CLAY));
        this.setDefaultState(this.getDefaultState().with(FACING, Direction.NORTH).with(TWO_SIDE, false));
    }

    @Override
    protected void fillStateContainer(StateContainer.Builder<Block, BlockState> builder) {
        builder.add(FACING,TWO_SIDE);
    }

    @Override
    public BlockState getStateForPlacement(BlockItemUseContext context) {
        LOGGER.info(context.getHitVec());
        LOGGER.info(context.getPos());
        return this.getDefaultState().with(FACING,context.getNearestLookingDirection().getOpposite());
    }
}
