import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, e as renderSlot, f as createAstro, F as Fragment$1, g as renderScript, h as renderHead } from '../chunks/astro/server_CQuuhllk.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import createGlobe from 'cobe';
import { useRef, useEffect, useState, useId, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_CilPEH96.mjs';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Earth = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 4e4,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898]
}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let width = 0;
    const onResize = () => (
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      canvasRef.current && (width = canvasRef.current.offsetWidth)
    );
    window.addEventListener("resize", onResize);
    onResize();
    let phi = 0;
    onResize();
    const canvas = canvasRef.current;
    let globe;
    if (canvas) {
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta,
        dark,
        scale,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [
          // longitude latitude
        ],
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        onRender: (state) => {
          state.phi = phi;
          phi += 3e-3;
        }
      });
    }
    return () => {
      globe?.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center justify-center z-[10] w-full max-w-[350px] mx-auto", className), children: /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      style: {
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: "1"
      }
    }
  ) });
};

function Sparkles({
  className,
  size = 1.2,
  minSize = null,
  density = 800,
  speed = 1.5,
  minSpeed = null,
  opacity = 1,
  direction = "",
  opacitySpeed = 3,
  minOpacity = null,
  color = "#ffffff",
  mousemove = false,
  hover = false,
  background = "transparent",
  options = {}
}) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);
  const id = useId();
  const defaultOptions = {
    background: {
      color: {
        value: background
      }
    },
    fullScreen: {
      enable: false,
      zIndex: 1
    },
    fpsLimit: 300,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: hover,
          mode: "grab",
          parallax: {
            enable: mousemove,
            force: 60,
            smooth: 10
          }
        },
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: color
      },
      move: {
        enable: true,
        direction,
        speed: {
          min: minSpeed || speed / 130,
          max: speed
        },
        straight: true
      },
      collisions: {
        absorb: {
          speed: 2
        },
        bounce: {
          horizontal: {
            value: 1
          },
          vertical: {
            value: 1
          }
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0
        }
      },
      number: {
        value: density
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed
        }
      },
      size: {
        value: {
          min: minSize || size / 1.5,
          max: size
        }
      }
    },
    detectRetina: true
  };
  return isReady && /* @__PURE__ */ jsx(Particles, { id, options: defaultOptions, className });
}

