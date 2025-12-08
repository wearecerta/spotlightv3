import OurServicesCard from "../ui/OurServicesCard";

export default function OurServices() {
  const services = [
    {
      number: "01",
      title: "PR & COMMUNICATIONS",
      description: "As the Best Marketing Agency in Ethiopia and one of the most trusted names in Addis Ababa, we understand that communication is the foundation of every successful brand. Our PR & Communications services ensure that your brand voice is strong, consistent, and impactful. From managing reputation to building meaningful media relations, we specialize in strategies that enhance credibility and trust.",
      servicesList: [
        "Reputation Management",
        "Communications Strategy",
        "Media Training",
        "Media Relation"
      ],
      href: "/service/pr-communications"
    },
    {
      number: "02",
      title: "MARKETING",
      description: "Recognized as the Best Marketing Agency in Addis Ababa, we focus on result-driven marketing strategies that connect businesses with their audiences. Our marketing solutions are backed by research, creativity, and innovation, helping brands to position themselves strongly in the competitive Ethiopian market.",
      servicesList: [
        "Market Research",
        "Shoppers Marketing",
        "Experiential Marketing",
        "Marketing Strategy",
        "Promotional Marketing",
        "Content & Email Marketing"
      ],
      href: "/service/marketing"
    },
    {
      number: "03",
      title: "ADVERTISING",
      description: "As the Best Advertising Agency in Addis Ababa and Ethiopia, we provide 360° advertising solutions that make brands visible across platforms. Whether it's traditional media or digital advertising, our campaigns are designed to maximize reach, engagement, and conversions.",
      servicesList: [
        "TV Advertising",
        "Radio Advertising",
        "Print Advertising",
        "Outdoor Advertising",
        "Digital Advertising",
        "Campaign Strategy"
      ],
      href: "/service/advertising"
    },
    {
      number: "04",
      title: "BRANDING & DESIGN",
      description: "Being the Best Marketing Agency in Ethiopia, we believe that branding is more than just a logo - it's about crafting an identity that resonates. Our creative team crafts designs and brand strategies that make businesses stand out in Addis Ababa and beyond.",
      servicesList: [
        "Brand Identity",
        "Logo Design",
        "Visual Design",
        "Brand Strategy",
        "Packaging Design",
        "Creative Direction"
      ],
      href: "/service/branding-design"
    },
    {
      number: "05",
      title: "PRODUCTION",
      description: "As one of the leading Best Advertising Agencies in Ethiopia, we offer complete production services to bring your brand story to life. From TV commercials to documentaries and creative shoots, we deliver high-quality content that connects with audiences.",
      servicesList: [
        "Video Production",
        "TV Commercials",
        "Documentaries",
        "Creative Shoots",
        "Post-Production",
        "Content Creation"
      ],
      href: "/service/production"
    },
    {
      number: "06",
      title: "EVENT MANAGEMENT",
      description: "With years of expertise, we are known as the Best Marketing and Advertising Agency in Addis Ababa for organizing impactful events. From planning to execution, we manage every detail to ensure your brand is showcased in the best possible way.",
      servicesList: [
        "Event Planning",
        "Event Execution",
        "Corporate Events",
        "Product Launches",
        "Conferences",
        "Exhibitions"
      ],
      href: "/service/event-management"
    },
    {
      number: "07",
      title: "WEBSITE DEVELOPMENT",
      description: "As a full-service agency, we go beyond advertising and marketing. Being trusted as the Best Marketing Agency in Ethiopia, we also provide innovative web development services tailored to your business goals. Our websites are designed to be responsive, user-friendly, and conversion-focused.",
      servicesList: [
        "Web Design",
        "Web Development",
        "E-commerce",
        "Responsive Design",
        "UI/UX Design",
        "Website Maintenance"
      ],
      href: "/service/website-development"
    },
    {
      number: "08",
      title: "DIGITAL MARKETING",
      description: "In today's digital-first world, our expertise as the Best Advertising Agency in Addis Ababa makes us the go-to partner for businesses aiming to grow online. From SEO to influencer marketing, we deliver strategies that ensure visibility, engagement, and measurable growth.",
      servicesList: [
        "SEO",
        "Social Media Marketing",
        "Influencer Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      href: "/service/digital-marketing"
    }
  ];

  return (
    <section
      className="relative flex flex-col items-start w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'var(--spotlight-950)',
      }}
    >
      {/* Fixed Background SVG - OUR SERVICES Text */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        style={{
          zIndex: 0,
        }}
      >
        <div className="relative w-full h-full opacity-20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 558" 
            fill="none"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="spotlightGradient" x1="720" y1="0" x2="720" y2="558" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#717286" />
                <stop offset="100%" stopColor="#0C0C0E" />
              </linearGradient>
            </defs>
            <path d="M1354.04 557.266C1336.01 557.266 1320.32 554.532 1306.95 549.064C1293.79 543.597 1281.74 534.99 1270.81 523.245L1305.13 488.616C1312.62 496.514 1320.62 502.589 1329.13 506.842C1337.63 510.892 1347.25 512.917 1357.98 512.917C1367.1 512.917 1374.08 511.398 1378.94 508.361C1384.01 505.12 1386.54 500.767 1386.54 495.299C1386.54 490.236 1384.72 486.085 1381.07 482.845C1377.43 479.402 1372.57 476.466 1366.49 474.036C1360.62 471.403 1354.04 468.973 1346.75 466.745C1339.66 464.315 1332.47 461.48 1325.18 458.24C1318.09 454.798 1311.51 450.646 1305.43 445.786C1299.56 440.926 1294.8 434.851 1291.16 427.56C1287.51 420.27 1285.69 411.259 1285.69 400.526C1285.69 386.755 1288.93 375.01 1295.41 365.29C1302.09 355.569 1311.31 348.077 1323.05 342.812C1334.8 337.546 1348.47 334.914 1364.06 334.914C1379.65 334.914 1394.03 337.546 1407.19 342.812C1420.36 348.077 1431.19 355.367 1439.7 364.682L1405.07 399.007C1398.59 392.527 1392.01 387.667 1385.32 384.427C1378.64 381.187 1371.35 379.566 1363.45 379.566C1355.96 379.566 1350.09 380.883 1345.83 383.515C1341.58 386.148 1339.46 389.894 1339.46 394.754C1339.46 399.615 1341.28 403.563 1344.92 406.601C1348.57 409.639 1353.33 412.372 1359.2 414.803C1365.28 417.03 1371.86 419.359 1378.94 421.789C1386.23 424.219 1393.42 427.054 1400.51 430.294C1407.6 433.534 1414.08 437.686 1419.95 442.748C1426.03 447.811 1430.89 454.19 1434.53 461.885C1438.18 469.581 1440 478.896 1440 489.831C1440 511.297 1432.41 527.902 1417.22 539.648C1402.23 551.393 1381.17 557.266 1354.04 557.266Z" fill="url(#spotlightGradient)"/>
            <path d="M1101.5 553.924V338.559H1155.87V553.924H1101.5ZM1144.63 553.924V508.057H1261.28V553.924H1144.63ZM1144.63 466.442V421.789H1250.34V466.442H1144.63ZM1144.63 384.427V338.559H1259.45V384.427H1144.63Z" fill="url(#spotlightGradient)"/>
            <path d="M995.674 557.266C979.271 557.266 964.083 554.532 950.11 549.064C936.137 543.394 923.885 535.598 913.355 525.675C903.027 515.549 894.927 503.703 889.054 490.135C883.384 476.567 880.549 461.885 880.549 446.09C880.549 430.092 883.384 415.41 889.054 402.045C894.927 388.477 903.027 376.731 913.355 366.809C923.885 356.886 936.035 349.089 949.806 343.419C963.779 337.749 978.866 334.914 995.066 334.914C1012.08 334.914 1027.37 337.648 1040.93 343.115C1054.5 348.38 1066.45 355.772 1076.78 365.29L1040.33 401.741C1035.26 396.071 1028.99 391.616 1021.49 388.375C1014 385.135 1005.19 383.515 995.066 383.515C986.358 383.515 978.359 384.933 971.069 387.768C963.981 390.603 957.805 394.856 952.54 400.526C947.275 405.994 943.123 412.575 940.086 420.27C937.25 427.965 935.833 436.572 935.833 446.09C935.833 455.608 937.25 464.214 940.086 471.909C943.123 479.605 947.275 486.287 952.54 491.957C957.805 497.425 963.981 501.678 971.069 504.715C978.359 507.55 986.358 508.968 995.066 508.968C1005.19 508.968 1014.1 507.449 1021.8 504.412C1029.49 501.172 1036.07 496.615 1041.54 490.742L1077.99 527.194C1067.46 536.711 1055.51 544.103 1042.15 549.368C1028.99 554.633 1013.49 557.266 995.674 557.266Z" fill="url(#spotlightGradient)"/>
            <path d="M798.629 553.924V338.559H853.002V553.924H798.629Z" fill="url(#spotlightGradient)"/>
            <path d="M644.72 553.924L563.616 338.559H621.634L682.386 512.613H657.478L719.141 338.559H775.944L693.929 553.924H644.72Z" fill="url(#spotlightGradient)"/>
            <path d="M430.323 466.745V427.864H471.33C480.241 427.864 487.024 425.738 491.682 421.485C496.542 417.03 498.972 411.056 498.972 403.563C498.972 396.273 496.542 390.401 491.682 385.945C487.024 381.288 480.241 378.959 471.33 378.959H430.323V338.559H478.924C493.505 338.559 506.263 341.293 517.198 346.76C528.336 352.228 537.044 359.721 543.321 369.239C549.599 378.756 552.738 389.894 552.738 402.652C552.738 415.41 549.498 426.649 543.017 436.369C536.74 445.887 527.931 453.38 516.59 458.848C505.25 464.113 491.986 466.745 476.798 466.745H430.323ZM387.189 553.924V338.559H441.562V553.924H387.189ZM503.832 553.924L441.258 461.581L490.163 449.735L566.711 553.924H503.832Z" fill="url(#spotlightGradient)"/>
            <path d="M196.746 553.924V338.559H251.119V553.924H196.746ZM239.88 553.924V508.057H356.523V553.924H239.88ZM239.88 466.442V421.789H345.588V466.442H239.88ZM239.88 384.427V338.559H354.701V384.427H239.88Z" fill="url(#spotlightGradient)"/>
            <path d="M83.2301 557.266C65.207 557.266 49.5128 554.532 36.1474 549.064C22.9845 543.597 10.9353 534.99 0 523.245L34.3248 488.616C41.8175 496.514 49.8165 502.589 58.3218 506.842C66.8271 510.892 76.4461 512.917 87.1789 512.917C96.2917 512.917 103.278 511.398 108.138 508.361C113.201 505.12 115.732 500.767 115.732 495.299C115.732 490.236 113.91 486.085 110.265 482.845C106.62 479.402 101.759 476.466 95.6842 474.036C89.8115 471.403 83.2301 468.973 75.9398 466.745C68.8521 464.315 61.6632 461.48 54.3729 458.24C47.2852 454.798 40.7038 450.646 34.6286 445.786C28.7559 440.926 23.997 434.851 20.3519 427.56C16.7068 420.27 14.8842 411.259 14.8842 400.526C14.8842 386.755 18.1243 375.01 24.6045 365.29C31.2872 355.569 40.5013 348.077 52.2466 342.812C63.992 337.546 77.6612 334.914 93.2541 334.914C108.847 334.914 123.225 337.546 136.388 342.812C149.551 348.077 160.385 355.367 168.89 364.682L134.262 399.007C127.781 392.527 121.2 387.667 114.517 384.427C107.835 381.187 100.544 379.566 92.6466 379.566C85.1539 379.566 79.2812 380.883 75.0286 383.515C70.7759 386.148 68.6496 389.894 68.6496 394.754C68.6496 399.615 70.4722 403.563 74.1173 406.601C77.7624 409.639 82.5213 412.372 88.394 414.803C94.4692 417.03 101.051 419.359 108.138 421.789C115.429 424.219 122.618 427.054 129.705 430.294C136.793 433.534 143.273 437.686 149.146 442.748C155.221 447.811 160.081 454.19 163.726 461.885C167.371 469.581 169.194 478.896 169.194 489.831C169.194 511.297 161.6 527.902 146.412 539.648C131.427 551.393 110.366 557.266 83.2301 557.266Z" fill="url(#spotlightGradient)"/>
            <path d="M914.884 132.135V93.2541H955.892C964.802 93.2541 971.586 91.1278 976.244 86.8752C981.104 82.4201 983.534 76.4461 983.534 68.9534C983.534 61.6632 981.104 55.7905 976.244 51.3353C971.586 46.6777 964.802 44.3489 955.892 44.3489H914.884V3.94885H963.486C978.066 3.94885 990.824 6.68269 1001.76 12.1504C1012.9 17.618 1021.61 25.1108 1027.88 34.6286C1034.16 44.1464 1037.3 55.2842 1037.3 68.0421C1037.3 80.8 1034.06 92.0391 1027.58 101.759C1021.3 111.277 1012.49 118.77 1001.15 124.238C989.812 129.503 976.547 132.135 961.359 132.135H914.884ZM871.75 219.314V3.94885H926.123V219.314H871.75ZM988.394 219.314L925.82 126.971L974.725 115.125L1051.27 219.314H988.394Z" fill="url(#spotlightGradient)"/>
            <path d="M745.384 222.656C727.159 222.656 711.059 218.909 697.086 211.417C683.316 203.721 672.583 193.09 664.888 179.522C657.193 165.954 653.345 150.563 653.345 133.35V3.94885H707.414V137.299C707.414 144.995 709.034 151.677 712.274 157.347C715.717 162.815 720.273 167.068 725.944 170.105C731.816 172.94 738.297 174.358 745.384 174.358C752.674 174.358 759.053 172.94 764.521 170.105C769.989 167.068 774.343 162.815 777.583 157.347C780.823 151.88 782.443 145.298 782.443 137.603V3.94885H837.12V133.654C837.12 150.867 833.272 166.258 825.577 179.826C817.881 193.191 807.149 203.721 793.378 211.417C779.81 218.909 763.812 222.656 745.384 222.656Z" fill="url(#spotlightGradient)"/>
            <path d="M514.976 223.263C498.37 223.263 483.081 220.428 469.108 214.758C455.135 209.088 442.883 201.19 432.353 191.065C422.025 180.939 413.925 169.093 408.052 155.525C402.18 141.754 399.243 126.971 399.243 111.176C399.243 95.3805 402.078 80.8 407.748 67.4346C413.621 53.8667 421.721 42.0201 432.049 31.8947C442.377 21.7694 454.527 13.9729 468.5 8.50528C482.473 2.83509 497.762 0 514.368 0C530.974 0 546.263 2.83509 560.236 8.50528C574.209 13.9729 586.359 21.7694 596.687 31.8947C607.015 42.0201 615.014 53.8667 620.684 67.4346C626.557 81.0025 629.493 95.6842 629.493 111.48C629.493 127.275 626.557 141.957 620.684 155.525C615.014 169.093 607.015 181.041 596.687 191.368C586.359 201.494 574.209 209.392 560.236 215.062C546.465 220.529 531.379 223.263 514.976 223.263ZM514.368 174.662C526.518 174.662 537.049 172.029 545.959 166.764C554.869 161.499 561.754 154.107 566.615 144.59C571.475 135.072 573.905 123.934 573.905 111.176C573.905 101.861 572.487 93.3554 569.652 85.6602C567.02 77.9649 563.071 71.3835 557.806 65.9158C552.54 60.2456 546.263 55.8917 538.973 52.8541C531.682 49.8166 523.481 48.2978 514.368 48.2978C502.218 48.2978 491.687 50.9303 482.777 56.1955C473.867 61.2582 466.982 68.5484 462.121 78.0662C457.261 87.584 454.831 98.6206 454.831 111.176C454.831 120.896 456.147 129.705 458.78 137.603C461.615 145.298 465.665 151.981 470.93 157.651C476.196 163.119 482.473 167.371 489.763 170.409C497.054 173.244 505.255 174.662 514.368 174.662Z" fill="url(#spotlightGradient)"/>
          </svg>
        </div>
      </div>

      {/* Scrollable Content Container */}
      <div 
        className="relative z-10 w-full"
        style={{
          padding: 'var(--section-margin-y) var(--section-margin-x)',
        }}
      >
        {/* Title */}
        <h2
          className="w-full text-center mb-[var(--space-xxl)]"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, var(--h2-size))',
            fontFamily: 'var(--font-primary)',
            lineHeight: 'var(--h2-line)',
            background: 'linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-700) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          OUR SERVICES
        </h2>

        {/* Service Cards Grid - Zig-zag layout */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            {services.map((service, index) => {
              // Zig-zag pattern: odd indices (0, 2, 4, 6) go left, even indices (1, 3, 5, 7) go right
              const isLeft = index % 2 === 0;
              const gridRow = index + 1; // Row number (1-based for CSS Grid)
              
              return (
                <div
                  key={service.number}
                  className={isLeft ? "md:col-start-1" : "md:col-start-2"}
                  style={{
                    gridRow: `${gridRow} / span 1`
                  }}
                >
                  <OurServicesCard
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    services={service.servicesList}
                    href={service.href}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore More Button */}
        <div className="w-full flex justify-center" style={{ marginTop: 'var(--space-xxl)' }}>
          <button
            className="transition-all duration-300 hover:bg-[#F7F7F8] hover:text-[#0C0C0E]"
            style={{
              display: 'flex',
              padding: 'var(--space-sm, 20px) var(--space-xxl, 64px)',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-xxs, 8px)',
              border: '1px solid var(--spotlight-50, #F7F7F8)',
              color: 'var(--spotlight-50, #F7F7F8)',
              textAlign: 'justify',
              fontFamily: 'var(--font-secondary, Outfit)',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '150%',
              textTransform: 'uppercase',
              background: 'transparent',
            }}
          >
            <span>•</span>
            <span>EXPLORE MORE</span>
            <span>→</span>
          </button>
        </div>
      </div>

    </section>
  );
}