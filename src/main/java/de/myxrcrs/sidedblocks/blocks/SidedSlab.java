package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.SlabBlock;
import net.minecraft.block.material.Material;
import net.minecraft.state.BooleanProperty;
import net.minecraft.state.StateContainer;

public class SidedSlab extends SlabBlock {

    public static final BooleanProperty TRANSPARENT = BooleanProperty.create("transparent");
    
    public SidedSlab(){
        super(Block.Properties.create(Material.ROCK).hardnessAndResistance(1.5f,6.0f));
    }


    @Override
    protected void fillStateContainer(StateContainer.Builder<Block, BlockState> builder) {
        super.fillStateContainer(builder);
        builder.add(TRANSPARENT);
    }

    @Override
    public boolean isTransparent(BlockState state){
        return state.get(TRANSPARENT) && super.isTransparent(state);
    }

}
