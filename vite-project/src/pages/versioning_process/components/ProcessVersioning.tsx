import { useState } from "react";

const Process_Versioning = () => {
    const [activeSection, setActiveSection] = useState("Information"); // Default to 'Information'

    // Define content for each section
    const renderBodyContent = () => {
        switch (activeSection) {
            case "Information":
                return <InformationContent />;
            case "Prolog":
                return <PrologContent />;
            case "Metadata":
                return <MetadataContent />;
            case "Data":
                return <DataContent />;
            case "Epilog":
                return <EpilogContent />;
            default:
                return <div>Select a section</div>;
        }
    };

    // Example components for each section's content
    const InformationContent = () => (
        <div className="p-4">This is the **Information** content.</div>
    );
    const PrologContent = () => (
        <div className="p-4">This is the **Prolog** content.</div>
    );
    const MetadataContent = () => (
        <div className="p-4">This is the **Metadata** content.</div>
    );
    const DataContent = () => (
        <div className="p-4">This is the **Data** content.</div>
    );
    const EpilogContent = () => (
        <div className="p-4">This is the **Epilog** content.</div>
    );

    return (
        <>
            {/* Header */}
            <div className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
                {["Information", "Prolog", "Metadata", "Data", "Epilog"].map(
                    (section) => (
                        <div
                            key={section}
                            className={`flex items-center justify-center w-[20%] h-full cursor-pointer
                                ${
                                activeSection === section
                                    ? "bg-[#E6EDFD]"
                                    : "hover:bg-gray-100"
                            }`}
                            onClick={() => setActiveSection(section)}
                        >
                            {section}
                        </div>
                    )
                )}
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto pt-[13px] pb-[13px] no-scrollbar">
                {renderBodyContent()}
            </div>
        </>
    );
};

export default Process_Versioning;
