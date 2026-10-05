export function SavannaBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_31%,rgba(245,183,59,.38),transparent_20%),radial-gradient(circle_at_22%_80%,rgba(20,151,132,.16),transparent_25%),linear-gradient(145deg,#17110f_0%,#241714_42%,#10100f_100%)]" />
      <div className="absolute -right-24 top-16 size-[32rem] rounded-full border border-[#f5b73b]/15" />
      <div className="absolute -right-4 top-36 size-[22rem] rounded-full border border-[#e94235]/18" />
      <svg
        viewBox="0 0 1600 720"
        className="absolute bottom-0 left-1/2 h-[72%] min-w-[1100px] -translate-x-1/2 text-black/65"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          fill="currentColor"
          d="M0 563c119-37 239-42 361-14 95 22 202 21 320-4 156-33 310-22 459 33 152 56 306 50 460-18v160H0V563Z"
        />
        <path
          fill="currentColor"
          d="M1110 566c1-44 13-81 36-112 9-12 19-25 31-38l-8 68 32-84 7 75 25-55 3 94c23 14 41 33 54 57H1110v-5Zm-760 29c10-52 37-94 82-126 1-46 9-86 24-121 9 44 12 83 9 117 23-27 50-47 82-60-18 27-38 51-60 71 40-13 76-16 108-10-40 15-76 34-108 58-12 26-18 53-18 81H350v-10Z"
        />
        <circle cx="1170" cy="170" r="86" fill="#f5b73b" opacity=".84" />
        <path
          fill="currentColor"
          d="M700 562c-1-37 5-69 19-97l17-28 17 28c14 28 20 60 19 97h-72Zm15-95-17-73 28 56 10-111 13 112 29-57-18 73h-45Z"
        />
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,15,.88)_0%,rgba(17,16,15,.62)_52%,rgba(17,16,15,.18)_100%)]" />
      <div className="grain absolute inset-0 opacity-25" />
    </div>
  );
}