const COLORS = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0"
};
const svgOrder = ["svg1", "svg2", "svg3", "svg4", "svg3", "svg2", "svg1"];
const createStopsArray = (svgStates, svgOrder2, maxStops) => {
  const stopsArray = [];
  for (let i = 0; i < maxStops; i++) {
    const stopConfigurations = svgOrder2.map((svgKey) => {
      const svg = svgStates[svgKey];
      return svg.stops[i] || svg.stops[svg.stops.length - 1];
    });
    stopsArray.push(stopConfigurations);
  }
  return stopsArray;
};
const GradientSvg = ({ className, isHovered, colors }) => {
  const svgStates = {
    svg1: {
      gradientTransform: "translate(287.5 280) rotate(-29.0546) scale(689.807 1000)",
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.188423, stopColor: colors.color2 },
        { offset: 0.260417, stopColor: colors.color3 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.328992, stopColor: colors.color1 },
        { offset: 0.442708, stopColor: colors.color6 },
        { offset: 0.537556, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.725645, stopColor: colors.color8 },
        { offset: 0.817779, stopColor: colors.color9 },
        { offset: 0.84375, stopColor: colors.color10 },
        { offset: 0.90569, stopColor: colors.color1 },
        { offset: 1, stopColor: colors.color11 }
      ]
    },
    svg2: {
      gradientTransform: "translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)",
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.104167, stopColor: colors.color12 },
        { offset: 0.182292, stopColor: colors.color13 },
        { offset: 0.28125, stopColor: colors.color1 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.453125, stopColor: colors.color6 },
        { offset: 0.515625, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.692708, stopColor: colors.color8 },
        { offset: 0.75, stopColor: colors.color14 },
        { offset: 0.817708, stopColor: colors.color9 },
        { offset: 0.869792, stopColor: colors.color10 },
        { offset: 1, stopColor: colors.color1 }
      ]
    },
    svg3: {
      gradientTransform: "translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)",
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.188423, stopColor: colors.color2 },
        { offset: 0.307292, stopColor: colors.color1 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.442708, stopColor: colors.color15 },
        { offset: 0.537556, stopColor: colors.color16 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.725645, stopColor: colors.color17 },
        { offset: 0.817779, stopColor: colors.color9 },
        { offset: 0.84375, stopColor: colors.color10 },
        { offset: 0.90569, stopColor: colors.color1 },
        { offset: 1, stopColor: colors.color11 }
      ]
    },
    svg4: {
      gradientTransform: "translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)",
      stops: [
        { offset: 0.109375, stopColor: colors.color11 },
        { offset: 0.171875, stopColor: colors.color2 },
        { offset: 0.260417, stopColor: colors.color13 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.328992, stopColor: colors.color1 },
        { offset: 0.442708, stopColor: colors.color6 },
        { offset: 0.515625, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.692708, stopColor: colors.color8 },
        { offset: 0.817708, stopColor: colors.color9 },
        { offset: 0.869792, stopColor: colors.color10 },
        { offset: 1, stopColor: colors.color11 }
      ]
    }
  };
  const maxStops = Math.max(...Object.values(svgStates).map((svg) => svg.stops.length));
  const stopsAnimationArray = createStopsArray(svgStates, svgOrder, maxStops);
  const gradientTransform = svgOrder.map((svgKey) => svgStates[svgKey].gradientTransform);
  const variants = {
    hovered: {
      gradientTransform,
      transition: { duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
    },
    notHovered: {
      gradientTransform,
      transition: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
    }
  };
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className,
        width: "1030",
        height: "280",
        viewBox: "0 0 1030 280",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsx("rect", { width: "1030", height: "280", rx: "140", fill: "url(#paint0_radial_905_231)" }),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
            motion.radialGradient,
            {
              id: "paint0_radial_905_231",
              cx: "0",
              cy: "0",
              r: "1",
              gradientUnits: "userSpaceOnUse",
              animate: isHovered ? variants.hovered : variants.notHovered,
              children: stopsAnimationArray.map((stopConfigs, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
                  motion.stop,
                  {
                    initial: {
                      offset: stopConfigs[0].offset,
                      stopColor: stopConfigs[0].stopColor
                    },
                    animate: {
                      offset: stopConfigs.map((config) => config.offset),
                      stopColor: stopConfigs.map((config) => config.stopColor)
                    },
                    transition: {
                      duration: 0,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY
                    }
                  }
                ) }, index)
              ))
            }
          ) })
        ]
      }
    )
  );
};
const Liquid = ({ isHovered, colors }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: 7 }).map((_, index) => /* @__PURE__ */ jsx(
    "div",
    {
      className: `absolute ${index < 3 ? "w-[443px] h-[121px]" : "w-[756px] h-[207px]"} ${index === 0 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference" : index === 1 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[164.971deg] mix-blend-difference" : index === 2 ? "top-1/2 left-1/2 -translate-x-[53%] -translate-y-[53%] rotate-[-11.61deg] mix-blend-difference" : index === 3 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] rotate-[-179.012deg] mix-blend-difference" : index === 4 ? "top-1/2 left-1/2 -translate-x-[57%] -translate-y-1/2 rotate-[-29.722deg] mix-blend-difference" : index === 5 ? "top-1/2 left-1/2 -translate-x-[62%] -translate-y-[24%] rotate-[160.227deg] mix-blend-difference" : "top-1/2 left-1/2 -translate-x-[67%] -translate-y-[29%] rotate-180 mix-blend-hard-light"}`,
      children: /* @__PURE__ */ jsx(GradientSvg, { className: "w-full h-full", isHovered, colors })
    },
    index
  )) });
};
const GitHubButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://github.com/Frikadellios",
      target: "_blank",
      className: "relative inline-block  w-36 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg",
      rel: "noreferrer",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-full h-full overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(Liquid, { isHovered, colors: COLORS }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full overflow-hidden rounded-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-lg bg-[#d9d9d9]" }),
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-lg bg-black" }),
          /* @__PURE__ */ jsx(Liquid, { isHovered, colors: COLORS }),
          [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"}`
            },
            i
          )),
          /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]" }),
          /* @__PURE__ */ jsxs("span", { className: "absolute flex  items-center justify-between px-4 gap-2  top-[7%] left-[5%] w-[90%] h-[85%] rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap", children: [
            /* @__PURE__ */ jsx(Star, { className: "group-hover:fill-yellow-400 fill-white w-6 h-6 flex-shrink-0" }),
            "Github"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute inset-0 rounded-lg bg-transparent cursor-pointer",
            "aria-label": "Get Started",
            type: "button",
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false)
          }
        )
      ]
    }
  ) });
};

