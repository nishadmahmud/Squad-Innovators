import Image from "next/image";

const TrustedBy = () => {
    return (
        <div className="lg:mt-24 bg-opacity-50 md:mt-20 mt-10 lg:w-10/12 w-11/12 mx-auto lg:h-[75vh]">
            <h1 className="text-center font-semibold lg:text-4xl md:text-2xl text-2xl lg:w-full w-11/12 mx-auto mb-10 text-primary">Chosen by 50+ companies across the country</h1>

            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-center items-center md:mt-10 mt-4 gap-y-5 gap-x-5">


                {/* japanese */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        Japanese Website
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:md:w-32 w-28" width={200} height={200} alt="comapnyLogo" src="/satsuna.png" unoptimized></Image>
                    </div>
                </div>



                {/*i luxary*/}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        Saloon
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">
                        <Image className="md:w-28 w-24" width={200} height={200} alt="comapnyLogo" src="/bonzer.png" unoptimized></Image>
                    </div>
                </div>


                {/* day planner*/}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        E-Commerce
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-28 w-24" width={200} height={200} alt="comapnyLogo" src="/brothers.png" unoptimized></Image>
                    </div>
                </div>


                {/* company 01 */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        E-Commerce
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-32 w-28" width={200} height={200} alt="comapnyLogo" src="/bodda.png" unoptimized></Image>
                    </div>
                </div>


                {/* company 02 */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        E-Commerce
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-36 w-32" width={200} height={200} alt="comapnyLogo" src="/apple_mart.png" unoptimized></Image>
                    </div>
                </div>


                {/* company 03 */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        Real-Estate
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="w-24 mt-2" width={200} height={200} alt="comapnyLogo" src="/dlm.png" unoptimized></Image>
                    </div>
                </div>




                {/* ap pharma */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        Pharmacy
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-20 w-16" width={200} height={200} alt="comapnyLogo" src="/apPharma.png" unoptimized></Image>
                    </div>
                </div>


                {/* company 05 */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        Garments & Apparels
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-24 w-20 mt-4" width={200} height={200} alt="comapnyLogo" src="/bhai-bhai.png" unoptimized></Image>
                    </div>
                </div>




                {/* corporate care */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        HRM & Payroll
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-28 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-32 w-24" width={200} height={200} alt="comapnyLogo" src="/corporate-care.png" unoptimized></Image>
                    </div>
                </div>



                {/* company 06 */}
                <div className="flex items-center justify-center flex-col">
                    <span className="md:text-sm text-xs border px-3 py-1 rounded-3xl bg-white relative top-4 z-10 text-gray-500 font-medium shadow-sm">
                        Donation Management
                    </span>
                    <div className="border border-gray-100 shadow-sm md:w-56 w-48 h-24 flex flex-col justify-center items-center rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">

                        <Image className="md:w-20 w-16 mt-2" width={200} height={200} alt="comapnyLogo" src="/dontaion.png" unoptimized></Image>
                    </div>
                </div>




            </div>



        </div>
    );
};

export default TrustedBy;
