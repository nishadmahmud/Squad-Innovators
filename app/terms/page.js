export const metadata = {
    title: "Terms & Conditions",
    description: "Terms and Conditions for Squad Innovators.",
};

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Introduction</h2>
                    <p>Welcome to Squad Innovators. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Services</h2>
                    <p>Squad Innovators provides software development, mobile app development, and digital solutions. We reserve the right to modify or discontinue any service at any time.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Intellectual Property</h2>
                    <p>All content, code, and designs on this website are the property of Squad Innovators unless otherwise stated. You may not use our intellectual property without our express written consent.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>Squad Innovators shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at squadinnovators@gmail.com.</p>
                </div>
            </div>
        </div>
    );
}
