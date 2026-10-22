import SplashCursor from "../components/reactbits/SplashCursor/SplashCursor";

const EFFECTS = [
  {
    id: "fumaca",
    name: "SplashCursor",
    Component: SplashCursor,
    layer: "frente",
    props: {
      COLOR: "#cbd5e1",
      RAINBOW_MODE: false,
      DENSITY_DISSIPATION: 2.5,
      VELOCITY_DISSIPATION: 2.5,
      PRESSURE: 0.15,
      CURL: 0,
      SPLAT_RADIUS: 0.2,
      SPLAT_FORCE: 5000,
      SHADING: true,
    },
  },
];

export default EFFECTS;
