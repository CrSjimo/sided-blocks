package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.SlabBlock;
import net.minecraft.block.material.Material;

public class SidedSlab extends SlabBlock {
    
    public SidedSlab(){
        super(Block.Properties.create(Material.ROCK).hardnessAndResistance(1.5f,6.0f));
    }

}