const $$SparklesGlobe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-screen overflow-hidden bg-background text-foreground"> <article class="grid gap-4 text-center relative z-10 pt-10"> <span class="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-foreground bg-brandColor-500"> ${renderComponent($$result, "GitHubButton", GitHubButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/devopsick/GitHub/future/src/components/ui/github-button", "client:component-export": "default" })} </span> <h1 class="text-4xl  font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
Open World with Noname !
<br>
Exist Fluent Emplementation - Life Without Borders
</h1> <div class="float"> ${renderComponent($$result, "Earth", Earth, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/globe", "client:component-export": "default" })} </div> </article> <div class="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#fd356e,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%]  after:bg-muted-background "> ${renderComponent($$result, "Sparkles", Sparkles, { "density": 800, "speed": 1.2, "size": 1.2, "direction": "top", "opacitySpeed": 2, "color": "#fd356e", "className": "absolute inset-x-0 bottom-0 h-full w-full md:block", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sparkles", "client:component-export": "Sparkles" })} </div> </div>`;
}, "/home/devopsick/GitHub/future/src/components/SparklesGlobe.astro", void 0);

const $$TrustedByExperts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-screen w-screen overflow-hidden bg-trancperent"> <div class="mx-auto mt-32 w-screen max-w-2xl"> <div class="text-center text-3xl text-foreground"> <span class="text-foreground">Trusted by experts, and me...</span> <br> <span>Used by the leaders, and this guys..</span> </div> <div class="mt-14 grid grid-cols-4"> <svg viewBox="0 0 180 56" fill="currentColor" class="w-full"> <path d="M34 18.2a2.2 2.2 0 012.2-2.2h8.6a2.2 2.2 0 012.2 2.2v1.7a1.1 1.1 0 01-1.1 1.1H35.1a1.1 1.1 0 01-1.1-1.1v-1.7zM34 25.1a1.1 1.1 0 011.1-1.1h20.7a2.2 2.2 0 012.2 2.2v5.7a1.1 1.1 0 01-1.1 1.1H36.2a2.2 2.2 0 01-2.2-2.2v-5.7zM45 37.1a1.1 1.1 0 011.1-1.1h10.8a1.1 1.1 0 011.1 1.1v.7a2.2 2.2 0 01-2.2 2.2h-8.6a2.2 2.2 0 01-2.2-2.2v-.7zM71.596 30.741h2.311l4.293 7.017h5.256l-4.76-7.512c2.641-.909 4.182-2.945 4.182-5.89 0-4.127-2.89-6.356-7.54-6.356H67v19.758h4.596v-7.017zm0-3.742V21.88h3.494c2.174 0 3.275.936 3.275 2.56 0 1.595-1.1 2.558-3.275 2.558h-3.494zM91.363 38.06c2.89 0 5.531-1.458 6.605-4.237L94.28 32.64c-.413 1.266-1.486 1.926-2.862 1.926-1.678 0-2.862-1.128-3.164-3.11h9.824v-1.155c0-4.1-2.395-7.348-6.797-7.348-4.183 0-7.265 3.247-7.265 7.54 0 4.513 2.972 7.568 7.347 7.568zm-.138-11.694c1.624 0 2.477 1.1 2.505 2.394H88.39c.44-1.596 1.486-2.394 2.834-2.394zM100.573 33.878c0 2.972 1.569 4.018 4.706 4.018 1.046 0 1.871-.083 2.642-.193v-3.605c-.496.055-.743.083-1.266.083-1.101 0-1.734-.22-1.734-1.431v-5.862h2.834v-3.632h-2.834v-4.018h-4.348v4.018h-1.844v3.632h1.844v6.99zM123.672 30.52c0-4.512-3-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.265 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962s2.89 1.431 2.89 3.963-1.129 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM139.527 30.52c0-4.512-2.999-7.567-7.265-7.567-4.293 0-7.265 3.055-7.265 7.568s2.972 7.54 7.265 7.54c4.266 0 7.265-3.027 7.265-7.54zm-10.154 0c0-2.53 1.128-3.962 2.889-3.962 1.762 0 2.89 1.431 2.89 3.963s-1.128 3.962-2.89 3.962c-1.761 0-2.889-1.43-2.889-3.962zM146 18h-4.403v19.758H146V18z" fill="#fff"></path> </svg> <svg viewBox="0 0 180 54" fill="currentColor" class="w-full"> <path d="M89.515 20.5c-4.424 0-7.614 2.925-7.614 7.313 0 4.387 3.59 7.312 8.014 7.312 2.673 0 5.03-1.072 6.488-2.88l-3.066-1.796c-.81.898-2.04 1.422-3.422 1.422-1.919 0-3.55-1.016-4.155-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.19-7.308-7.613-7.308zm-3.791 5.89c.5-1.62 1.871-2.64 3.787-2.64 1.919 0 3.29 1.02 3.786 2.64h-7.573zm46.938-5.89c-4.424 0-7.613 2.925-7.613 7.313 0 4.387 3.59 7.312 8.014 7.312 2.672 0 5.028-1.072 6.487-2.88l-3.065-1.796c-.81.898-2.04 1.422-3.422 1.422-1.92 0-3.551-1.016-4.156-2.64h11.228c.088-.456.14-.927.14-1.423 0-4.383-3.189-7.308-7.613-7.308zm-3.787 5.89c.501-1.62 1.872-2.64 3.787-2.64 1.919 0 3.29 1.02 3.787 2.64h-7.574zm-15.639 1.422c0 2.438 1.571 4.063 4.007 4.063 1.651 0 2.889-.76 3.526-1.999l3.078 1.8c-1.275 2.153-3.663 3.449-6.604 3.449-4.428 0-7.613-2.925-7.613-7.313 0-4.387 3.189-7.312 7.613-7.312 2.941 0 5.325 1.296 6.604 3.45l-3.078 1.799c-.637-1.24-1.875-1.999-3.526-1.999-2.432 0-4.007 1.625-4.007 4.063zm33.05-11.78v18.687h-3.607V16.03h3.607zM47.806 14l14.806 26H33l14.806-26zm37.016 2.031l-11.103 19.5-11.103-19.5h4.163l6.94 12.188 6.94-12.188h4.163zm23.606 4.875v3.937a4.517 4.517 0 00-1.283-.2c-2.328 0-4.007 1.626-4.007 4.063v6.013h-3.606V20.906h3.606v3.738c0-2.064 2.369-3.738 5.29-3.738z" fill="#fff"></path> </svg> <svg viewBox="0 0 180 56" fill="currentColor" class="w-full"> <path d="M133.969 31.642a.918.918 0 00-.673.287c-.909.938-2.098 1.51-3.483 1.51a4.803 4.803 0 01-2.232-.546c-1.814-.947-2.987-3.015-2.661-5.319.356-2.529 2.567-4.411 5.045-4.338 1.322.04 2.457.604 3.334 1.509a.914.914 0 00.672.286c.554 0 1.029-.49 1.029-1.02 0-.247-.078-.53-.278-.735a6.742 6.742 0 00-4.277-2.055c-3.913-.348-7.435 2.84-7.557 6.886-.122 4.066 3.01 7.374 6.925 7.374 1.94 0 3.642-.777 4.909-2.081.198-.204.278-.49.278-.734-.002-.533-.478-1.023-1.031-1.023zM116.535 29.095c1.283-.735 2.135-2.1 2.094-3.77-.055-2.325-1.995-4.135-4.25-4.135h-6.239c-.546 0-.989.457-.989 1.02v11.883c0 .519.358.995.856 1.052.616.07 1.123-.356 1.123-.974V31.58c0-.2.131-.372.317-.42l3.506-.895 1.447-.38a.415.415 0 01.484.238l1.959 4.44c.16.365.507.58.872.58a.96.96 0 00.632-.244c.33-.288.399-.788.22-1.193l-2.032-4.61zm-7.405-.42v-5.093c0-.24.188-.431.418-.431h4.767c1.384 0 2.335.98 2.335 2.288 0 1.307-.779 2.251-2.37 2.602l-4.643 1.056a.421.421 0 01-.507-.422zM96.89 21.967c-.21-.455-.655-.727-1.192-.727-.537 0-.983.272-1.192.725l-5.462 11.742c-.071.145-.11.325-.11.488 0 .557.422.976.985.976a.944.944 0 00.895-.57l1.017-2.172a8.97 8.97 0 001.403.386c.792.151 1.59.203 2.377.194.79-.007 1.568-.104 2.335-.235.383-.066.76-.163 1.141-.243l.466-.133 1.024 2.188a.956.956 0 00.903.587c.638 0 .982-.502.982-.975 0-.166-.041-.344-.105-.481l-5.467-11.75zm.757 9.04c-.686.117-1.38.205-2.066.21-.687.006-1.37-.036-2.03-.164a7.106 7.106 0 01-.962-.251l.82-1.755h-.003l1.913-4.085a.413.413 0 01.753 0l1.761 3.76.088.188.064.137.797 1.707-.11.031c-.34.074-.68.164-1.025.223zM77.035 23.307c.212-1.058.044-2.13-.468-3.019-.592-1.023-1.538-1.714-2.668-1.946a3.901 3.901 0 00-.808-.08c-1.92 0-3.536 1.387-3.931 3.371a9.394 9.394 0 01-1.183 3.015.11.11 0 01-.1.054.113.113 0 01-.1-.069l-3.765-8.17c-.521-1.129-1.449-1.967-2.546-2.298-1.876-.569-3.922.376-4.762 2.197l-3.897 8.449a.048.048 0 01-.043.028c-.028 0-.033-.016-.037-.028-.618-1.575-2.08-2.593-3.729-2.593-.533 0-1.054.109-1.55.322-.992.426-1.756 1.24-2.158 2.292a4.375 4.375 0 00.032 3.214c.737 1.818 1.97 3.573 3.566 5.074.039.036.05.09.027.138l-1.258 2.732c-.95 2.063-.151 4.556 1.78 5.56a3.9 3.9 0 001.813.448c1.543 0 2.97-.929 3.633-2.366l1.086-2.356a.112.112 0 01.135-.062 14.83 14.83 0 004.025.578c1.458 0 2.942-.223 4.404-.66a.111.111 0 01.136.061l1.074 2.333c.69 1.494 2.124 2.464 3.66 2.474h.023a3.87 3.87 0 001.812-.447c1.93-1.005 2.728-3.505 1.772-5.575l-1.357-2.934a.12.12 0 01.028-.137c2.742-2.617 4.643-6.026 5.354-9.6zM54.201 36.69l-.98 2.126a2.19 2.19 0 01-1.975 1.286c-.338 0-.664-.078-.97-.234-1.06-.543-1.492-1.916-.964-3.065l1.045-2.268a.122.122 0 01.108-.071c.018 0 .041.005.062.021a17.81 17.81 0 003.61 2.044c.04.016.06.05.066.068a.107.107 0 01-.002.093zm9.565-1.345a.108.108 0 01-.07.061c-1.19.325-2.391.49-3.571.49-5.465 0-11.24-3.817-13.15-8.688-.45-1.15.09-2.465 1.206-2.931.261-.11.537-.166.817-.166.896 0 1.69.552 2.025 1.409 1.247 3.183 5.417 5.873 9.102 5.873.555 0 1.125-.055 1.694-.164.053-.01.106.014.127.064l1.82 3.947a.136.136 0 010 .105zm-4.468-6.183l.733-1.591a.273.273 0 01.252-.164.28.28 0 01.253.164l.716 1.553a.29.29 0 01-.007.26.27.27 0 01-.204.147 6.112 6.112 0 01-1.518.04.276.276 0 01-.213-.144.292.292 0 01-.012-.265zm11.09 10.706a2.108 2.108 0 01-.969.234 2.188 2.188 0 01-1.972-1.286l-6.578-14.27a.584.584 0 00-1.07 0l-2.04 4.426a.115.115 0 01-.137.064c-1.361-.483-2.638-1.295-3.596-2.282a.117.117 0 01-.018-.13l4.408-9.562c.148-.32.359-.578.609-.746.592-.4 1.265-.519 1.899-.337a2.199 2.199 0 011.382 1.201l9.047 19.626c.53 1.146.096 2.52-.965 3.062zm.526-8.807a.123.123 0 01-.106.036.11.11 0 01-.082-.067l-1.929-4.186a.12.12 0 01.014-.123c1.09-1.443 1.837-3.086 2.16-4.755.205-1.05 1.103-1.812 2.138-1.812h.002c.177 0 .356.024.533.069 1.144.293 1.84 1.506 1.584 2.76-.613 3.001-2.103 5.793-4.314 8.078z" fill="#fff"></path> </svg> <svg viewBox="0 0 180 56" fill="currentColor" class="w-full"> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.292 33.307v3.443L26 28.5l1.731-1.723 6.56 6.53zm3.46 3.443h-3.46L42.583 45l1.732-1.723-6.563-6.527zm19.68-6.527l1.73-1.723L42.58 12l-1.727 1.727 6.56 6.527h-3.964l-4.58-4.547-1.73 1.723 2.847 2.833h-1.99V33.07h12.871v-1.98l2.848 2.834 1.732-1.723-4.58-4.556V23.7l6.565 6.523zM35.155 19.396L33.42 21.12l1.858 1.848 1.731-1.723-1.853-1.848zm14.726 14.652l-1.73 1.723 1.856 1.848 1.732-1.723-1.858-1.848zM31.442 23.09l-1.732 1.723 4.58 4.556v-3.445l-2.848-2.834zm13.735 13.667h-3.46l4.579 4.556 1.731-1.723-2.85-2.833z" fill="#fff"></path> <path d="M151.74 36.73c-1.116 0-1.99-.301-2.613-.906-.624-.605-.936-1.446-.936-2.51v-6.6h-2.003v-2.471h2.014l.359-3.3h2.359v3.3H154v2.475h-3.08v6.237a1.3 1.3 0 00.356.92 1.22 1.22 0 00.94.38H154v2.475h-2.26zM139.691 36.963c-1.489 0-2.686-.353-3.593-1.06a4.739 4.739 0 01-1.74-2.816h2.961c.129.429.417.793.804 1.02a2.917 2.917 0 001.568.386c1.579 0 2.373-.44 2.373-1.29 0-.423-.249-.747-.745-.97a8.223 8.223 0 00-1.8-.534 22.253 22.253 0 01-2.125-.52 3.697 3.697 0 01-1.816-1.2c-.493-.587-.741-1.359-.743-2.315a3.264 3.264 0 011.252-2.616c.837-.695 1.998-1.042 3.483-1.04 1.484 0 2.663.33 3.537.99a4.415 4.415 0 011.679 2.666h-2.966c-.316-.781-1.061-1.18-2.242-1.181-1.267 0-1.899.393-1.899 1.18a1.016 1.016 0 00.533.88 3.55 3.55 0 001.327.472c.587.1 1.168.233 1.74.4.593.169 1.174.376 1.74.62a3.092 3.092 0 011.342 1.162 3.53 3.53 0 01.537 2 3.28 3.28 0 01-.333 1.517 3.307 3.307 0 01-.993 1.198c-.882.7-2.175 1.05-3.881 1.051zM130.862 25.257c-.912-.817-2.19-1.225-3.834-1.225-1.31 0-2.409.35-3.297 1.053a4.928 4.928 0 00-1.755 2.722h2.799c.142-.408.414-.76.774-1.001a2.488 2.488 0 011.481-.416c.77 0 1.376.198 1.82.59a2.081 2.081 0 01.663 1.645v.596h-3.206c-1.474 0-2.632.37-3.474 1.111a3.568 3.568 0 00-1.255 2.777 3.645 3.645 0 001.171 2.785c.779.733 1.811 1.1 3.096 1.1a4.748 4.748 0 002.291-.53 3.43 3.43 0 001.388-1.234h.115l.233 1.54h2.368v-8.14c-.005-1.429-.464-2.553-1.378-3.373zm-1.346 6.67a2.525 2.525 0 01-.83 1.98c-.549.486-1.3.73-2.251.73-.692 0-1.222-.158-1.587-.466a1.495 1.495 0 01-.553-1.19c0-1.1.723-1.646 2.14-1.646h3.081v.592zM114.473 36.99c-1.796 0-3.232-.574-4.307-1.72-1.074-1.148-1.612-2.735-1.614-4.762 0-2.022.536-3.608 1.608-4.756 1.071-1.148 2.509-1.722 4.313-1.72 1.466 0 2.68.388 3.644 1.166a5.532 5.532 0 011.92 2.954h-2.716a3.054 3.054 0 00-2.845-1.646 2.887 2.887 0 00-2.326 1.046c-.59.7-.885 1.685-.885 2.956 0 1.272.295 2.258.885 2.957a2.872 2.872 0 002.326 1.05 3.06 3.06 0 002.845-1.648h2.716a5.524 5.524 0 01-1.92 2.957c-.962.777-2.177 1.166-3.644 1.166zM98.455 41.476l1.895-4.717-5.088-12.487h2.96l3.434 8.837h.115l3.439-8.837h2.96l-6.872 17.204h-2.843zM92.704 25.257c-.913-.817-2.191-1.225-3.835-1.225-1.31 0-2.412.35-3.296 1.053a4.92 4.92 0 00-1.756 2.722h2.8c.14-.409.412-.76.773-1.001a2.48 2.48 0 011.482-.416c.769 0 1.376.197 1.82.59a2.074 2.074 0 01.663 1.645v.596h-3.207c-1.474 0-2.632.37-3.473 1.111a3.56 3.56 0 00-1.256 2.777 3.642 3.642 0 001.167 2.785c.779.733 1.81 1.1 3.096 1.1a4.745 4.745 0 002.29-.53 3.431 3.431 0 001.39-1.234h.114l.232 1.54h2.364v-8.14c0-1.429-.456-2.553-1.368-3.373zm-1.351 6.67a2.51 2.51 0 01-.83 1.98c-.548.487-1.298.73-2.25.73-.693 0-1.226-.156-1.588-.466a1.494 1.494 0 01-.553-1.19c.007-1.096.72-1.644 2.14-1.646h3.08v.592zM77.343 30.509c.422-.112.83-.272 1.216-.475a6.86 6.86 0 001.256-.88 4.036 4.036 0 001.046-1.54c.269-.69.401-1.425.39-2.165 0-1.57-.503-2.83-1.511-3.775-1.009-.946-2.32-1.418-3.936-1.415h-6.87v16.5h2.96v-6.122h2.247l4.267 6.122h3.317l-4.382-6.25zm-5.449-2.482v-5.17h3.669c.84 0 1.503.227 1.99.68.486.453.73 1.088.734 1.905 0 .817-.246 1.454-.739 1.91a2.784 2.784 0 01-1.961.675h-3.693z" fill="#fff"></path> </svg> </div> </div> <div class="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#fd356e,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-neon-cyan after:bg-trancperent animate-pulse"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div> ${renderComponent($$result, "Sparkles", Sparkles, { "density": 800, "speed": 1, "size": 1.1, "color": "#fd356e", "className": "absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,neon-cyan,transparent_85%)]", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sparkles", "client:component-export": "Sparkles" })} </div> </div>`;
}, "/home/devopsick/GitHub/future/src/components/TrustedByExperts.astro", void 0);

