import { DetailedHTMLProps, HTMLAttributes } from "react";


interface Cards_Props_Type {
    sectionHeader : String;
    sectionSubHeader : String;
    sectionStyle : String;
    children?: React.ReactNode,
    cardImage : String;
    cardHasImage : boolean;
    cardHasNumbers  : boolean;
    cardHasNumbersValue? : String;
    iconIsBesideHeader? : boolean;
    cardImageName? : String;
    cardImagDescription? : String;
}

export default Cards_Props_Type;