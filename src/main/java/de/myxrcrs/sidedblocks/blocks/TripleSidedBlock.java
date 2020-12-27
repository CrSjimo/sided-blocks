package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.DirectionalBlock;
import net.minecraft.block.HorizontalBlock;
import net.minecraft.block.material.Material;
import net.minecraft.item.BlockItemUseContext;
import net.minecraft.state.EnumProperty;
import net.minecraft.state.IntegerProperty;
import net.minecraft.state.StateContainer;
import net.minecraft.util.Direction;
import net.minecraft.util.Mirror;

public class TripleSidedBlock extends DirectionalBlock {

    public static final EnumProperty<Rotation> UP_ROTATION = EnumProperty.create("up_rotation",Rotation.class);
    public static final EnumProperty<Rotation> SIDE_ROTATION = EnumProperty.create("side_rotation",Rotation.class);
    public static final IntegerProperty H_CORNER = IntegerProperty.create("hcorner",1,3);


    public TripleSidedBlock() {
        super(Block.Properties.create(Material.ROCK).hardnessAndResistance(1.5f,6.0f));
        this.setDefaultState(
                this.getDefaultState()
                        .with(FACING, Direction.UP)
                        .with(UP_ROTATION,Rotation.ZERO)
                        .with(SIDE_ROTATION,Rotation.ZERO)
                        .with(H_CORNER,2)
        );
    }

    @Override
    protected void fillStateContainer(StateContainer.Builder<Block, BlockState> builder) {
        builder.add(FACING, UP_ROTATION, SIDE_ROTATION, H_CORNER);
    }

    @Override
    public BlockState getStateForPlacement(BlockItemUseContext context) {
        return this.getDefaultState().with(FACING,context.getNearestLookingDirection().getOpposite());
    }

    @Override
    public BlockState rotate(BlockState state, net.minecraft.util.Rotation rot) {
        if(state.get(FACING)!=Direction.UP && state.get(FACING)!=Direction.DOWN)
            return state.with(FACING,rot.rotate(state.get(FACING)));
        else{
            return state
                    .with(SIDE_ROTATION,Rotation.fromMinecraftRotation(rot.add(state.get(SIDE_ROTATION).toMinecraftRotation())))
                    .with(UP_ROTATION,Rotation.fromMinecraftRotation(rot.add(state.get(UP_ROTATION).toMinecraftRotation())));
        }
    }

    @Override
    public BlockState mirror(BlockState state, Mirror mirrorIn) {
        return mirrorIn == Mirror.NONE ? state : state.rotate(mirrorIn.toRotation(state.get(FACING)));
    }

}