const $$Astro$3 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mx-auto max-w-screen-2xl px-5", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/devopsick/GitHub/future/src/components/layout/container.astro", void 0);

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;
  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};
const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className
}) => {
  const [star, setStar] = useState(null);
  const svgRef = useRef(null);
  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0
      };
      setStar(newStar);
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };
    createStar();
    return () => {
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);
  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX = prevStar.x + prevStar.speed * Math.cos(prevStar.angle * Math.PI / 180);
          const newY = prevStar.y + prevStar.speed * Math.sin(prevStar.angle * Math.PI / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (newX < -20 || newX > window.innerWidth + 20 || newY < -20 || newY > window.innerHeight + 20) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale
          };
        });
      }
    };
    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);
  return /* @__PURE__ */ jsxs("svg", { ref: svgRef, className: cn("w-full h-full absolute inset-0", className), "aria-hidden": "true", children: [
    star && /* @__PURE__ */ jsx(
      "rect",
      {
        x: star.x,
        y: star.y,
        width: starWidth * star.scale,
        height: starHeight,
        fill: "url(#gradient)",
        transform: `rotate(${star.angle}, ${star.x + starWidth * star.scale / 2}, ${star.y + starHeight / 2})`
      },
      star.id
    ),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", style: { stopColor: trailColor, stopOpacity: 0 } }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", style: { stopColor: starColor, stopOpacity: 1 } })
    ] }) })
  ] });
};

