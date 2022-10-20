import { ReactComponent as FacebookSVG } from '@/assets/svgs/facebook.svg';
import { ReactComponent as GithubSVG } from '@/assets/svgs/github.svg';
import { ReactComponent as InstagramSVG } from '@/assets/svgs/instagram.svg';
import { GroupNotice } from '@/components/sections';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { ReactComponent as RssSVG } from '@/assets/svgs/rss.svg';
import { ReactComponent as TwitterSVG } from '@/assets/svgs/twitter.svg';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Footer(): ReactElement {
  const { isSmall } = useScreen();
  const headingClasses = classNames(
    'text-white uppercase text-xl font-bold mb-2'
  );
  const linkClasses = classNames(
    'text-sm py-2 mr-2 ',
    'lg:py-0 lg:my-0',
    'transition-colors duration-300',
    'hover:text-white'
  );
  const socialLinkClasses = classNames(
    'text-primary',
    'transition duration-300',
    'hover:text-white'
  );
  const svgClasses = classNames(
    'fill-current w-7 h-7 m-1',
    'lg:my-0 lg:ml-0',
    'hover:animate-push'
  );

  return (
    <div id="email-sign-up" className={classNames('gradient-footer-gray')}>
      <div
        className={classNames(
          'lg:flex lg:justify-end lg:max-w-screen-xl lg:mx-auto py-7'
        )}
      >
        {!isSmall && (
          <GroupNotice
            classes={classNames(
              'lg:flex lg:flex-col lg:justify-center lg:w-full lg:max-w-xl lg:px-0 lg:border-b-0 lg:border-r  border-white lg:my-2'
            )}
          />
        )}
        <footer className={classNames('text-white ', 'lg:w-1/2 lg:mt-2')}>
          <div
            className={classNames(
              'flex flex-wrap pt-6 pb-4 px-8 border-b border-white border-dashed',
              'md:pb-8',
              'lg:pt-2'
            )}
          >
            <div
              className={classNames(
                'flex flex-col w-1/2 mb-4',
                'md:w-1/4',
                'lg:w-1/3'
              )}
            >
              <h3 className={headingClasses}>Socials</h3>
              <div className={classNames('w-1/2 mb-4', 'lg:w-full')}>
                <div className={classNames('flex flex-wrap -ml-1')}>
                  <Link href="https://twitter.com/session_app">
                    <a
                      className={socialLinkClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterSVG className={svgClasses} />
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/getsession">
                    <a
                      className={socialLinkClasses}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramSVG className={svgClasses} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                'flex flex-col w-1/2 mb-4',
                'md:w-1/4',
                'lg:w-1/3'
              )}
            >
              <Link href="https://optf.ngo/">
                <a
                  className={linkClasses}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Session
                </a>
              </Link>
              <Link href="https://oxen.io/">
                <a
                  className={linkClasses}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oxen
                </a>
              </Link>
              <Link href="https://lokinet.org/">
                <a
                  className={linkClasses}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lokinet
                </a>
              </Link>
            </div>
            <div
              className={classNames(
                'flex w-full',
                'md:w-1/2',
                'lg:block lg:w-1/3'
              )}
            >
              <div
                className={classNames(
                  'flex flex-col w-1/2 mb-4',
                  'md:w-1/4',
                  'lg:w-2/3'
                )}
              >
                <Link href="https://optf.ngo/">
                  <a
                    className={linkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact us
                  </a>
                </Link>
                <Link href="https://oxen.io/">
                  <a
                    className={linkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get involved
                  </a>
                </Link>
                <Link href="https://lokinet.org/">
                  <a
                    className={linkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate now
                  </a>
                </Link>
                <Link href="https://lokinet.org/">
                  <a
                    className={linkClasses}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Private policy
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              'py-6 px-8',
              'md:p-10 md:w-full md:max-w-3xl',
              'lg:py-5 lg:px-7 lg:mb-2 lg:max-w-lg'
            )}
          >
            <Image
              src="/assets/images/logo-optf.png"
              alt="session logo"
              width="70px"
              height="26px"
            />
            <p
              className={classNames(
                'group text-white text-sm leading-6 tracking-wide'
              )}
            >
              The purpose of the OPTF is to build open-source, metadata-free
              communications tools and apps that defend privacy in the digital
              world.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}