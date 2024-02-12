"use client";
const PrivacyPolicy = (props) => {
    return (
        <div className="my-10 mt-24 xl:mt-32 px-4 lg:px-20 xl:px-32 ">
            <div className="py-10 text-2xl md:text-5xl font-semibold text-gray-900 text-center "> Privacy Policy</div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10 ">
                <div class="prose">
                    <ol class="list-decimal list-inside mb-4">
                        <li  class="mt-4 list-none"><strong>1. Introduction</strong><br />Welcome to iAssureIT, a leading IT company specializing in mobile app, web app, and e-commerce development. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our services.</li>
                        <li class="mt-4 list-none"><strong>2. Information We Collect</strong>
                            <ul class="list-disc list-inside ml-4">
                                <li className="list-none"><strong>2.1 Personal Information</strong><br />We may collect personal information that can be used to identify you, such as:
                                    <ul class="list-disc list-inside ml-4">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Phone number</li>
                                        <li>Billing information</li>
                                    </ul>
                                </li>
                                <li class="mt-2 list-none"><strong>2.2 Non-Personal Information</strong><br />We may also collect non-personal information, such as:
                                    <ul class="list-disc list-inside ml-4">
                                        <li>Device information (e.g., device type, operating system)</li>
                                        <li>Usage data (e.g., pages visited, features used)</li>
                                        <li>Log data (e.g., IP address, browser type)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-4 list-none"><strong>3. How We Collect Information</strong><br />We may collect information through:
                            <ul class="list-disc list-inside ml-4">
                                <li>Direct interactions (e.g., user input)</li>
                                <li>Automated technologies (e.g., cookies)</li>
                                <li>Third-party sources (e.g., analytics services)</li>
                                <li>Billing information</li>
                            </ul>
                        </li>
                        <li class="mt-4 list-none"><strong>4. Use of Information</strong><br />We use the collected information for:
                            <ul class="list-disc list-inside ml-4">
                                <li>Providing and improving our services</li>
                                <li>Personalizing user experience</li>
                                <li>Sending updates and notifications</li>
                                <li>Analyzing usage patterns</li>
                            </ul>
                        </li>
                        <li class="mt-4 list-none"><strong>5. Disclosure of Information</strong><br />We may share information with:
                            <ul class="list-disc list-inside ml-4">
                                <li>Service providers and business partners</li>
                                <li>Legal authorities if required by law</li>
                                <li>In the event of a business transfer or merger</li>
                            </ul>
                        </li>
                        <li class="mt-4 list-none"><strong>6. Security</strong><br />
                            We take reasonable measures to protect your information, but no method of transmission or storage is completely secure. We cannot guarantee absolute security.
                        </li>
                        <li class="mt-4 list-none"><strong>7. Your Choices</strong><br />You can:
                            <ul class="list-disc list-inside ml-4">
                                <li>Opt-out of marketing communications</li>
                                <li>Update or delete your information</li>
                            </ul>
                        </li>
                        <li class="mt-4 list-none"><strong>8. Children's Privacy</strong><br />
                            Our services are not directed to children under 13. We do not knowingly collect personal information from children.
                        </li>
                        <li class="mt-4 list-none"><strong>9. Changes to This Privacy Policy</strong><br />
                            We may update this Privacy Policy. Check the "Effective Date" at the top to see when it was last revised.
                        </li>
                        <li class="mt-4 list-none"><strong>10. Contact Us</strong><br />
                            If you have questions or concerns about this Privacy Policy, please contact us at info@iassureit.com
                        </li>
                    </ol>
                </div>

            </div>



        </div>
    )
}
export default PrivacyPolicy;