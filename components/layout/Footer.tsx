"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react'

export default function Footer() {
  const socialIcons = [
    {id:1, name:'facebook', link: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M15.1191 14.5799H17.8191L18.8991 10.2599H15.1191V8.09991C15.1191 6.98751 15.1191 5.93991 17.2791 5.93991H18.8991V2.31111C18.547 2.26467 17.2175 2.15991 15.8135 2.15991C12.8813 2.15991 10.7991 3.94947 10.7991 7.23591V10.2599H7.55908V14.5799H10.7991V23.7599H15.1191V14.5799Z" fill="#F7F7F8"/>
    </svg>},
    {id:2, name:'linkedIn', link: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M7.49529 5.4007C7.49501 5.97357 7.26716 6.52286 6.86188 6.92774C6.4566 7.33262 5.90708 7.55991 5.33421 7.55963C4.76135 7.55934 4.21205 7.33149 3.80718 6.92621C3.4023 6.52093 3.17501 5.97141 3.17529 5.39854C3.17558 4.82568 3.40343 4.27639 3.80871 3.87151C4.21399 3.46663 4.76351 3.23934 5.33637 3.23962C5.90924 3.23991 6.45853 3.46776 6.86341 3.87304C7.26828 4.27832 7.49558 4.82784 7.49529 5.4007ZM7.56009 9.1591H3.24009V22.6807H7.56009V9.1591ZM14.3857 9.1591H10.0873V22.6807H14.3425V15.5851C14.3425 11.6323 19.4941 11.2651 19.4941 15.5851V22.6807H23.7601V14.1163C23.7601 7.4527 16.1353 7.70111 14.3425 10.9735L14.3857 9.1591Z" fill="#F7F7F8"/>
    </svg>},
    {id:3, name:'Insta', link: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M8.42464 2.16064H17.4966C20.9526 2.16064 23.7606 4.96865 23.7606 8.42465V17.4966C23.7606 19.158 23.1007 20.7512 21.926 21.926C20.7512 23.1007 19.158 23.7606 17.4966 23.7606H8.42464C4.96864 23.7606 2.16064 20.9526 2.16064 17.4966V8.42465C2.16064 6.76333 2.8206 5.17006 3.99533 3.99533C5.17006 2.8206 6.76333 2.16064 8.42464 2.16064ZM8.20864 4.32064C7.17748 4.32064 6.18856 4.73027 5.45941 5.45941C4.73027 6.18856 4.32064 7.17748 4.32064 8.20865V17.7126C4.32064 19.8618 6.05944 21.6006 8.20864 21.6006H17.7126C18.7438 21.6006 19.7327 21.191 20.4619 20.4619C21.191 19.7327 21.6006 18.7438 21.6006 17.7126V8.20865C21.6006 6.05944 19.8618 4.32064 17.7126 4.32064H8.20864ZM18.6306 5.94065C18.9887 5.94065 19.3321 6.08288 19.5852 6.33605C19.8384 6.58923 19.9806 6.9326 19.9806 7.29065C19.9806 7.64869 19.8384 7.99207 19.5852 8.24524C19.3321 8.49841 18.9887 8.64065 18.6306 8.64065C18.2726 8.64065 17.9292 8.49841 17.6761 8.24524C17.4229 7.99207 17.2806 7.64869 17.2806 7.29065C17.2806 6.9326 17.4229 6.58923 17.6761 6.33605C17.9292 6.08288 18.2726 5.94065 18.6306 5.94065ZM12.9606 7.56065C14.3928 7.56065 15.7663 8.12957 16.779 9.14227C17.7917 10.155 18.3606 11.5285 18.3606 12.9606C18.3606 14.3928 17.7917 15.7663 16.779 16.779C15.7663 17.7917 14.3928 18.3606 12.9606 18.3606C11.5285 18.3606 10.155 17.7917 9.14227 16.779C8.12957 15.7663 7.56064 14.3928 7.56064 12.9606C7.56064 11.5285 8.12957 10.155 9.14227 9.14227C10.155 8.12957 11.5285 7.56065 12.9606 7.56065ZM12.9606 9.72065C12.1013 9.72065 11.2772 10.062 10.6696 10.6696C10.062 11.2772 9.72064 12.1013 9.72064 12.9606C9.72064 13.8199 10.062 14.6441 10.6696 15.2517C11.2772 15.8593 12.1013 16.2006 12.9606 16.2006C13.8199 16.2006 14.6441 15.8593 15.2517 15.2517C15.8593 14.6441 16.2006 13.8199 16.2006 12.9606C16.2006 12.1013 15.8593 11.2772 15.2517 10.6696C14.6441 10.062 13.8199 9.72065 12.9606 9.72065Z" fill="#F7F7F8"/>
    </svg>},
    {id:4, name:'X', link: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M15.0554 11.2249L23.2575 1.62158H21.3135L14.1936 9.95972L8.50411 1.62158H1.94312L10.5453 14.2317L1.94312 24.3016H3.88712L11.4072 15.4953L17.4157 24.3016H23.9767L15.0554 11.2249ZM12.3937 14.3418L11.5222 13.0863L4.58695 3.09578H7.57261L13.1681 11.1585L14.0397 12.414L21.3151 22.8954H18.3294L12.3937 14.3418Z" fill="#F7F7F8"/>
    </svg>},
    {id:5, name:'tikok', link: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
      <path d="M14.6211 0.5L15.0586 1.17969V1.18066C15.4648 1.82096 16.2699 2.92032 17.2773 3.99414C18.1995 4.97707 19.3262 5.97461 20.5 6.56348V9.69629C18.6832 9.1354 17.0117 7.87314 15.6572 6.53613L14.8057 5.69629V16.4453C14.8057 20.328 11.6024 23.4997 7.65332 23.5C3.704 23.5 0.5 20.3282 0.5 16.4453C0.50013 12.5628 3.70333 9.3909 7.64648 9.38477C7.88925 9.38477 8.12798 9.39909 8.3623 9.42383V12.3516C8.1301 12.3103 7.89044 12.2881 7.64648 12.2881C5.33294 12.2883 3.44734 14.147 3.44727 16.4395C3.44727 18.7385 5.33343 20.5916 7.64648 20.5918C9.96022 20.5918 11.8467 18.7321 11.8467 16.4395C11.8467 16.3659 11.8395 16.292 11.834 16.2354L11.8467 8.22363V0.5H14.6211Z" fill="#F7F7F8" stroke="#F7F7F8"/>
    </svg>}, 
    {id:6, name:'youtube', link: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M32.3259 32.1798H16.1448C13.9797 32.1798 12.2354 30.265 12.2354 27.9098V20.2699C12.2354 17.9052 13.9885 16 16.1448 16H32.3259C34.491 16 36.2353 17.9148 36.2353 20.2699V27.9098C36.2441 30.2746 34.491 32.1798 32.3259 32.1798Z" fill="#F7F7F8"/>
      <path d="M28.4818 23.9704L21.6748 20.0452V27.8957L28.4818 23.9704Z" fill="#0C0C0E"/>
    </svg>}
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return ( 
    <footer className="relative flex w-full h-screen aspect-36/23 items-start bg-(--spotlight-950) text-(--spotlight-200) overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start justify-between relative z-10 w-full max-w-7xl mx-auto px-(--section-margin-x) py-(--space-xxl)">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col w-full lg:w-auto">
          <h2
            className="font-primary leading-[0.85] text-[5.75rem] md:text-[12rem] tracking-tight text-(--spotlight-50)  lg:text-left"
            style={{
              fontFamily: 'var(--font-primary)',
              display: 'inline-block',
              background: 'linear-gradient(180deg, var(--color-Spotlight-Color-Spotlight-White, #F7F7F8) 0%, var(--color-Spotlight-Color-Dark-Gray, #4A4A5A) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            LET'S
            <br />
            CONNECT!
          </h2>

          <p className="mt-(--space-sm) text-sm text-(--spotlight-300) font-secondary lg:text-left">
            Spotlight Communications and Marketing LTD 2024
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col lg:items-end w-full lg:w-auto">
          <div className="w-full max-w-md lg:w-104">

            {/* Contact list */}
            <ul className="space-y-4 w-full">
              {/* EMAIL */}
              <li className="flex items-start lg:items-center gap-4 lg:gap-5">
                <span className="flex-none w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-(--spotlight-700) flex items-center justify-center mt-0.5 lg:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='lg:width-24 lg:height=24' viewBox="0 0 24 24" fill="none">
                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#F7F7F8" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="#F7F7F8" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="text-sm text-(--spotlight-50) flex-1">info@spotlightplc.com</div>
              </li>

              {/* PHONE */}
              <li className="flex items-start lg:items-center gap-4 lg:gap-5">
                <span className="flex-none w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-(--spotlight-700) flex items-center justify-center mt-0.5 lg:mt-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='lg:width-24 lg:height=24' viewBox="0 0 24 24" fill="none">
                  <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="#F7F7F8" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                </span>
                <div className="text-sm text-(--spotlight-50) flex-1">+251 91 398 6445</div>
              </li>

              {/* LOCATION */}
              <li className="flex items-start lg:items-center gap-4 lg:gap-5">
                <span className="flex-none w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-(--spotlight-700) flex items-center justify-center mt-0.5 lg:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='lg:width-24 lg:height=24' viewBox="0 0 24 24" fill="none">
                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#F7F7F8" strokeWidth="1.5"/>
                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#F7F7F8" strokeWidth="1.5"/>
                    <path d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20" stroke="#F7F7F8" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <div className="text-sm text-(--spotlight-50) flex-1">
                  Bole; DH Geda Tower 7th Floor; Office Suite 705
                </div>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex flex-row gap-3 lg:gap-4  lg:justify-start">
              {socialIcons.map(({id, link}) => (
                <button key={id} className="flex-none w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-(--spotlight-700) flex items-center justify-center">
                  {React.cloneElement(link, { 
                    width: 20, 
                    height: 20,
                    className: "lg:w-6 lg:h-6"
                  })}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="mt-6">
              <div className="flex flex-col  sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                {isMounted ? (
                  <input
                    type="text"
                    placeholder="Insert Your Name"
                    className="flex-1 bg-transparent border-b border-(--spotlight-700) placeholder-(--spotlight-500) text-(--spotlight-50) py-2 px-1 focus:outline-none"
                  />
                ) : (
                  <div className="flex-1 border-b border-(--spotlight-700) py-2 px-1" />
                )}
                <button 
                className="bg-(--spotlight-50) flex items-center justify-center text-(--spotlight-950)  gap-2 px-8 py-4 text-xl font-medium shadow-sm w-26  sm:w-auto"
                >
                 <Image
                    src="/Icons/black-dot.svg"
                    alt="dot"
                    width={14}
                    height={14}
                  />
                  <span>NEXT</span> 
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade / Shape */}
      <div className="pointer-events-none  z-0 absolute w-full  bottom-0 ">
        <Image
          src="/Home/footer-logo.svg"
          alt="Bottom shape"
          width={1440}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </footer>
  )
}