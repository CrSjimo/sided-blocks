package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.HorizontalBlock;
import net.minecraft.block.material.Material;
import net.minecraft.item.BlockItemUseContext;
import net.minecraft.state.BooleanProperty;
import net.minecraft.state.EnumProperty;
import net.minecraft.state.IntegerProperty;
import net.minecraft.state.StateContainer;
import net.minecraft.util.Direction;
import net.minecraft.util.Mirror;
import net.minecraft.util.math.BlockPos;
import net.minecraft.util.math.Vec3d;

public class WindowEdgeBlock extends HorizontalBlock {

    public static final EnumProperty<Side> SIDE = EnumProperty.create("side", Side.class);
    public static final BooleanProperty V_CORNER = BooleanProperty.create("vcorner");
    public static final IntegerProperty H_CORNER = IntegerProperty.create("hcorner",1,3);

    public WindowEdgeBlock(){
        super(Block.Properties.create(Material.ROCK).hardnessAndResistance(1.5f,6.0f));
        this.setDefaultState(
            this.getDefaultState()
                .with(HORIZONTAL_FACING, Direction.NORTH)
                .with(SIDE, Side.TOP)
                .with(V_CORNER, false)
                .with(H_CORNER, 2)
        );
    }

    @Override
    protected void fillStateContainer(StateContainer.Builder<Block, BlockState> builder) {
        builder.add(HORIZONTAL_FACING, SIDE, V_CORNER, H_CORNER);
    }

    enum Rel {
        LEFT(), RIGHT(), TOP(), BOTTOM(), OPPOSITE(), ALONG();

        public static Rel getRel(int i) {
            switch (i) {
                case 0:
                    return ALONG;
                case 1:
                    return LEFT;
                case 2:
                    return OPPOSITE;
                case 3:
                    return RIGHT;
            }
            LOGGER.error("Invalid rel number.");
            return ALONG;
        }

        public static Rel getDirectionRel(Direction lookingDirection, Direction placementDirection) {
            if (placementDirection == Direction.UP) {
                return Rel.BOTTOM;
            } else if (placementDirection == Direction.DOWN) {
                return Rel.TOP;
            }
            int p = 0, f = 0;
            switch (lookingDirection) {
                case EAST:
                    f = 0;
                    break;
                case SOUTH:
                    f = 1;
                    break;
                case WEST:
                    f = 2;
                    break;
                case NORTH:
                    f = 3;
                    break;
            }
            switch (placementDirection) {
                case EAST:
                    p = 0;
                    break;
                case SOUTH:
                    p = 1;
                    break;
                case WEST:
                    p = 2;
                    break;
                case NORTH:
                    p = 3;
                    break;
            }
            return Rel.getRel((p - f + 4) % 4);

        }

        public static Rel getHitRel(double x, double y){
            if(x-y>=0 && x+y>=1)return RIGHT;
            if(x-y>=0 && x+y<1)return TOP;
            if(x-y<0 && x+y<1)return LEFT;
            else return BOTTOM;
        }
    }

    @Override
    public BlockState getStateForPlacement(BlockItemUseContext context) {
        Direction lookingDirection = context.getPlacementHorizontalFacing();
        Direction placementDirection =  context.getFace();
        Rel rel = Rel.getDirectionRel(lookingDirection, placementDirection);
        Side side;
        if(rel==Rel.ALONG||rel==Rel.OPPOSITE){
            Vec3d vec = context.getHitVec();
            BlockPos pos = context.getPos();
            if(lookingDirection == Direction.NORTH || lookingDirection == Direction.SOUTH){
                rel = Rel.getHitRel(vec.getX()-pos.getX(), vec.getY()-pos.getY());
            }else{
                rel = Rel.getHitRel(vec.getZ()-pos.getZ(), vec.getY()-pos.getY());
            }
        }
        switch(rel){
            case LEFT:
                side = Side.RIGHT;
                break;
            case RIGHT:
                side = Side.LEFT;
                break;
            case TOP:
                side = Side.BOTTOM;
                break;
            case BOTTOM:
                side = Side.TOP;
                break;
            default:
                //never
                side = Side.TOP;
        }
        return this.getDefaultState()
            .with(HORIZONTAL_FACING, lookingDirection.getOpposite())
            .with(SIDE, side);
    }

    @Override
    public BlockState rotate(BlockState state, net.minecraft.util.Rotation rot) {
        return state.with(HORIZONTAL_FACING,rot.rotate(state.get(HORIZONTAL_FACING)));
    }

    @Override
    public BlockState mirror(BlockState state, Mirror mirrorIn) {
        return mirrorIn == Mirror.NONE ? state : state
            .rotate(mirrorIn.toRotation(state.get(HORIZONTAL_FACING)))
            .with(SIDE,state.get(V_CORNER) ? state.get(SIDE).mirror_corner() : state.get(SIDE).mirror());
    }
}
