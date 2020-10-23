package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.util.IStringSerializable;

public enum Rotation implements IStringSerializable {

    ZERO("0"),
    NINETY("90"),
    ONE_HUNDRED_EIGHTY("180"),
    TWO_HUNDRED_SEVENTY("270");


    private final String name;

    private Rotation(String name) {
        this.name = name;
    }

    public String toString() {
        return this.name;
    }

    @Override
    public String getName() {
        return this.name;
    }


}
