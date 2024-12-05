import {useState} from "react";

const Process_Versioning = () => {
  const [activeSection, setActiveSection] = useState("Information"); // Default to 'Information'

  // Define content for each section
  const renderBodyContent = () => {
    switch (activeSection) {
      case "Information":
        return <InformationContent/>;
      case "Prolog":
        return <PrologContent/>;
      case "Metadata":
        return <MetadataContent/>;
      case "Data":
        return <DataContent/>;
      case "Epilog":
        return <EpilogContent/>;
      default:
        return <div>Select a section</div>;
    }
  };

  // Example components for each section's content
  const InformationContent = () => (
    <div className="p-4">This is the **Information** content.</div>
  );

  const PrologContent = () => {

    const comparison = {
      "comparison": [
        {
          "leftLineNumber": 1,
          "rightLineNumber": 1,
          "status": "=",
          "leftContent": "from tm1py.services import TM1Service",
          "rightContent": "from tm1py.services import TM1Service"
        },
        {
          "leftLineNumber": 2,
          "rightLineNumber": 2,
          "status": "=",
          "leftContent": "from tm1py.objects import Dimension, Hierarchy, Element",
          "rightContent": "from tm1py.objects import Dimension, Hierarchy, Element"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 3,
          "status": "+",
          "leftContent": "",
          "rightContent": "from tm1py.utils import Utils"
        },
        {
          "leftLineNumber": 3,
          "rightLineNumber": 4,
          "status": "=",
          "leftContent": "from datetime import datetime",
          "rightContent": "from datetime import datetime"
        },
        {
          "leftLineNumber": 6,
          "rightLineNumber": 5,
          "status": "R",
          "leftContent": "from tm1py.exceptions import TM1pyException",
          "rightContent": "from analytics.reports import ReportGenerator"
        },
        {
          "leftLineNumber": 7,
          "rightLineNumber": 6,
          "status": "=",
          "leftContent": "def load_dimension(tm1: TM1Service, dimension_name: str):",
          "rightContent": "def load_dimension(tm1: TM1Service, dimension_name: str):"
        },
        {
          "leftLineNumber": 8,
          "rightLineNumber": 9,
          "status": "R",
          "leftContent": "    print(f\"Loaded dimension: {dimension_name}\")",
          "rightContent": "    Utils.log_info(f\"Loaded dimension: {dimension_name}\")"
        },
        {
          "leftLineNumber": 10,
          "rightLineNumber": 9,
          "status": "=",
          "leftContent": "    return dimension",
          "rightContent": "    return dimension"
        },
        {
          "leftLineNumber": 12,
          "rightLineNumber": 11,
          "status": "=",
          "leftContent": "if __name__ == \"__main__\":",
          "rightContent": "if __name__ == \"__main__\":"
        },
        {
          "leftLineNumber": 13,
          "rightLineNumber": 12,
          "status": "=",
          "leftContent": "    with TM1Service(address='localhost', port=12354, user='admin', password='', ssl=True) as tm1:",
          "rightContent": "    with TM1Service(address='localhost', port=12354, user='admin', password='', ssl=True) as tm1:"
        },
        {
          "leftLineNumber": 14,
          "rightLineNumber": 13,
          "status": "=",
          "leftContent": "        load_dimension(tm1, \"Region\")",
          "rightContent": "        load_dimension(tm1, \"Region\")"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 14,
          "status": "+",
          "leftContent": "",
          "rightContent": "        ReportGenerator.generate_report(tm1, \"Region\")"
        }
      ]
    }
    const comparaison2 = {
      "comparison": [
        {
          "leftLineNumber": 1,
          "rightLineNumber": 1,
          "status": "=",
          "leftContent": "import os",
          "rightContent": "import os"
        },
        {
          "leftLineNumber": 2,
          "rightLineNumber": 2,
          "status": "=",
          "leftContent": "from pathlib import Path",
          "rightContent": "from pathlib import Path"
        },
        {
          "leftLineNumber": 3,
          "rightLineNumber": 3,
          "status": "R",
          "leftContent": "from old_module import DeprecatedFunction",
          "rightContent": "from new_module import ModernFunction"
        },
        {
          "leftLineNumber": 5,
          "rightLineNumber": 5,
          "status": "=",
          "leftContent": "class DataProcessor:",
          "rightContent": "class DataProcessor:"
        },
        {
          "leftLineNumber": 6,
          "rightLineNumber": 6,
          "status": "=",
          "leftContent": "    def __init__(self, input_path):",
          "rightContent": "    def __init__(self, input_path):"
        },
        {
          "leftLineNumber": 7,
          "rightLineNumber": 7,
          "status": "=",
          "leftContent": "        self.input_path = input_path",
          "rightContent": "        self.input_path = input_path"
        },
        {
          "leftLineNumber": 9,
          "rightLineNumber": 8,
          "status": "R",
          "leftContent": "    def load_data(self):",
          "rightContent": "    def load_and_transform_data(self):"
        },
        {
          "leftLineNumber": 10,
          "rightLineNumber": 9,
          "status": "=",
          "leftContent": "        with open(self.input_path, 'r') as file:",
          "rightContent": "        with open(self.input_path, 'r') as file:"
        },
        {
          "leftLineNumber": 11,
          "rightLineNumber": 10,
          "status": "R",
          "leftContent": "            data = file.read()",
          "rightContent": "            data = [line.strip() for line in file]"
        },
        {
          "leftLineNumber": 13,
          "rightLineNumber": 12,
          "status": "=",
          "leftContent": "        return data",
          "rightContent": "        return data"
        },
        {
          "leftLineNumber": 15,
          "rightLineNumber": 14,
          "status": "R",
          "leftContent": "def deprecated_functionality():",
          "rightContent": "def updated_functionality():"
        },
        {
          "leftLineNumber": 16,
          "rightLineNumber": 15,
          "status": "R",
          "leftContent": "    print(\"This function is deprecated.\")",
          "rightContent": "    print(\"This function is now updated.\")"
        },
        {
          "leftLineNumber": 18,
          "rightLineNumber": 17,
          "status": "=",
          "leftContent": "if __name__ == \"__main__\":",
          "rightContent": "if __name__ == \"__main__\":"
        },
        {
          "leftLineNumber": 19,
          "rightLineNumber": 18,
          "status": "=",
          "leftContent": "    processor = DataProcessor(\"data.txt\")",
          "rightContent": "    processor = DataProcessor(\"data.txt\")"
        },
        {
          "leftLineNumber": 20,
          "rightLineNumber": 20,
          "status": "=",
          "leftContent": "    data = processor.load_and_transform_data()",
          "rightContent": "    data = processor.load_and_transform_data()"
        },
        {
          "leftLineNumber": 21,
          "rightLineNumber": 22,
          "status": "R",
          "leftContent": "    deprecated_functionality()",
          "rightContent": "    updated_functionality()"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 23,
          "status": "+",
          "leftContent": "",
          "rightContent": "    for line in data:"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 24,
          "status": "+",
          "leftContent": "",
          "rightContent": "        print(line)"
        },
        {
          "leftLineNumber": 23,
          "rightLineNumber": 26,
          "status": "=",
          "leftContent": "    print(\"Processing complete.\")",
          "rightContent": "    print(\"Processing complete.\")"
        },
        {
          "leftLineNumber": 25,
          "rightLineNumber": 27,
          "status": "=",
          "leftContent": "    print(\"Goodbye!\")",
          "rightContent": "    print(\"Goodbye!\")"
        },
        {
          "leftLineNumber": 26,
          "rightLineNumber": 28,
          "status": "=",
          "leftContent": "    # End of script",
          "rightContent": "    # End of script"
        },
        {
          "leftLineNumber": 27,
          "rightLineNumber": 29,
          "status": "R",
          "leftContent": "    # This is the old comment",
          "rightContent": "    # This is the new comment"
        },
        {
          "leftLineNumber": 29,
          "rightLineNumber": 30,
          "status": "=",
          "leftContent": "    exit()",
          "rightContent": "    exit()"
        }
      ]
    }


    return (
      <div className="flex w-full h-full">

        {/*Left*/}
        <div className="flex-col w-[50%] h-full flex ">

          {comparison["comparison"].map((row, index) => (

            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#ececec]" : row.status === "-" ? "bg-[#f8b2b2]" : row.status === "R" ? "bg-[#f8b2b2]" : "bg-white"
              }`}
            >
              <div
                className="w-[60px] h-[35px] border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.leftLineNumber}
              </div>
              <div
                className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.status === "=" ? "" : row.status === "+" ? "" : row.status === "R" ? "-" : row.status}
              </div>
              <div
                className="w-full flex items-center text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px]"
                style={{whiteSpace: "pre-wrap"}}
              >
                {row.leftContent}
              </div>
            </div>


          ))}


          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

        {/*Right*/}
        <div className="flex-col w-[50%] h-full flex">
          {comparison["comparison"].map((row, index) => (
            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#b2dfdb]" : row.status === "R" ? "bg-[#b2dfdb]" : row.status === "-" ? "bg-[#ececec]" : "bg-white"
              }`}
            >
              <div className="w-full overflow-auto flex" style={{whiteSpace: "nowrap"}}>
                <div
                  className="w-[60px] h-[35px] border-l border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "-" ? "" : row.rightLineNumber}
                </div>
                <div
                  className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "=" ? "" : row.status === "-" ? "" : row.status === "R" ? "+" : row.status}
                </div>
                <div
                  className="flex-grow text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px] overflow-hidden"
                  style={{whiteSpace: "pre-wrap"}}
                >
                  {row.rightContent}
                </div>
              </div>
            </div>
          ))}

          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-l border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

      </div>
    )
  };

  const MetadataContent = () => {

    const comparison = {
      "comparison": [
        {
          "leftLineNumber": 1,
          "rightLineNumber": 1,
          "status": "=",
          "leftContent": "import os",
          "rightContent": "import os"
        },
        {
          "leftLineNumber": 2,
          "rightLineNumber": 2,
          "status": "=",
          "leftContent": "from pathlib import Path",
          "rightContent": "from pathlib import Path"
        },
        {
          "leftLineNumber": 3,
          "rightLineNumber": 3,
          "status": "R",
          "leftContent": "from old_module import DeprecatedFunction",
          "rightContent": "from new_module import ModernFunction"
        },
        {
          "leftLineNumber": 5,
          "rightLineNumber": 5,
          "status": "=",
          "leftContent": "class DataProcessor:",
          "rightContent": "class DataProcessor:"
        },
        {
          "leftLineNumber": 6,
          "rightLineNumber": 6,
          "status": "=",
          "leftContent": "    def __init__(self, input_path):",
          "rightContent": "    def __init__(self, input_path):"
        },
        {
          "leftLineNumber": 7,
          "rightLineNumber": 7,
          "status": "=",
          "leftContent": "        self.input_path = input_path",
          "rightContent": "        self.input_path = input_path"
        },
        {
          "leftLineNumber": 9,
          "rightLineNumber": 8,
          "status": "R",
          "leftContent": "    def load_data(self):",
          "rightContent": "    def load_and_transform_data(self):"
        },
        {
          "leftLineNumber": 10,
          "rightLineNumber": 9,
          "status": "=",
          "leftContent": "        with open(self.input_path, 'r') as file:",
          "rightContent": "        with open(self.input_path, 'r') as file:"
        },
        {
          "leftLineNumber": 11,
          "rightLineNumber": 10,
          "status": "R",
          "leftContent": "            data = file.read()",
          "rightContent": "            data = [line.strip() for line in file]"
        },
        {
          "leftLineNumber": 13,
          "rightLineNumber": 12,
          "status": "=",
          "leftContent": "        return data",
          "rightContent": "        return data"
        },
        {
          "leftLineNumber": 15,
          "rightLineNumber": 14,
          "status": "R",
          "leftContent": "def deprecated_functionality():",
          "rightContent": "def updated_functionality():"
        },
        {
          "leftLineNumber": 16,
          "rightLineNumber": 15,
          "status": "R",
          "leftContent": "    print(\"This function is deprecated.\")",
          "rightContent": "    print(\"This function is now updated.\")"
        },
        {
          "leftLineNumber": 18,
          "rightLineNumber": 17,
          "status": "=",
          "leftContent": "if __name__ == \"__main__\":",
          "rightContent": "if __name__ == \"__main__\":"
        },
        {
          "leftLineNumber": 19,
          "rightLineNumber": 18,
          "status": "=",
          "leftContent": "    processor = DataProcessor(\"data.txt\")",
          "rightContent": "    processor = DataProcessor(\"data.txt\")"
        },
        {
          "leftLineNumber": 20,
          "rightLineNumber": 20,
          "status": "=",
          "leftContent": "    data = processor.load_and_transform_data()",
          "rightContent": "    data = processor.load_and_transform_data()"
        },
        {
          "leftLineNumber": 21,
          "rightLineNumber": 22,
          "status": "R",
          "leftContent": "    deprecated_functionality()",
          "rightContent": "    updated_functionality()"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 23,
          "status": "+",
          "leftContent": "",
          "rightContent": "    for line in data:"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 24,
          "status": "+",
          "leftContent": "",
          "rightContent": "        print(line)"
        },
        {
          "leftLineNumber": 23,
          "rightLineNumber": 26,
          "status": "=",
          "leftContent": "    print(\"Processing complete.\")",
          "rightContent": "    print(\"Processing complete.\")"
        },
        {
          "leftLineNumber": 25,
          "rightLineNumber": 27,
          "status": "=",
          "leftContent": "    print(\"Goodbye!\")",
          "rightContent": "    print(\"Goodbye!\")"
        },
        {
          "leftLineNumber": 26,
          "rightLineNumber": 28,
          "status": "=",
          "leftContent": "    # End of script",
          "rightContent": "    # End of script"
        },
        {
          "leftLineNumber": 27,
          "rightLineNumber": 29,
          "status": "R",
          "leftContent": "    # This is the old comment",
          "rightContent": "    # This is the new comment"
        },
        {
          "leftLineNumber": 29,
          "rightLineNumber": 30,
          "status": "=",
          "leftContent": "    exit()",
          "rightContent": "    exit()"
        }
      ]
    }


    return (
      <div className="flex w-full h-full">

        {/*Left*/}
        <div className="flex-col w-[50%] h-full flex ">

          {comparison["comparison"].map((row, index) => (

            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#ececec]" : row.status === "-" ? "bg-[#f8b2b2]" : row.status === "R" ? "bg-[#f8b2b2]" : "bg-white"
              }`}
            >
              <div
                className="w-[60px] h-[35px] border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.leftLineNumber}
              </div>
              <div
                className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.status === "=" ? "" : row.status === "+" ? "" : row.status === "R" ? "-" : row.status}
              </div>
              <div
                className="w-full flex items-center text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px]"
                style={{whiteSpace: "pre-wrap"}}
              >
                {row.leftContent}
              </div>
            </div>


          ))}


          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

        {/*Right*/}
        <div className="flex-col w-[50%] h-full flex">
          {comparison["comparison"].map((row, index) => (
            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#b2dfdb]" : row.status === "R" ? "bg-[#b2dfdb]" : row.status === "-" ? "bg-[#ececec]" : "bg-white"
              }`}
            >
              <div className="w-full overflow-auto flex" style={{whiteSpace: "nowrap"}}>
                <div
                  className="w-[60px] h-[35px] border-l border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "-" ? "" : row.rightLineNumber}
                </div>
                <div
                  className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "=" ? "" : row.status === "-" ? "" : row.status === "R" ? "+" : row.status}
                </div>
                <div
                  className="flex-grow text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px] overflow-hidden"
                  style={{whiteSpace: "pre-wrap"}}
                >
                  {row.rightContent}
                </div>
              </div>
            </div>
          ))}

          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-l border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

      </div>
    )
  };

  const DataContent = () => {

    const comparison = {
      "comparison": [
        {
          "leftLineNumber": 1,
          "rightLineNumber": 1,
          "status": "=",
          "leftContent": "from tm1py.services import TM1Service",
          "rightContent": "from tm1py.services import TM1Service"
        },
        {
          "leftLineNumber": 2,
          "rightLineNumber": 2,
          "status": "=",
          "leftContent": "from tm1py.objects import Dimension, Hierarchy, Element",
          "rightContent": "from tm1py.objects import Dimension, Hierarchy, Element"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 3,
          "status": "+",
          "leftContent": "",
          "rightContent": "from tm1py.utils import Utils"
        },
        {
          "leftLineNumber": 3,
          "rightLineNumber": 4,
          "status": "=",
          "leftContent": "from datetime import datetime",
          "rightContent": "from datetime import datetime"
        },
        {
          "leftLineNumber": 6,
          "rightLineNumber": 5,
          "status": "R",
          "leftContent": "from tm1py.exceptions import TM1pyException",
          "rightContent": "from analytics.reports import ReportGenerator"
        },
        {
          "leftLineNumber": 7,
          "rightLineNumber": 6,
          "status": "=",
          "leftContent": "def load_dimension(tm1: TM1Service, dimension_name: str):",
          "rightContent": "def load_dimension(tm1: TM1Service, dimension_name: str):"
        },
        {
          "leftLineNumber": 8,
          "rightLineNumber": 9,
          "status": "R",
          "leftContent": "    print(f\"Loaded dimension: {dimension_name}\")",
          "rightContent": "    Utils.log_info(f\"Loaded dimension: {dimension_name}\")"
        },
        {
          "leftLineNumber": 10,
          "rightLineNumber": 9,
          "status": "=",
          "leftContent": "    return dimension",
          "rightContent": "    return dimension"
        },
        {
          "leftLineNumber": 12,
          "rightLineNumber": 11,
          "status": "=",
          "leftContent": "if __name__ == \"__main__\":",
          "rightContent": "if __name__ == \"__main__\":"
        },
        {
          "leftLineNumber": 13,
          "rightLineNumber": 12,
          "status": "=",
          "leftContent": "    with TM1Service(address='localhost', port=12354, user='admin', password='', ssl=True) as tm1:",
          "rightContent": "    with TM1Service(address='localhost', port=12354, user='admin', password='', ssl=True) as tm1:"
        },
        {
          "leftLineNumber": 14,
          "rightLineNumber": 13,
          "status": "=",
          "leftContent": "        load_dimension(tm1, \"Region\")",
          "rightContent": "        load_dimension(tm1, \"Region\")"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 14,
          "status": "+",
          "leftContent": "",
          "rightContent": "        ReportGenerator.generate_report(tm1, \"Region\")"
        }
      ]
    }
    const comparaison2 = {
      "comparison": [
        {
          "leftLineNumber": 1,
          "rightLineNumber": 1,
          "status": "=",
          "leftContent": "import os",
          "rightContent": "import os"
        },
        {
          "leftLineNumber": 2,
          "rightLineNumber": 2,
          "status": "=",
          "leftContent": "from pathlib import Path",
          "rightContent": "from pathlib import Path"
        },
        {
          "leftLineNumber": 3,
          "rightLineNumber": 3,
          "status": "R",
          "leftContent": "from old_module import DeprecatedFunction",
          "rightContent": "from new_module import ModernFunction"
        },
        {
          "leftLineNumber": 5,
          "rightLineNumber": 5,
          "status": "=",
          "leftContent": "class DataProcessor:",
          "rightContent": "class DataProcessor:"
        },
        {
          "leftLineNumber": 6,
          "rightLineNumber": 6,
          "status": "=",
          "leftContent": "    def __init__(self, input_path):",
          "rightContent": "    def __init__(self, input_path):"
        },
        {
          "leftLineNumber": 7,
          "rightLineNumber": 7,
          "status": "=",
          "leftContent": "        self.input_path = input_path",
          "rightContent": "        self.input_path = input_path"
        },
        {
          "leftLineNumber": 9,
          "rightLineNumber": 8,
          "status": "R",
          "leftContent": "    def load_data(self):",
          "rightContent": "    def load_and_transform_data(self):"
        },
        {
          "leftLineNumber": 10,
          "rightLineNumber": 9,
          "status": "=",
          "leftContent": "        with open(self.input_path, 'r') as file:",
          "rightContent": "        with open(self.input_path, 'r') as file:"
        },
        {
          "leftLineNumber": 11,
          "rightLineNumber": 10,
          "status": "R",
          "leftContent": "            data = file.read()",
          "rightContent": "            data = [line.strip() for line in file]"
        },
        {
          "leftLineNumber": 13,
          "rightLineNumber": 12,
          "status": "=",
          "leftContent": "        return data",
          "rightContent": "        return data"
        },
        {
          "leftLineNumber": 15,
          "rightLineNumber": 14,
          "status": "R",
          "leftContent": "def deprecated_functionality():",
          "rightContent": "def updated_functionality():"
        },
        {
          "leftLineNumber": 16,
          "rightLineNumber": 15,
          "status": "R",
          "leftContent": "    print(\"This function is deprecated.\")",
          "rightContent": "    print(\"This function is now updated.\")"
        },
        {
          "leftLineNumber": 18,
          "rightLineNumber": 17,
          "status": "=",
          "leftContent": "if __name__ == \"__main__\":",
          "rightContent": "if __name__ == \"__main__\":"
        },
        {
          "leftLineNumber": 19,
          "rightLineNumber": 18,
          "status": "=",
          "leftContent": "    processor = DataProcessor(\"data.txt\")",
          "rightContent": "    processor = DataProcessor(\"data.txt\")"
        },
        {
          "leftLineNumber": 20,
          "rightLineNumber": 20,
          "status": "=",
          "leftContent": "    data = processor.load_and_transform_data()",
          "rightContent": "    data = processor.load_and_transform_data()"
        },
        {
          "leftLineNumber": 21,
          "rightLineNumber": 22,
          "status": "R",
          "leftContent": "    deprecated_functionality()",
          "rightContent": "    updated_functionality()"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 23,
          "status": "+",
          "leftContent": "",
          "rightContent": "    for line in data:"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 24,
          "status": "+",
          "leftContent": "",
          "rightContent": "        print(line)"
        },
        {
          "leftLineNumber": 23,
          "rightLineNumber": 26,
          "status": "=",
          "leftContent": "    print(\"Processing complete.\")",
          "rightContent": "    print(\"Processing complete.\")"
        },
        {
          "leftLineNumber": 25,
          "rightLineNumber": 27,
          "status": "=",
          "leftContent": "    print(\"Goodbye!\")",
          "rightContent": "    print(\"Goodbye!\")"
        },
        {
          "leftLineNumber": 26,
          "rightLineNumber": 28,
          "status": "=",
          "leftContent": "    # End of script",
          "rightContent": "    # End of script"
        },
        {
          "leftLineNumber": 27,
          "rightLineNumber": 29,
          "status": "R",
          "leftContent": "    # This is the old comment",
          "rightContent": "    # This is the new comment"
        },
        {
          "leftLineNumber": 29,
          "rightLineNumber": 30,
          "status": "=",
          "leftContent": "    exit()",
          "rightContent": "    exit()"
        }
      ]
    }


    return (
      <div className="flex w-full h-full">

        {/*Left*/}
        <div className="flex-col w-[50%] h-full flex ">

          {comparison["comparison"].map((row, index) => (

            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#ececec]" : row.status === "-" ? "bg-[#f8b2b2]" : row.status === "R" ? "bg-[#f8b2b2]" : "bg-white"
              }`}
            >
              <div
                className="w-[60px] h-[35px] border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.leftLineNumber}
              </div>
              <div
                className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.status === "=" ? "" : row.status === "+" ? "" : row.status === "R" ? "-" : row.status}
              </div>
              <div
                className="w-full flex items-center text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px]"
                style={{whiteSpace: "pre-wrap"}}
              >
                {row.leftContent}
              </div>
            </div>


          ))}


          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

        {/*Right*/}
        <div className="flex-col w-[50%] h-full flex">
          {comparison["comparison"].map((row, index) => (
            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#b2dfdb]" : row.status === "R" ? "bg-[#b2dfdb]" : row.status === "-" ? "bg-[#ececec]" : "bg-white"
              }`}
            >
              <div className="w-full overflow-auto flex" style={{whiteSpace: "nowrap"}}>
                <div
                  className="w-[60px] h-[35px] border-l border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "-" ? "" : row.rightLineNumber}
                </div>
                <div
                  className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "=" ? "" : row.status === "-" ? "" : row.status === "R" ? "+" : row.status}
                </div>
                <div
                  className="flex-grow text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px] overflow-hidden"
                  style={{whiteSpace: "pre-wrap"}}
                >
                  {row.rightContent}
                </div>
              </div>
            </div>
          ))}

          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-l border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

      </div>
    )
  };

  const EpilogContent = () => {

    const comparison = {
      "comparison": [
        {
          "leftLineNumber": 1,
          "rightLineNumber": 1,
          "status": "=",
          "leftContent": "import os",
          "rightContent": "import os"
        },
        {
          "leftLineNumber": 2,
          "rightLineNumber": 2,
          "status": "=",
          "leftContent": "from pathlib import Path",
          "rightContent": "from pathlib import Path"
        },
        {
          "leftLineNumber": 3,
          "rightLineNumber": 3,
          "status": "R",
          "leftContent": "from old_module import DeprecatedFunction",
          "rightContent": "from new_module import ModernFunction"
        },
        {
          "leftLineNumber": 5,
          "rightLineNumber": 5,
          "status": "=",
          "leftContent": "class DataProcessor:",
          "rightContent": "class DataProcessor:"
        },
        {
          "leftLineNumber": 6,
          "rightLineNumber": 6,
          "status": "=",
          "leftContent": "    def __init__(self, input_path):",
          "rightContent": "    def __init__(self, input_path):"
        },
        {
          "leftLineNumber": 7,
          "rightLineNumber": 7,
          "status": "=",
          "leftContent": "        self.input_path = input_path",
          "rightContent": "        self.input_path = input_path"
        },
        {
          "leftLineNumber": 9,
          "rightLineNumber": 8,
          "status": "R",
          "leftContent": "    def load_data(self):",
          "rightContent": "    def load_and_transform_data(self):"
        },
        {
          "leftLineNumber": 10,
          "rightLineNumber": 9,
          "status": "=",
          "leftContent": "        with open(self.input_path, 'r') as file:",
          "rightContent": "        with open(self.input_path, 'r') as file:"
        },
        {
          "leftLineNumber": 11,
          "rightLineNumber": 10,
          "status": "R",
          "leftContent": "            data = file.read()",
          "rightContent": "            data = [line.strip() for line in file]"
        },
        {
          "leftLineNumber": 13,
          "rightLineNumber": 12,
          "status": "=",
          "leftContent": "        return data",
          "rightContent": "        return data"
        },
        {
          "leftLineNumber": 15,
          "rightLineNumber": 14,
          "status": "R",
          "leftContent": "def deprecated_functionality():",
          "rightContent": "def updated_functionality():"
        },
        {
          "leftLineNumber": 16,
          "rightLineNumber": 15,
          "status": "R",
          "leftContent": "    print(\"This function is deprecated.\")",
          "rightContent": "    print(\"This function is now updated.\")"
        },
        {
          "leftLineNumber": 18,
          "rightLineNumber": 17,
          "status": "=",
          "leftContent": "if __name__ == \"__main__\":",
          "rightContent": "if __name__ == \"__main__\":"
        },
        {
          "leftLineNumber": 19,
          "rightLineNumber": 18,
          "status": "=",
          "leftContent": "    processor = DataProcessor(\"data.txt\")",
          "rightContent": "    processor = DataProcessor(\"data.txt\")"
        },
        {
          "leftLineNumber": 20,
          "rightLineNumber": 20,
          "status": "=",
          "leftContent": "    data = processor.load_and_transform_data()",
          "rightContent": "    data = processor.load_and_transform_data()"
        },
        {
          "leftLineNumber": 21,
          "rightLineNumber": 22,
          "status": "R",
          "leftContent": "    deprecated_functionality()",
          "rightContent": "    updated_functionality()"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 23,
          "status": "+",
          "leftContent": "",
          "rightContent": "    for line in data:"
        },
        {
          "leftLineNumber": "",
          "rightLineNumber": 24,
          "status": "+",
          "leftContent": "",
          "rightContent": "        print(line)"
        },
        {
          "leftLineNumber": 23,
          "rightLineNumber": 26,
          "status": "=",
          "leftContent": "    print(\"Processing complete.\")",
          "rightContent": "    print(\"Processing complete.\")"
        },
        {
          "leftLineNumber": 25,
          "rightLineNumber": 27,
          "status": "=",
          "leftContent": "    print(\"Goodbye!\")",
          "rightContent": "    print(\"Goodbye!\")"
        },
        {
          "leftLineNumber": 26,
          "rightLineNumber": 28,
          "status": "=",
          "leftContent": "    # End of script",
          "rightContent": "    # End of script"
        },
        {
          "leftLineNumber": 27,
          "rightLineNumber": 29,
          "status": "R",
          "leftContent": "    # This is the old comment",
          "rightContent": "    # This is the new comment"
        },
        {
          "leftLineNumber": 29,
          "rightLineNumber": 30,
          "status": "=",
          "leftContent": "    exit()",
          "rightContent": "    exit()"
        }
      ]
    }


    return (
      <div className="flex w-full h-full">

        {/*Left*/}
        <div className="flex-col w-[50%] h-full flex ">

          {comparison["comparison"].map((row, index) => (

            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#ececec]" : row.status === "-" ? "bg-[#f8b2b2]" : row.status === "R" ? "bg-[#f8b2b2]" : "bg-white"
              }`}
            >
              <div
                className="w-[60px] h-[35px] border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.leftLineNumber}
              </div>
              <div
                className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]">
                {row.status === "=" ? "" : row.status === "+" ? "" : row.status === "R" ? "-" : row.status}
              </div>
              <div
                className="w-full flex items-center text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px]"
                style={{whiteSpace: "pre-wrap"}}
              >
                {row.leftContent}
              </div>
            </div>


          ))}


          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

        {/*Right*/}
        <div className="flex-col w-[50%] h-full flex">
          {comparison["comparison"].map((row, index) => (
            <div
              key={index}
              className={`flex w-full items-center ${
                row.status === "+" ? "bg-[#b2dfdb]" : row.status === "R" ? "bg-[#b2dfdb]" : row.status === "-" ? "bg-[#ececec]" : "bg-white"
              }`}
            >
              <div className="w-full overflow-auto flex" style={{whiteSpace: "nowrap"}}>
                <div
                  className="w-[60px] h-[35px] border-l border-r border-[#ececec] flex items-center justify-center text-[#797896] text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "-" ? "" : row.rightLineNumber}
                </div>
                <div
                  className="w-[40px] h-[35px] flex items-center justify-center text-[19px] font-medium font-['Poppins'] pt-[3px]"
                >
                  {row.status === "=" ? "" : row.status === "-" ? "" : row.status === "R" ? "+" : row.status}
                </div>
                <div
                  className="flex-grow text-[#797896] text-[19px] font-medium font-['Poppins'] text-left pt-[3px] overflow-hidden"
                  style={{whiteSpace: "pre-wrap"}}
                >
                  {row.rightContent}
                </div>
              </div>
            </div>
          ))}

          {/*Fill div*/}
          <div className="flex flex-grow w-full">
            <div
              className="w-[60px] border-r border-l border-[#ececec] justify-center text-[#797896] text-[19px] font-medium font-['Poppins']">
            </div>
            <div className="w-[40px] bg-white"></div>
            <div
              className="flex-grow w-full justify-left text-[#797896] text-[19px] font-medium font-['Poppins'] text-left">
            </div>
          </div>
        </div>

      </div>
    )
  };


  return (
    <>
      {/* Header */}
      <div
        className="flex-shrink-0 flex w-full h-[65px] border-b border-b-[#ececec] font-medium text-[19px] font-['Poppins']">
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
      <div className="flex-grow overflow-y-auto no-scrollbar">
        {renderBodyContent()}
      </div>
    </>
  );
};

export default Process_Versioning;
