import Section_Props_Type from "../types/section_props_types";


interface SectionProps {
    sectionProperties : Section_Props_Type;
}

function Section({sectionProperties} : SectionProps) { 

    return(
        <div id={`${sectionProperties.sectionId}`} className={`${sectionProperties.sectionStyle}`}>
            <div className="flex flex-col items-center justify-center mt-20 mb-10">
                <h1 className="text-4xl font-bold text-center mt-20">{sectionProperties.sectionHeader}</h1>
                <p className="text-lg text-center mt-4 mb-10 w-1/2">{sectionProperties.sectionSubHeader}</p>
                {sectionProperties.children}
            </div>
        </div>
    )

}

export default Section;