const StarsBackground = ({
  starDensity = 15e-5,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className
}) => {
  const [stars, setStars] = useState([]);
  const canvasRef = useRef(null);
  const generateStars = useCallback(
    (width, height) => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) : null
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );
  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };
    updateStars();
    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }
    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        if (star.twinkleSpeed !== null) {
          star.opacity = 0.5 + Math.abs(Math.sin(Date.now() * 1e-3 / star.twinkleSpeed) * 0.5);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: cn("h-full w-full absolute inset-0", className) });
};

const $$SpotlightCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border "> <div class="relative text-center z-10 px-0 py-16 rounded-2xl  w-fit bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] bg-cover bg-black h-full mx-auto"> ${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(
    "https://res.cloudinary.com/dzl9yxixg/image/upload/chat_se21ao.png",
    "src"
  )} alt="grid"${addAttribute(600, "width")} class="mx-auto w-[85%]"${addAttribute(600, "height")}> <h1 class="text-xl font-semibold tracking-tight text-foreground">
Create Group Effortlessly
</h1> <p class="text-base pt-2  text-muted-foreground capitalize">
Seamless chats, crystal-clear videos, and <br>
premium audio quality
</p> ` })} </div> </div>`;
}, "/home/devopsick/GitHub/future/src/components/SpotlightCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/devopsick/GitHub/future/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/devopsick/GitHub/future/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/favicon.svg" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Global Metadata --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"', '><meta name="generator"', '><meta name="title"', '><meta name="description"', '><link rel="sitemap" href="/sitemap-index.xml"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="alternate" type="application/rss+xml"', "", '><meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><!-- Font preloads --><link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Global Scripts --><script src="/js/theme.js"><\/script><script src="/js/scroll.js"><\/script><script src="/js/animate.js"><\/script><!-- <ViewTransitions  /> -->', "<script>\n	const getThemePreference = () => {\n		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n			return localStorage.getItem('theme');\n		}\n		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n	};\n	const isDark = getThemePreference() === 'dark';\n	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');\n\n	if (typeof localStorage !== 'undefined') {\n		const observer = new MutationObserver(() => {\n			const isDark = document.documentElement.classList.contains('dark');\n			localStorage.setItem('theme', isDark ? 'dark' : 'light');\n		});\n		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });\n	}\n<\/script>", ""])), addAttribute(Astro2.generator, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "title"), addAttribute(`${Astro2.site}rss.xml`, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderScript($$result, "/home/devopsick/GitHub/future/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}));
}, "/home/devopsick/GitHub/future/src/components/BaseHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ProviderAnimations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	if (!('animations' in localStorage)) {\n		localStorage.setItem('animations', 'true')\n	} else {\n		localStorage.setItem('animations', 'false')\n	}\n<\/script> ", ' <script src="/js/theme.js"><\/script> <script src="/js/scroll.js"><\/script> <script src="/js/animate.js"><\/script> ', ""])), renderScript($$result, "/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro?astro&type=script&index=1&lang.ts"));
}, "/home/devopsick/GitHub/future/src/components/layout/provider-animations.astro", void 0);

