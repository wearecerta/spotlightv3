"use client";
import Image from "next/image";

export default function Culture() {
  return (
    <main
      className="-mt-16 md:-mt-24 lg:-mt-26 overflow-hidden z-0"
      style={{
        minHeight: '100vh',
        background: '#0C0C0E',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Culture Images Collage */}
      <section
        style={{
          display: 'flex',
          minHeight: '100vh',
          padding: '20px var(--section-margin-x, 120px) var(--section-margin-y, 120px)',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-xxl, 64px)',
          position: 'relative',
        }}
      >
        {/* Left Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-lg, 32px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Culture 1 */}
          <div
            style={{
              display: 'flex',
              width: '433.795px',
              height: '325.875px',
              transform: 'rotate(-15deg)',
              padding: '8px',
              alignItems: 'flex-start',
              gap: '8px',
              aspectRatio: '433.79/325.88',
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/Culture/culture-1.png"
              alt="Culture 1"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>

          {/* Culture 2 */}
          <div
            style={{
              display: 'flex',
              width: '433.795px',
              height: '325.875px',
              transform: 'rotate(-5deg)',
              padding: '8px',
              alignItems: 'flex-start',
              gap: '8px',
              aspectRatio: '433.79/325.88',
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/Culture/culture-2.png"
              alt="Culture 2"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>

          {/* Culture 3 */}
          <div
            style={{
              display: 'flex',
              width: '441.296px',
              height: '331.51px',
              transform: 'rotate(-15deg)',
              padding: '8px',
              alignItems: 'flex-start',
              gap: '8px',
              aspectRatio: '441.30/331.51',
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/Culture/culture-3.png"
              alt="Culture 3"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>
        </div>

        {/* Middle Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            width: '100%',
            maxWidth: 'none',
            zIndex: 10,
          }}
        >
          {/* Heading Text */}
          <h1
            style={{
              color: '#FFF',
              fontFamily: 'var(--Typograpghy-Heading-H1-font-family, "Bebas Neue")',
              fontSize: 'var(--Typograpghy-Heading-H1-font-Size, 192px)',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              textTransform: 'uppercase',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 10,
            }}
          >
            OUR CULTURE
          </h1>

          {/* Middle Text */}
          <p
            style={{
              color: '#FFF',
              fontFamily: 'var(--font-secondary, Outfit)',
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '150%',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 10,
            }}
          >
            This is No Ordinary Workplace, It's
          </p>

          {/* Foreground Text with Bullet */}
          <div
            style={{
              display: 'flex',
              padding: 'var(--space-xl, 48px) var(--space-xxl, 64px)',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-md, 24px)',
              background: '#F7F7F8',
              borderRadius: '64px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Bullet Point */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#0C0C0E',
                flexShrink: 0,
              }}
            />
            
            {/* Text */}
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontWeight: '400',
                lineHeight: '100%',
                color: '#0C0C0E',
                textTransform: 'capitalize',
              }}
            >
              A Creative Playground
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-lg, 32px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Culture 4 */}
          <div
            style={{
              display: 'flex',
              width: '433.795px',
              height: '325.875px',
              transform: 'rotate(15deg)',
              padding: '8px',
              alignItems: 'flex-start',
              gap: '8px',
              aspectRatio: '433.79/325.88',
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/Culture/culture-4.png"
              alt="Culture 4"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>

          {/* Culture 5 */}
          <div
            style={{
              display: 'flex',
              width: '433.795px',
              height: '325.875px',
              transform: 'rotate(5deg)',
              padding: '8px',
              alignItems: 'flex-start',
              gap: '8px',
              aspectRatio: '433.79/325.88',
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/Culture/culture-5.jpg"
              alt="Culture 5"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>

          {/* Culture 6 */}
          <div
            style={{
              display: 'flex',
              width: '433.795px',
              height: '325.875px',
              transform: 'rotate(15deg)',
              padding: '8px',
              alignItems: 'flex-start',
              gap: '8px',
              aspectRatio: '433.79/325.88',
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Image
              src="/Culture/culture-6.png"
              alt="Culture 6"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}