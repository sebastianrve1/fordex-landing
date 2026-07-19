/**
 * Vector-exact reproduction of the FORDEX brand mark, traced from the
 * official LOGOTIPO.svg (brand manual). Isotipo = the two-plane "F";
 * Wordmark = the outlined "FORDEX" letterforms. Both share the source
 * file's native coordinate space so proportions and spacing match the
 * manual exactly.
 */

const GRADIENT_ID = "fordexBrandGradient";

function BrandGradientDef() {
  return (
    <defs>
      <linearGradient id={GRADIENT_ID} x1="116" y1="253" x2="410" y2="546" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
  );
}

function fillFor(variant: "gradient" | "white" | "mono") {
  if (variant === "gradient") return `url(#${GRADIENT_ID})`;
  if (variant === "white") return "#FFFFFF";
  return "#94A3B8";
}

export function Isotipo({
  className = "",
  variant = "gradient",
}: {
  className?: string;
  variant?: "gradient" | "white" | "mono";
}) {
  const fill = fillFor(variant);
  return (
    <svg
      viewBox="116.61 253.639 293.512 292.722"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "gradient" && <BrandGradientDef />}
      <polyline
        fill={fill}
        points="194.205,546.361 246.703,447.973 306.43,447.973 348.049,369.973 210.729,369.973 116.61,546.361 194.205,546.361"
      />
      <polyline
        fill={fill}
        points="116.61,331.639 368.503,331.639 410.122,253.639 158.189,253.639 116.61,331.639"
      />
    </svg>
  );
}

export function Wordmark({
  className = "",
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "mono";
}) {
  const fill = fillFor(variant);
  return (
    <svg
      viewBox="435.313 349.528 728.077 113"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* F */}
      <polygon
        fill={fill}
        points="505.438,398.028 451.313,398.028 451.313,365.528 512.313,365.528 512.313,349.528 435.313,349.528 435.313,462.528 451.938,462.528 451.938,414.028 505.438,414.028"
      />
      {/* O */}
      <path
        fill={fill}
        d="M616.896,349.528h-40c-13.808,0-25,11.193-25,25v63c0,13.807,11.192,25,25,25h40c13.807,0,25-11.193,25-25v-63C641.896,360.722,630.703,349.528,616.896,349.528z M625.896,436.528c0,5.523-4.478,10-10,10h-38c-5.523,0-10-4.477-10-10v-61c0-5.522,4.477-10,10-10h38c5.522,0,10,4.478,10,10V436.528z"
      />
      {/* R */}
      <path
        fill={fill}
        d="M751.532,416.136c10.419-3.016,18.04-12.62,18.04-24.011v-12.874v-4.723c0-13.807-11.193-25-25-25h-40h-19.334v9.152v20.57v28.723v9.151v36.252v9.151h16v-45.403h3.334h29.888l18.946,42.562l1.266,2.842h17.514L751.532,416.136z M743.572,401.132h-23.751h-14.249h-4.334V385.89v-5.119v-15.242h4.334h14.249h23.751c5.522,0,10,4.478,10,10v5.242v5.119v5.242C753.572,396.654,749.095,401.132,743.572,401.132z"
      />
      {/* D */}
      <path
        fill={fill}
        d="M878.229,349.528h-40h-25v25v62.999v25h25h40c13.807,0,25-11.193,25-25v-62.999C903.229,360.722,892.035,349.528,878.229,349.528z M887.229,436.527c0,5.523-4.478,10-10,10h-38h-10v-10v-60.999v-10h10h38c5.522,0,10,4.478,10,10V436.527z"
      />
      {/* E */}
      <polygon
        fill={fill}
        points="1023.813,462.528 1023.813,446.528 963.438,446.528 963.438,414.028 1016.938,414.028 1016.938,398.028 962.813,398.028 962.813,365.528 1023.813,365.528 1023.813,349.528 946.813,349.528 946.813,446.528 946.813,462.528 963.438,462.528"
      />
      {/* X */}
      <polygon
        fill={fill}
        points="1141.594,349.528 1110.688,391.299 1079.781,349.528 1059.878,349.528 1100.735,404.75 1057.985,462.528 1077.89,462.528 1110.688,418.2 1143.485,462.528 1163.39,462.528 1120.64,404.75 1161.497,349.528"
      />
    </svg>
  );
}

/** Full lockup: isotipo + wordmark, exactly as laid out in the brand manual. */
export function Logo({
  className = "",
  tone = "accent",
}: {
  className?: string;
  tone?: "accent" | "white" | "mono";
}) {
  const iconVariant = tone === "accent" ? "gradient" : tone;
  const textVariant = tone === "mono" ? "mono" : "white";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Isotipo variant={iconVariant} className="h-6 w-6 sm:h-7 sm:w-7" />
      <Wordmark variant={textVariant} className="h-3 sm:h-3.5" />
    </div>
  );
}