const $$TailwindIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${""}`;
}, "/home/devopsick/GitHub/future/src/components/layout/tailwind-indicator.astro", void 0);

const BackgroundGrid = ({
  color = "#fd356e33",
  cellSize = "25px",
  strokeWidth = "3px",
  className,
  fade = true,
  ...props
}) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `;
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `pointer-events-none absolute inset-0 left-0 top-0 flex h-full w-full ${className}`,
      style: {
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: "repeat",
        backgroundSize: cellSize,
        maskImage: fade ? "radial-gradient(ellipse at top, white, transparent 70%)" : void 0,
        WebkitMaskImage: fade ? "radial-gradient(ellipse at top, white, transparent 70%)" : void 0
      },
      ...props
    }
  );
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, lang, mainClass, bodyClass } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="bg-trancperent text-foreground scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description || "" })}${renderComponent($$result, "ProviderAnimations", $$ProviderAnimations, {})}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body${addAttribute(cn("flex bg-background text-foreground flex-col antialiased min-h-screen", bodyClass), "class")}> ${renderComponent($$result, "BackgroundGrid", BackgroundGrid, {})} <main${addAttribute(cn(mainClass), "class")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "TailwindIndicator", $$TailwindIndicator, {})} </main> </body></html>`;
}, "/home/devopsick/GitHub/future/src/layouts/Layout.astro", void 0);

