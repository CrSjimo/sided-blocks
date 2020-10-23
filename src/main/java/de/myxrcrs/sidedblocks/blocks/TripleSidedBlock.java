package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.DirectionalBlock;
import net.minecraft.block.material.Material;
import net.minecraft.item.BlockItemUseContext;
import net.minecraft.state.EnumProperty;
import net.minecraft.state.StateContainer;
import net.minecraft.util.Direction;

public class TripleSidedBlock extends DirectionalBlock {

    public static final EnumProperty<Rotation> UP_ROTATION = EnumProperty.create("up_rotation",Rotation.class);
    public static final EnumProperty<Rotation> SIDE_ROTATION = EnumProperty.create("side_rotation",Rotation.class);


    public TripleSidedBlock() {
        super(Block.Properties.create(Material.CLAY));
        this.setDefaultState(
                this.getDefaultState()
                        .with(FACING, Direction.UP)
                        .with(UP_ROTATION,Rotation.ZERO)
                        .with(SIDE_ROTATION,Rotation.ZERO)
        );
    }

    @Override
    protected void fillStateContainer(StateContainer.Builder<Block, BlockState> builder) {
        builder.add(FACING,UP_ROTATION,SIDE_ROTATION);
    }

    @Override
    public BlockState getStateForPlacement(BlockItemUseContext context) {
        return this.getDefaultState().with(FACING,context.getNearestLookingDirection().getOpposite());
    }

}
