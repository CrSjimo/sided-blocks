package de.myxrcrs.sidedblocks.blocks;

import net.minecraft.util.IStringSerializable;

public enum Side implements IStringSerializable {

    LEFT("left"),
    RIGHT("right"),
    TOP("top"),
    BOTTOM("bottom");

    private final String name;

    private Side(String name) {
        this.name = name;
    }

    public String toString() {
        return this.name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    public Side mirror_corner() {
        switch(this){
            case TOP:
                return LEFT;
            case LEFT:
                return TOP;
            case RIGHT:
                return BOTTOM;
            case BOTTOM:
                return RIGHT;
            default:
                return this;
        }
    }

    public Side mirror() {
        switch(this){
            case LEFT:
                return RIGHT;
            case RIGHT:
                return LEFT;
            default:
                return this;
        }
    }
}
