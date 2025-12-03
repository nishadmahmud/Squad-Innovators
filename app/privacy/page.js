export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Squad Innovators.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
                    <p>We may collect personal information such as your name, email address, and phone number when you contact us or use our services.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use your information to provide and improve our services, communicate with you, and comply with legal obligations.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Data Security</h2>
                    <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Third-Party Services</h2>
                    <p>We may use third-party services that collect, monitor, and analyze data to help us improve our services.</p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at squadinnovators@gmail.com.</p>
                </div>
            </div>
        </div>
    );
}
