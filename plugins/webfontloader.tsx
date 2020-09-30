import WebFont from "webfontloader/webfontloader";

// WebFont.load({
//   custom: {
//     families: [
//       "Roboto:400,600,700",
//       "Playfair Display",
//       "Font Awesome 5 Pro",
//       "Font Awesome 5 Brands",
//     ],
//     urls: ["./assets/css/fonts.css"],
//   },
// });

WebFont.load({
  google: {
    families: ["Raleway"],
  }
});

const fontLoader = () => <></>;

export default fontLoader;
