"use client";

import Image from "next/image";
import CultureCard from "../../components/ui/CultureCard";

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
          {/* Heading Text - OUR CULTURE */}
          <h1
            style={{
              color: '#FFF',
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontSize: 'var(--h1-size, 192px)',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}
          >
            OUR CULTURE
          </h1>

          {/* Middle Text - This is No Ordinary Workplace, It's */}
          <p
            style={{
              color: '#FFF',
              fontFamily: 'var(--font-secondary, "Outfit")',
              fontSize: 'clamp(20px, 2.5vw, 32px)',
              fontStyle: 'normal',
              fontWeight: '300',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}
          >
            This is No Ordinary Workplace, It's
          </p>

          {/* Foreground Text with Bullet - A Creative Playground */}
          <div
            style={{
              display: 'flex',
              padding: 'var(--space-lg, 32px) var(--space-xxl, 64px)',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-md, 24px)',
              background: '#FFFFFF',
              borderRadius: '12px',
              position: 'relative',
            }}
          >
            {/* Bullet Point */}
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#0C0C0E',
                flexShrink: 0,
              }}
            />
            
            {/* Text */}
            <h2
              style={{
                fontSize: 'var(--h3-size, 56px)',
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#0C0C0E',
                textTransform: 'capitalize',
                margin: 0,
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
            flexShrink: 0,
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

      {/* Culture Cards Section */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          flexDirection: 'column',
          gap: 'var(--space-lg, 24px)',
          alignSelf: 'stretch',
          background: '#0C0C0E',
          position: 'relative',
        }}
      >
        {/* Card 1 - Creative */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            We don't follow trends- we forecast them
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c1.png"
              label="Creative"
              rotation={-6.24}
              width={383}
              height={450}
              labelPosition="right"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            We move at the speed of culture.
          </p>
        </div>

        {/* Card 2 - Playful */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            If it's never been done, that's our starting point.
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c2.png"
              label="Playful"
              rotation={-17.31}
              width={383}
              height={450}
              labelPosition="left"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            We don't just make things- we make statements.
          </p>
        </div>

        {/* Card 3 - Vibrant */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            Innovation flows through every project we touch.
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c3.png"
              label="Vibrant"
              rotation={12.01}
              width={383}
              height={450}
              labelPosition="right"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            Creativity knows no boundaries here.
          </p>
        </div>

        {/* Card 4 - Bold */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            Bold ideas deserve bold execution.
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c4.png"
              label="Bold"
              rotation={-8.09}
              width={383}
              height={450}
              labelPosition="left"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            Every story we tell leaves a lasting impact.
          </p>
        </div>
      </section>

      {/* Culture Cards Section - Duplicate */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          flexDirection: 'column',
          gap: 'var(--space-lg, 32px)',
          alignSelf: 'stretch',
          background: '#0C0C0E',
          position: 'relative',
        }}
      >
        {/* Card 1 - Creative */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            We don't follow trends- we forecast them
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c1.png"
              label="Creative"
              rotation={-6.24}
              width={383}
              height={450}
              labelPosition="right"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            We move at the speed of culture.
          </p>
        </div>

        {/* Card 2 - Playful */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            If it's never been done, that's our starting point.
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c2.png"
              label="Playful"
              rotation={-17.31}
              width={383}
              height={450}
              labelPosition="left"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            We don't just make things- we make statements.
          </p>
        </div>

        {/* Card 3 - Vibrant */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            Innovation flows through every project we touch.
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c3.png"
              label="Vibrant"
              rotation={12.01}
              width={383}
              height={450}
              labelPosition="right"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            Creativity knows no boundaries here.
          </p>
        </div>

        {/* Card 4 - Bold */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-xxl, 64px)',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Left Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(15deg)',
              maxWidth: '300px',
              textAlign: 'left',
              flexShrink: 0,
            }}
          >
            Bold ideas deserve bold execution.
          </p>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <CultureCard
              imageSrc="/Culture/c4.png"
              label="Bold"
              rotation={-8.09}
              width={383}
              height={450}
              labelPosition="left"
            />
          </div>

          {/* Right Text */}
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '1px',
              transform: 'rotate(-15deg)',
              maxWidth: '300px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            Every story we tell leaves a lasting impact.
          </p>
        </div>
      </section>
    </main>
  );
}