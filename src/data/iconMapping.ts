// iconMapping.ts
import {IconType} from 'react-icons';
import {IoEarth, IoFlame, IoLeaf, IoWater} from 'react-icons/io5';
import {FaBug, FaDragon, FaFireAlt, FaFistRaised, FaGhost, FaQuestionCircle, FaRegSnowflake} from "react-icons/fa";
import {TbIrregularPolyhedron, TbPlant} from "react-icons/tb";
import {GiArrowWings, GiDustCloud, GiFairy, GiPoisonBottle, GiSteelClaws, GiStonePile} from "react-icons/gi";
import {MdDarkMode, MdOutlinePsychology} from "react-icons/md";
import {SiStackblitz} from "react-icons/si";
import {IoIosWater} from "react-icons/io";


export const iconMappingPKMN: { [key: string]: IconType } = {
    Eis: FaRegSnowflake,
    Normal: TbIrregularPolyhedron,
    Pflanze: TbPlant,
    Käfer: FaBug,
    Elektro: SiStackblitz,
    Drache: FaDragon,
    Gift: GiPoisonBottle,
    Wasser: IoIosWater,
    Geist: FaGhost,
    Stahl: GiSteelClaws,
    Feuer: FaFireAlt,
    Psycho: MdOutlinePsychology,
    Fee: GiFairy,
    Flug: GiArrowWings,
    Unlicht: MdDarkMode,
    Kampf: FaFistRaised,
    Boden: GiDustCloud,
    Gestein: GiStonePile,

};

export const iconMappingTOL: { [key: string]: IconType } = {
    IoWater: IoWater,
    IoLeaf: IoLeaf,
    IoFlame: IoFlame,
    IoEarth: IoEarth,


};

// Fallback-Icon exportieren
export const FallbackIcon: IconType = FaQuestionCircle;