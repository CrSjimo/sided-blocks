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

    public net.minecraft.util.Rotation toMinecraftRotation() {
        switch(this){
            case ZERO:
                return net.minecraft.util.Rotation.NONE;
            case NINETY:
                return net.minecraft.util.Rotation.COUNTERCLOCKWISE_90;
            case ONE_HUNDRED_EIGHTY:
                return net.minecraft.util.Rotation.CLOCKWISE_180;
            case TWO_HUNDRED_SEVENTY:
                return net.minecraft.util.Rotation.CLOCKWISE_90;
            default:
                return net.minecraft.util.Rotation.NONE;
        }
    }

    public static Rotation fromMinecraftRotation(net.minecraft.util.Rotation rot){
        switch(rot){
            case NONE:
                return ZERO;
            case COUNTERCLOCKWISE_90:
                return NINETY ;
            case CLOCKWISE_180:
                return ONE_HUNDRED_EIGHTY ;
            case CLOCKWISE_90:
                return TWO_HUNDRED_SEVENTY ;
            default:
                return ZERO;
        }
    }


}