const PhotoMy = new Proxy({"src":"/_astro/odessa-2023.DoZ2qafE.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/devopsick/GitHub/future/src/assets/odessa-2023.jpg";
							}
							
							return target[name];
						}
					});

const $$Photo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="gap-2 text-center bg-background/10 relative rounded-lg p-5"> <h1 class="scroll-m-20 text-center text-color text-4xl font-extrabold tracking-tight lg:text-5xl">Hi there</h1> <figure class="relative h-[80vh] "> ${renderComponent($$result, "Image", $$Image, { "src": PhotoMy, "alt": "", "class": "w-auto h-auto object-cover aspect-square", "style": {
    maskImage: "url('https://res.cloudinary.com/dzl9yxixg/image/upload/splash_gzfihm.svg')",
    maskSize: "cover",
    maskRepeat: "no-repeat",
    maskPosition: "center"
  } })} </figure> </section>`;
}, "/home/devopsick/GitHub/future/src/components/Photo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Homepage of Future", "description": " I come here to show you my Skill-xd", "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ShootingStars", ShootingStars, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/shooting-stars", "client:component-export": "ShootingStars" })} ${renderComponent($$result3, "StarsBackground", StarsBackground, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/stars-background", "client:component-export": "StarsBackground" })} ${renderComponent($$result3, "SparklesGlobe", $$SparklesGlobe, {})} ${renderComponent($$result3, "SpotlightCard", $$SpotlightCard, {})} ${renderComponent($$result3, "Photo", $$Photo, {})} ${renderComponent($$result3, "TrustedByExperts", $$TrustedByExperts, {})} ` })} ` })}`;
}, "/home/devopsick/GitHub/future/src/pages/index.astro", void 0);

const $$file = "/home/devopsick/GitHub/future/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
