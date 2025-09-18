import { Container } from "@/components/container";
import { Heading } from "@/components/heading";

export default function PrivacyPolicy() {
  return (
    <Container>
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Heading className="mb-8">
            Privacy Policy
          </Heading>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Privacy</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Garnet Labs Inc. and its representatives and affiliates (collectively, "Garnet", "we", "us" or "our") are committed to protecting your privacy. This Privacy Policy (as updated from time to time, this "Privacy Policy") has been designed to comply with Canada's <em>Personal Information Protection and Electronic Documents Act</em> and other applicable federal, state and provincial privacy laws relating to the protection of personal information (collectively, "Privacy Laws"). This Privacy Policy forms part of and is hereby expressly incorporated into our Terms of Service (the "Agreement").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Scope</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                In this Privacy Policy, we explain how we collect, use, disclose and protect the personal information of our Users (as defined below).
              </p>
              
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                You are a "User" if you are an individual and you access our website located at <a href="https://garnet.ai" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">https://garnet.ai</a> or related links (collectively, the "Site"), install or use any other software supplied by us, access any information, function, feature, application, product or service made available by us or register an account with us (collectively, the "Service").
              </p>
              
              <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                Your "personal information" means any information about you as defined in applicable Privacy Laws and includes information such as your full name, address, postal code, email address and geographic location. It may also include information on how you use the Service. It does not include business contact information or certain publicly available information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Updates</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                We may modify this Privacy Policy at any time for any reason, effective upon posting an updated version through the Service. If the modifications are significant, we will use commercially reasonable efforts to provide you with prior notice via email or other reasonable means. You should regularly review this Privacy Policy, as your continued use of the Service after the date on which an updated version becomes effective constitutes your acceptance of the updated Privacy Policy. In the event that you do not accept the updated Privacy Policy, your sole and exclusive remedy is to cease your access and use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer to Complete Security</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                By accepting this Privacy Policy, you acknowledge and agree that no data transmission over the Internet is completely secure. We cannot guarantee or warrant the security of any information you provide to us and you transmit such information to us at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have questions or complaints with respect to our privacy policies and practices or if you wish to request access to, or correction of, your personal information under our care and control, please contact our Privacy Officer at:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Attention</h4>
                    <p className="text-gray-600 dark:text-gray-300">Garnet Labs Inc.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Mailing Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      155 Wellington Street West<br />
                      Toronto, Ontario<br />
                      M5V 3J7 Canada
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:privacy@garnet.ai" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">privacy@garnet.ai</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                Inquiries or complaints will be dealt with promptly. We will acknowledge your query, investigate it and provide you with a response within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">File a Complaint</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                If you believe the Privacy Laws relating to the protection of your personal information or this Privacy Policy have not been respected, you may file a complaint with us. We will acknowledge your complaint, investigate it and provide you with a response within 30 days. If, after an investigation, your complaint is deemed justified, we will take appropriate steps to correct the situation, including, if necessary, amending our policies and practices. If you are not satisfied with the results of the investigation or the corrective measures taken by us, you may exercise the remedies available under law by contacting the Office of the Privacy Commissioner of Canada at the address below:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Office of the Privacy Commissioner of Canada<br />
                      30 Victoria Street<br />
                      Gatineau, QC K1A 1H3
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}
