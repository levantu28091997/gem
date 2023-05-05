import BackgroundFAQ from '@/components/Atoms/BackgroundFAQ';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScreenSize from '@/utils/useScreenSize';

export default function TermOfService() {
  const [dataTOS, setDataTOS] = useState([
    {
      title: '1. Age',
      content: [
        {
          textB: '',
          textNor:
            'By accessing the GameHUB Website, you attest that you are 16 years of age or older.',
        },
      ],
      status: true,
    },
    {
      title: '2. Use of this website',
      content: [
        {
          textB: '',
          textNor: 'You agree to use the Site only for lawful purposes:',
        },
        {
          textB: '(a)',
          textNor:
            "Specifically you agree not to do any of the following: (1) upload to or transmit on the GameHUB Website any defamatory, indecent, obscene, harassing, violent or otherwise objectionable material, or any material that is, or may be, protected by copyright, without permission from the copyright owner; (2) use the GameHUB Website to violate the legal rights (including the rights of publicity and privacy) of others or to violate the laws of any jurisdiction; (3) intercept or attempt to intercept electronic mail not intended for you; (4) misrepresent an affiliation with any person or organization; (5) upload to or transmit on the GameHUB Website any advertisements or solicitations of business; (6) restrict or inhibit use of the GameHUB Website by others; (7) upload or otherwise transmit files that contain a virus or corrupted data; (8) collect information about others (including e-mail addresses) without their consent; (9) download a file or software or include in a message any software, files or links that you know, or have reason to believe, cannot be distributed legally over the GameHUB Website or that you have a contractual obligation to keep confidential (notwithstanding its availability on the GameHUB Website); (10) post “spam,” transmit chain letters or engage in other similar activities; (11) solicit, provide or exchange any personal information, including but not limited to user names or passwords; (12) “stalk,” “phish,” abuse or harass another user, or attempt to do any of the foregoing; or (13) engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the GameHUB Website, or which, as determined by GameHUB, may harm GameHUB or Website Visitors or expose them to liability. Without limiting any of the foregoing, you also agree to abide by any code of conduct and policies applicable to the GameHUB Website or any service available on the GameHUB Website.",
        },
        {
          textB: '(b)',
          textNor:
            'Any content and/or opinions uploaded, expressed or submitted to a message board, blog, chatroom or any other publicly available section of the GameHUB Website (including password-protected areas), and all articles and responses to questions, other than the content provided by GameHUB, are solely the opinions and responsibility of the person or entity submitting them and do not necessarily reflect the opinions of GameHUB. You understand and acknowledge that you are responsible for whatever content you submit, and you, not GameHUB, have full responsibility for such content, including its legality, reliability and appropriateness. By uploading or otherwise transmitting material to any area of the GameHUB Website, you warrant that the material is your own or is in the public domain or otherwise free of proprietary or other restrictions and that you have the right to post it to the GameHUB Website. You grant to GameHUB the royalty-free, irrevocable, perpetual, transferable and world-wide right and license to use all content you upload or otherwise transmit to the GameHUB Website in any reasonable manner GameHUB chooses, including, but not limited, to copying, displaying, performing or publishing it in any format or media whatsoever, modifying it, incorporating it into other material or making a derivative work based on it.',
        },
        {
          textB: '(c)',
          textNor:
            ' Except as expressly authorized by GameHUB in writing, you may not reproduce, sublicense, distribute, sell or exploit for any commercial purposes (i) any part of this GameHUB Website or its content, (ii) access to this GameHUB Website or (iii) use of this GameHUB Website or of any services or materials available through this GameHUB Website, including, without limitation, by leasing access to the GameHUB Website (e.g., at a cyber café), gathering and selling virtual items, codes, pre-paid game cards, or virtual currency through the GameHUB Website, or otherwise.',
        },
        {
          textB: '(d)',
          textNor:
            "GameHUB reserves the right, but does not assume any responsibility, to (1) remove any material posted on the GameHUB Website which GameHUB, in its sole discretion, deems inconsistent with the foregoing commitments (including any material that GameHUB has reason to believe constitutes, or for which GameHUB has received notice of its constituting, a copyright infringement; or if the material is in breach with the applicable data protection laws and regulations); (2) monitor and/or record communications between and among Website Visitors for as far as allowed under the applicable law; and (3) terminate any user's access to all or part of the GameHUB Website. However, GameHUB can neither review all material or communication before it is posted on the GameHUB Website nor ensure prompt removal of objectionable material after it has been posted. Accordingly, GameHUB assumes no liability for any action or inaction regarding transmissions, communications or content provided by third parties. GameHUB reserves the right to take any action it deems necessary to protect the personal safety of Website Visitors and the public; however, GameHUB has no liability or responsibility to anyone for performance or non-performance of the activities described in this paragraph",
        },
        {
          textB: '(e)',
          textNor:
            'Your failure to comply with the provisions of (a), (b) or (c) above may result in the termination of your access to the GameHUB Website and may expose you to civil and/or criminal liability.',
        },
      ],
      status: true,
    },
    {
      title: '3. Privacy: protection of personal information',
      content: [
        {
          textB: '',
          textNor:
            "GameHUB's use of your personal information and your responsibilities in connection with protecting your privacy are described our Website Privacy Statement Policy.",
        },
      ],
      status: false,
    },
    {
      title: '4. Uploads to your devices',
      content: [
        {
          textB: '',
          textNor:
            "Please note that if you are using downloadable applications from GameHUB, updates to your device's systems or firmware may render your use of the applications incompatible. GameHUB does not warrant that the GameHUB Website or any GameHUB applications will be compatible with any updates to, or prior versions of, your devices. GameHUB may, but is not obligated to, provide you with updates to the GameHUB Website or applications that improve compatibility with updated mobile devices.",
        },
      ],
      status: false,
    },
    {
      title: '5. Data charges',
      content: [
        {
          textB: '',
          textNor:
            'To the extent that your use of the GameHUB Website or any GameHUB application requires, or permits utilization of, wireless, cellular data, or internet access, you are independently responsible for securing the necessary data access service. For example, with respect to your mobile devices, the provider of your data plans may charge you data access fees in connection with your use of the GameHUB Website or GameHUB applications. You are solely responsible for all such charges payable to third parties.',
        },
      ],
      status: false,
    },
    {
      title: '6. Copyright restrictions/use of content',
      content: [
        {
          textB: '',
          textNor:
            'The entire contents of this GameHUB Website (including all information, text, displays, images and audio and any software made available through or in connection with the GameHUB Website) and the design, selection and arrangement thereof, are proprietary to GameHUB or its affiliates or licensors and are protected by Dutch and international laws regarding copyrights, trademarks, trade secrets and other proprietary rights. You are authorized only to use the content on the GameHUB Website for personal use related to your role as a current or prospective user of the GameHUB Website. You may not copy, modify, create derivative works of, publicly display or perform, republish, store, transmit or distribute any of the material on this GameHUB Website without the prior written consent of GameHUB, except to: (a) store copies of such materials temporarily in RAM, (b) store files that are automatically cached by your web browser for display enhancement purposes, and (c) print a reasonable number of pages of the GameHUB Website; provided in each case that you do not alter or remove any copyright or other proprietary notices included in such materials. Neither the title nor any intellectual property rights to any information or material in this GameHUB Website are transferred to you, but remain with GameHUB or the applicable owner of such content.',
        },
      ],
      status: false,
    },
    {
      title: '7. Software and downloads',
      content: [
        {
          textB: '',
          textNor:
            'If GameHUB offers downloads of, or access to, software on this GameHUB Website and you download or otherwise access such software, the software (including any data or images incorporated in or generated by the software) is licensed to you. You do not receive title to this software and you may not distribute or use the software other than for the purpose of using the applicable feature or service of the GameHUB Website as offered by GameHUB. You may not modify, adapt, reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of such software. Except as expressly provided, you may not create any derivative works of the software or any services available on the GameHUB Website. This license is revocable at any time without notice and with or without cause. You agree to destroy or return to GameHUB all copies of the software upon revocation of your license to the software and/or termination of your access to the GameHUB Website. The software is subject to all restrictions on use, disclaimers of warranties and other provisions in these Terms of Use. In the event that the software is also subject to a separate end user license agreement, the terms of such end user license agreement shall control any conflict between those terms and these Terms of Use.',
        },
      ],
      status: false,
    },
    {
      title: '8. Access and interference',
      content: [
        {
          textB: '',
          textNor:
            "You agree that you will not (a) use any robot, spider or other automatic device, process or means to access the GameHUB Website, (b) use any manual process to monitor or copy any of the material on this GameHUB Website or for any other unauthorized purpose without the prior written consent of GameHUB, (c) use any device, software or routine that interferes with the proper working of the GameHUB Website, (d) attempt to interfere with the proper working of the GameHUB Website, (e) take any action that imposes an unreasonable or disproportionately large load on GameHUB's infrastructure, or (f) access, reload or “refresh” transactional pages, or make any other request to transactional servers, more than once during any three (3) second interval.",
        },
      ],
      status: false,
    },
    {
      title: '9. Trademarks',
      content: [
        {
          textB: '',
          textNor:
            "GameHUB's name and logos, and all related names, logos, product and service names, designs and slogans contained in the GameHUB Website or any software provided or accessed in connection therewith are trademarks of GameHUB, its affiliates, licensors and/or contractors unless otherwise clearly specified in writing. You may not use such marks without the prior written permission of GameHUB. All other names, brands and marks are used for identification purposes only and may be the trademarks of their respective owners.",
        },
      ],
      status: false,
    },
    {
      title: '10. Liability of GameHUB and its licensors',
      content: [
        {
          textB: '',
          textNor:
            'GameHUB does not assume any liability for the materials, information and opinions provided on, or available through, the GameHUB Website (the “GameHUB Website Content”). Reliance on the GameHUB Website Content is solely at your own risk. GameHUB disclaims any liability for injury or damages resulting from the use of the GameHUB Website and any GameHUB Website Content.',
        },
        {
          textB: '',
          textNor:
            'The website is provided “as is” and “as available,” without any warranty or guaranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. GameHUB, its affiliates and service providers are neither responsible nor liable for any indirect, incidental, consequential, special, exemplary, punitive or other damages arising out of or relating in any way to the website. GameHUB shall not be liable under these Terms of Use or otherwise in connection with the website for an amount more than EUR 500 (five hundred euros).',
        },
      ],
      status: false,
    },
    {
      title: '11. Interaction with other users',
      content: [
        {
          textB: '',
          textNor:
            "As a condition of access to the GameHUB Website, you release GameHUB (and its shareholders, partners, affiliates, directors, officers, subsidiaries, employees, agents, suppliers, third party information providers, licensors, licensees, distributors and contractors) from claims, demand and damages (actual and consequential) of every kind and nature arising out of or in any way connected with any dispute you may have with any other user of the GameHUB Website. GameHUB will have the right but not the obligation to resolve disputes between Website Visitors relating to use of the GameHUB Website, and to the extent that it elects to resolve such disputes, GameHUB will do so in good faith GameHUB Website. You release GameHUB (and its shareholders, partners, affiliates, directors, officers, subsidiaries, employees, agents, suppliers, third party information providers, licensors, licensees, distributors and contractors) from claims, demands and damages (actual and consequential) of every kind and nature arising out of or in any way connected with GameHUB's resolution of such disputes.",
        },
      ],
      status: false,
    },
    {
      title: '12. Indemnification',
      content: [
        {
          textB: '',
          textNor:
            "You agree to indemnify and hold harmless GameHUB and its shareholders, partners, affiliates, directors, officers, subsidiaries, employees, agents, suppliers, third party information providers, licensors, licensees, distributors, contractors and others involved in the GameHUB Website or the delivery of products, services or information over the GameHUB Website, from and against any and all liabilities, expenses, damages and costs, including reasonable attorney's fees, arising from any violation by you of these Terms of Use or your use of the GameHUB Website or any products, services or information obtained from the GameHUB Website.",
        },
      ],
      status: false,
    },
    {
      title: '13. Comments and submissions',
      content: [
        {
          textB: '',
          textNor:
            "GameHUB welcomes your comments. All comments, suggestions or other information sent by you to GameHUB or its advertisers or business partners in response to solicitations on this GameHUB Website will become GameHUB's property and you agree that all intellectual property rights therein are herewith transferred in advance to GameHUB. For avoidance of doubt, GameHUB shall own any developments by GameHUB or on its behalf arising out of your comments, suggestions or other submissions. To the extent GameHUB does not own such materials, you grant and agree to grant GameHUB a non-exclusive, royalty-free, worldwide license to utilize, create derivative works of, distribute and sublicense such materials for any purpose in connection with GameHUB's web GameHUB Websites, products and services. You have no expectation of any review, compensation or consideration of any type for all submissions hereunder.",
        },
      ],
      status: false,
    },
    {
      title: '14. Links to other websites',
      content: [
        {
          textB: '',
          textNor:
            'The GameHUB Website contains links to other GameHUB Websites on the Internet. GameHUB is not responsible for, and does not endorse, the content, products, services or practices of any third-party websites. This includes, without limitation, websites framed within the GameHUB Website, as well as third-party advertisements. GameHUB does not make any representations regarding the quality, content, accuracy or suitability for your viewing or use of these third-party websites and third-party advertisements. Your use of third-party websites is at your own risk and subject to the terms and conditions of use of such a website. In the event that you choose to purchase a product or service from a third party, GameHUB is not responsible for such products or services, as it is not party to such transaction and is not liable for any direct or indirect costs or damages arising out of any dispute between you and such third party. Neither GameHUB, its licensors or contractors, makes any express or implied representations or warranties regarding the goods or services offered by such merchant, including, but not limited to, warranties of merchantability, fitness for a particular purpose, title, non-infringement or compatibility.',
        },
      ],
      status: false,
    },
    {
      title: '15. Copyright and other intellectual property infringement',
      content: [
        {
          textB: '',
          textNor:
            "GameHUB may, in appropriate circumstances and in GameHUB's sole discretion, terminate your access to this GameHUB Website if it deems you to be a repeat infringer of intellectual property rights connected to the GameHUB Website. GameHUB may also, in its sole discretion, limit your access to the GameHUB Website and/or terminate your membership if you infringe any intellectual property rights of others, whether or not there is any repeat infringement.",
        },

        {
          textB: '',
          textNor:
            'Please contact our designated agent at privacy@GameHUB.com if you become aware of any content that may infringe the copyright, other intellectual property right or privacy rights of a third party or that you believe to be in violation of these Terms of Use.',
        },
      ],
      status: false,
    },
    {
      title: '16. Choice of law',
      content: [
        {
          textB: '',
          textNor:
            'These Terms of Use shall be governed in all respects by and construed in accordance with the laws of the Netherlands, without regard to its conflicts of law principles. If your compliance with or our rights under these Terms of Use is/are in any way affected by consumer protection laws in your country of residence, you should not use our GameHUB Website.',
        },
        {
          textB: '',
          textNor:
            'Any dispute arising out of or in connection with these Terms of Use or your use of the GameHUB Website, shall be submitted to the competent court of Amsterdam, the Netherlands. If you are a resident in a member state of the EU or a country in which this clause is prohibited by local law, this clause does not apply to you and does not deprive you of the protection of the mandatory provisions of the consumer protection laws in your country.',
        },
      ],
      status: false,
    },
    {
      title: '17. Miscellaneous',
      content: [
        {
          textB: '',
          textNor:
            'These Terms of Use, as they may be amended from time to time, completely and exclusively state the agreement between you and GameHUB with respect to the GameHUB Website, and no other terms that may have been communicated to you orally or in any other manner shall have any force or effect. Any cause of action you may have with respect to the GameHUB Website must be commenced within one (1) year after the claim or cause of action arises or such claim or cause of action is barred.',
        },
        {
          textB: '',
          textNor:
            "You agree and acknowledge that your violation of any restrictions in these Terms of Use on the use of the GameHUB Website, GameHUB Website Content, or software or services available on or through the GameHUB Website, or your use or disclosure of confidential information in a manner inconsistent with the provisions of these Terms of Use, may cause GameHUB irreparable damage for which remedies at law may be inadequate. GameHUB's licensors and contractors are express third-party beneficiaries of any terms in these Terms of Use that are applicable to their products or services, including disclaimers of warranty and limitations of liability, and shall have the right to enforce directly against you all of your applicable representations, warranties, covenants, indemnifications and obligations under these Terms of Use.",
        },
        {
          textB: '',
          textNor:
            'If any part of these Terms of Use is unenforceable, the unenforceable part shall be construed to reflect, as nearly as possible, the original intentions of the parties. The other provisions of these Terms of Use shall remain in full force and effect.',
        },
        {
          textB: '',
          textNor:
            "The terms related to protection of GameHUB's intellectual property rights, disclaimer of warranties limitation of liability, choice of law, indemnification obligations and any licenses granted by you to GameHUB shall survive any termination of these Terms of Use.",
        },
        {
          textB: '',
          textNor:
            "GameHUB's failure to insist upon or enforce strict performance of any provision of these Terms of Use shall not constitute a waiver of the provision. Neither a course of dealing or conduct between you and GameHUB nor any trade practices shall be deemed to modify these Terms of Use.",
        },
      ],
      status: false,
    },
  ]);
  const OpenTab = (index: number) => {
    setDataTOS(
      dataTOS.map((item, i) => {
        if (i === index) {
          item.status = !item.status;
        }
        return item;
      }),
    );
  };
  const { isMobile } = useScreenSize();
  return (
    <>
      <Head>
        <title>Gamehub</title>
      </Head>
      <div className='mx-auto w-full max-w-full relative z-10 main'>
        <BackgroundFAQ />
        <div
          className={`max-w-[1280px] mx-auto py-[42px] ${
            isMobile ? `px-[20px]` : `px-[81px]`
          } z-30 dark:bg-opacity-30 bg-opacity-60 bg-white relative rounded-md`}
        >
          <div className=''>
            <h2 className='text-black dark:text-white text-center font-[800] text-[42px] mb-[20px]'>
              TERMS OF USE
              <p className='text-[20px] font-[500]'>(Version October 2022)</p>
            </h2>
            <div className='dark:text-white'>
              <div className='my-5'>
                <p className='text-[18px]'>
                  Welcome to GameHUB! We operate a website, accessible at{' '}
                  <Link href={'/'} className='text-[#FF860A] font-[600]'>
                    https://beta.gamehub.io/
                  </Link>{' '}
                  . In this document we explainthe terms of use for our GameHUB
                  Website. The GameHUB Website may include access to virtual
                  environments, games and other content, as well as downloadable
                  software or applications for use on personal computers,
                  tablets, mobile devices or phones. All users of the GameHUB
                  Website (“Website Visitors”) are subject to the following
                  terms and conditions of use (these “Terms of Use”).
                </p>
                <br />
                <p className='text-[18px]'>
                  Please read these Terms of Use carefully before accessing or
                  using any part of this GameHUB Website. By accessing or using
                  this GameHUB Website, you agree that you have read, understand
                  and agree to be bound by these Terms of Use, as amended from
                  time to time by GameHUB. If you do not wish to agree to these
                  Terms of Use, do not access or use any part of this GameHUB
                  Website.
                </p>
                <br />
                <p className='text-[18px]'>
                  GameHUB may revise and update these Terms of Use at any and if
                  we do so, we will notify you by posting the revised Terms of
                  Use on the GameHUB Website. Your continued use of the GameHUB
                  Website means that you accept and agree to the revised Terms
                  of Use. If you disagree with the Terms of Use or are
                  dissatisfied with this GameHUB Website, your sole and
                  exclusive remedy is to discontinue using this GameHUB Website.
                </p>
              </div>
              {dataTOS.map((item, index) => {
                return (
                  <div key={index} className='my-5 relative'>
                    <h4
                      onClick={() => OpenTab(index)}
                      className={`text-[24px] ${
                        item.status == true
                          ? `text-[#FF860A] ml-10`
                          : `text-[#000000] dark:text-white ml-10`
                      }  font-[700] cursor-pointer flex gap-3  ml-10`}
                    >
                      <div
                        className={`${
                          item.status == false ? '-rotate-90' : ''
                        } mt-1 transition absolute top-0 left-0`}
                      >
                        <Image
                          src={'/images/Expand_down.png'}
                          alt=''
                          width={30}
                          height={5}
                        />
                      </div>

                      {item.title}
                    </h4>
                    <div
                      className={`${item.status == true ? `block` : `hidden`}`}
                    >
                      {item.content.map((item) => (
                        <p className='text-[18px] dark:text-white'>
                          <br />
                          <strong>{item.textB}</strong> {item.textNor}
                          <br />
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
