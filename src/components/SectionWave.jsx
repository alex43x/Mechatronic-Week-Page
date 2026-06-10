export default function SectionWave({ flip = false, from = 'var(--dark)', to = 'var(--light)' }) {
  return (
    <div
      className={`section-wave${flip ? ' section-wave--flip' : ''}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`waveGrad-${flip ? 'flip' : 'normal'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="var(--amber)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,30 1440,50 L1440,100 L0,100 Z"
          fill={to}
        />
        <path
          d="M0,60 C240,20 480,90 720,40 C960,0 1200,70 1440,30 L1440,100 L0,100 Z"
          fill={to}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
